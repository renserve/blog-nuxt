<template>
    <div class="mood-container">
        <split-line :icon="'post'" :desc="`${listsTotal} posts`"></split-line>
        <no-ssr v-if="isMoodEdit">
            <div class="mood mood-editor">
                <textarea v-model="form.content" placeholder="我想说..." name="" id="" maxlength="500" rows="8"></textarea>
                <div class="imgSend">
                    <div class="uploadWrap">
                        <i class="iconfont iconjiahao"></i>
                        <div class="imgWrap" v-if="form.cover" :style="{backgroundImage:`url('${form.cover}')`}">
                            <i class="iconfont iconchahao" @click="form.cover=''"></i>
                        </div>
                        <input accept='.jpg,.jpeg,.bmp,.png,.gif' @change="uploadImage($event)" type="file">
                    </div>
                    <i class="icon icon-send" @click="debouncedSend"></i>
                </div>
            </div>
        </no-ssr>
        <client-only class="mood" v-for="list in lists" :key="list.id" :public="list.public">
            <div>
                <i class="iconfont iconrili"></i>
                <time :datetime="list.create_time | filterTime('Y-m-d')">{{list.create_time | filterTime('Y-m-d')}}
                </time>
<!--                <div class="content" v-html="moodContent(list.content)"></div>-->
                <article-content class="content" :content="list.content"></article-content>

            </div>
            <img v-if="list.cover" :src="list.cover" alt="">
        </client-only>
        <div v-if="isLoadMore" class="load-more" @click="onLoadMore"></div>
        <loading v-if="loading"></loading>
    </div>
</template>

<script>
import {debounce} from 'throttle-debounce'
import {post} from '@/services/http/axios'
import SplitLine from '@/components/base/split-line/split-line'
import ClientOnly from '@/components/base/client-only/client-only'
import {mapState} from 'vuex'
import ArticleContent from '@/components/layout/article-content/article-content'
import flatten from 'lodash/flatten'

export default {
    name: 'mood-page',
    components: {
        SplitLine,
        ClientOnly,
        ArticleContent
    },

    head() {
        return {
            title: '随笔'
        }
    },
    data() {
        return {
            page: 0,
            form: {
                public: 0,
                content: undefined,
                cover: undefined,
            },
        }
    },
    created() {
        this.debouncedSend = debounce(1000, true, () => {
            this.sendMood()
        })
    },
    methods: {
        async sendMood() {
            Object.assign(this.form, {modelId: 1})
            await post('/web/article/mood', this.form).then(res => {
                this.$store.commit('mood/setMoodEdit', false)
                this.form.content = undefined
                this.form.cover = undefined
                this.$store.dispatch('mood/getLists', {page: 0, count: 10, isFront: this.token ? true : false})
            })
        },
        uploadImage(e) {
            if (!e.target.files[0]) {
                return
            }
            const formData = new FormData(); //实例化一个formData对象
            formData.append("file", e.target.files[0]);
            post('/cms/file', formData).then(res => {
                this.form.cover = res && res.data.url
            })
        },
        onLoadMore() {
            if (this.loading) {
                return
            }
            this.page++
            this.$store.dispatch('mood/getMoreLists', {
                page: this.page,
                count: 10
            })
        }
    },
    async fetch({store, params}) {
        const token = store.state.app.token
        await store.dispatch('mood/getLists', {page: 0, count: 10, isFront: token ? true : false})
    },
    computed: {
        isLoadMore() {
            const length = this.lists.length
            if (length && !this.loading) {
                return this.listsTotal > length
            } else {
                return false
            }
        },
        ...mapState({
            token: state => state.app.token,
            isMoodEdit: state => state.mood.isMoodEdit,
            loading: state => state.mood.loading,
            lists: state => state.mood.lists,
            listsTotal: state => state.mood.listsTotal
        })
    }
}
</script>

<style lang="scss" scoped>
.mood-container {
    @include container;
    overflow: hidden;

    .mood-editor {
        margin-top: 20px;

        .imgSend {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            .icon-send {
                font-size: 20px;
                cursor: pointer;
            }
        }

        .uploadWrap {
            margin-top: 8px;
            width: 100px;
            height: 100px;
            border: 1px dashed var(--border-color);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;

            .imgWrap {
                width: 100%;
                height: 100%;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                border-radius: 5px;
                position: absolute;
                z-index: 3;
                top: 0;
                left: 0;

                i {
                    float: right;
                    padding: 2px 3px;
                    font-size: 16px;
                    text-align: center;
                    color: var(--theme-btn);
                    overflow: hidden;
                    font-weight: bold;
                    cursor: pointer;

                    &:hover {
                        font-weight: bold;
                        color: red;
                    }
                }
            }

            .iconjiahao {
                color: var(--border-color);
                font-size: 30px;
            }

            input {
                position: absolute;
                z-index: 2;
                opacity: 0;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }

        textarea {
            width: 100%;
            border: 1px solid var(--border-color);
            outline: none;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 10px;
            resize: none;

            &:focus {
                border-color: var(--font-color-light);
            }
        }
    }

    .mood {
        overflow: hidden;
        img {
            width:100%;
            max-width: 480px!important;
        }
        i, time {
            font-size: 13px;
        }
        .content {
            margin-top: 8px;
            margin-bottom: 5px;
            overflow: hidden;
        }

        margin-top: 20px;
        padding: 30px;
        color: var(--font-color-article);
        background: var(--mood-background);
        border: 1px solid var(--border-color);
        border-radius: 5px;
        @media (max-width: 480px) {
            margin-top: 10px;
            padding: 15px;
            font-size: 14px;
        }
    }

}

@mixin margin {
    margin-top: .5em;
    margin-left: 2em;

    @media (max-width: 480px) {
        margin-top: .3em;
        margin-left: .7em;
    }
}

.load-more {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    margin: 0 auto;
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
