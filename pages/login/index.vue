<template>
    <div class="messages-container">
        <split-line icon="icondenglu" desc="登录"></split-line>
        <section class="user-wrapper">
            <input
                    v-model="form.username"
                    maxlength="32"
                    class="user-input"
                    name="text"
                    :required="true"
                    type="text"
                    placeholder="账号（必填）"
            >
            <input
                    v-model="form.password"
                    @keyup.enter="debouncedSend"
                    class="user-input"
                    name="email"
                    type="email"
                    placeholder="密码（必填）"
            >

            <input
              class="user-input"
              name="url"
              :value="loginTips"
              type="submit"
              @click="debouncedSend"
            >
        </section>
        <split-line icon="iconpeizhitubiaosvg-" desc="入驻申请"></split-line>
        <section class="editor-wrapper">
            <comment-editor ref="editor" :isMessageEditor="true" @send="onSend"
            :placeholder="placeholder">
            </comment-editor>
        </section>
        <ul class="messages-wrapper markdown">
            <li class="message-item" v-for="item in apply" :key="item.id">
                <span v-if="item.nickname" class="nickname">{{item.nickname}}</span>
                <div class="content">
                    <no-ssr>
                        <p v-html="marked(item.reply)">
                        </p>
                    </no-ssr>
                </div>
                <time class="time" :datetime="item.create_time | filterTime">{{item.create_time | filterTime}}
                </time>
            </li>
        </ul>
        <div v-show="isLoadMore" class="load-more" @click="loadMore"></div>
        <loading v-show="loading"></loading>
        <empty v-if="!loading && !apply.length" :message="'还没有入驻申请 /(ㄒoㄒ)/~~'" :isBack="false"></empty>
    </div>
</template>

<script>
    import SplitLine from '@/components/base/split-line/split-line'
    import CommentEditor from '@/components/base/comment-editor/comment-editor'
    import markdown from '@/plugins/marked'
    import {mapState} from 'vuex'
    import Uitls from '@/services/utils/util'
    import dropRight from 'lodash/dropRight'
    import {debounce} from 'throttle-debounce'
    export default {
        name: 'apply-page',

        components: {
            SplitLine,
            CommentEditor
        },

        head() {
            return {
                title: '入驻申请'
            }
        },

        async fetch({store, params}) {
            await store.dispatch('apply/getApply', {
                page: 0,
                count: 10
            })
        },

        data() {
            return {
                loginTips:'登录',
                form:{
                    username:"",
                    password:"",
                },
                page: 0
            }
        },

        computed: {
            ...mapState({
                token: state => state.app.token,
                clientNavList: state => state.app.clientNavList,
                apply: state => state.apply.apply,
                total: state => state.apply.total,
                loading: state => state.apply.loading
            }),

            isLoadMore() {
                if (this.apply.length && !this.loading) {
                    return this.total > this.apply.length
                } else {
                    return false
                }
            }
        },

        watch: {
            apply() {
                this.$nextTick(() => {
                    this.initImage()
                })
            }
        },

        methods: {
            async login(){
                if (!this.form.username || !this.form.password) {
                    alert('账号和密码不能为空')
                    return
                }
                if(this.waitSkip){
                    return
                }
                this.loginTips='登录中...'
                await this.$store.dispatch('app/getToken', this.form).then(token=>{
                    if(token){
                        let time=3;
                        (!this.clientNavList.length) && this.$store.commit('app/setClientNavList',[
                            {
                                link: `/about/${token.id}`,
                                ssr:0,
                                name: this.form.username
                            },
                            {
                                link: "/loginout",
                                ssr:0,
                                name: "退出"
                            }
                        ])
                        window.localStorage.setItem('journeyToken',JSON.stringify(token))
                        this.waitSkip=setInterval(()=>{
                            this.loginTips=`登录成功，跳转中（${time}）`
                            time--
                            if(!time){
                                clearInterval(this.waitSkip)
                                this.waitSkip=null
                                this.$router.replace(`/about/${token.id}`)
                            }
                        },1000)
                    }else {
                        this.loginTips='登录'
                    }
                }).catch(()=>{
                    this.loginTips='登录'
                })
            },
            // markdown 解析
            marked(content) {
                return markdown(content)
            },

            loadMore() {
                if (this.loading) {
                    return
                }
                this.page++
                this.$store.dispatch('apply/getMoreApply', {
                    page: this.page
                })
            },

            initImage() {
                import('../../services/utils/lazy-img').then(res => {
                    res.default('.image-popper')
                })
            },

            async onSend({nickname, content,email}) {
                try {
                    const res = await this.$store.dispatch('apply/createApply', {
                        nickname,
                        email,
                        content
                    })
                    if (res && res.code === 1) {
                        this.$refs.editor.resetField()
                        this.$store.dispatch('apply/getApply', {
                            page: 0,
                            count:10
                        })
                    }
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.log(e)
                }
            }
        },
        created(){
            this.placeholder='入驻须知（因网站运营成本，入驻费暂定为￥199/人/年）：\n'
                +'为保证入驻审核成功请填写以下信息：\n'
                +'1：个人联系方式（QQ或微信）\n'
                +'2：申请入驻理由\n'
                +'3：申请账号ID（默认昵称）\n'
                +'以上信息不会被公开。填写完成后，可在下方关注审核状态\n\n';

            this.debouncedSend = debounce(1000, true, () => {
                this.login()
            })
        },
        mounted() {
            this.initImage()
        }
    }
</script>

<style lang="scss" scoped>
    .user-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        margin: 12px .5em 30px;
        @media (max-width: 768px) {
            flex-direction: column;
        }
        box-sizing: border-box;
        .user-input {
            width: calc(32% - 20px);
            height: 1em;
            margin-right: 1em;
            line-height: normal; // 解决 placeholder 在 ios 无法垂直居中的问题
            padding: 8px 10px;
            outline: none;
            color: var(--font-color-article);
            white-space: nowrap;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            background-color: var(--app-background-color);
            transition: $theme-transition;
            -webkit-appearance: none;
            -webkit-tap-highlight-color: transparent;

            &:hover {
                border-color: var(--font-color-light);
            }

            &:focus {
                border-color: var(--font-color-light);
            }
            &:last-child {
                box-sizing: content-box;
                margin-right: 0;
                cursor: pointer;
                line-height: 1em;
            }
            @media (max-width: 768px) {
                width: calc(100% - 20px);
                margin: 3px 5px;
                &:last-child {
                    margin-right: .5em;
                }
            }
        }
    }
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/mixin.scss';
    .reply-wrapper {
        box-sizing: border-box;
        padding: 6px 10px;
        font-size: $font-size-base;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        background-color: var(--primary-light-0);

        .reply-nickname {
            font-weight: $font-weight-bold;
        }
    }
    .messages-container {
        @include container;

        .editor-wrapper {
            margin: .5em;
        }
    }

    .messages-wrapper {
        display: flex;
        flex-wrap: wrap;

        .message-item {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: .4em .5em;
            padding: 1em;
            /*background-color: var(--tag-color);*/
            border-radius: 4px;
            transition: all .25s ease-in-out;
            /*border: 1px dashed var(--main-border-color);*/
            border: 1px solid var(--border-color);
            @media (max-width: 480px) {
                margin: .2em .5em;
                padding: .5em;
            }

            &:hover {
                transform: translateY(-2px);
            }

            .nickname {
                height: 24px;
                font-size: $font-size-base;
                font-weight: $font-weight-bold;
            }

            .content {
                flex: 1;
                font-size: $font-size-base;
                /*padding: .5em 0;*/
                img {
                    width: 50%;
                }
            }

            .time {
                /*margin-top: 1em;*/
                font-size: $font-size-base;
                text-align: right;
            }
        }
    }

    .load-more {
        box-sizing: border-box;
        width: 40px;
        height: 40px;
        margin: 10px auto 0;
        border: 8px solid #dcdfe7;
        border-radius: 50%;
        transition: all .25s ease-in-out;
        cursor: pointer;

        @media (max-width: 480px) {
            width: 30px;
            height: 30px;
            border-width: 5px;
        }

        &:hover {
            border-color: var(--theme-active);
            background-color: var(--theme-active);
            transform: scale(.65);
        }
    }
</style>
