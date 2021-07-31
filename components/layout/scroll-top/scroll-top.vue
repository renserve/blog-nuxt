<template>
    <transition name="slide-up">
        <div class="scroll-wrap">
            <div v-if="isShowMoodList" class="btn" @click="showMoodList"><i :class="{rotateChange:toggleLoading}" class="icon iconhuanyihuan"></i></div>
            <no-ssr>
                <div class="btn" v-if="token && $route.path==='/mood'" @click="editMoodClick"><i class="icon iconzuozhe"></i></div>
            </no-ssr>
            <div v-if="isShowScroll" class="btn" @click="scrollTop"><i class="icon icon-up"></i></div>
        </div>
    </transition>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                isListChnage: false,
                isShowScroll: false
            }
        },
        computed: {
            ...mapState({
                token: state => state.app.token,
                isMoodEdit: state => state.mood.isMoodEdit,
                isMoodList: state => state.app.isMoodList,
                toggleLoading: state => state.app.toggleLoading,
                total: state => state.tag.total,
                params: state => state.app.params,
            }),
            isShowMoodList(){
                return [/category/,/about\/\d+/,/tag\/\d+/].some(path=>path.test(this.$route.path))
            },
        },
        methods: {
            showMoodList(){
                let key,path=this.$route.path;
                if(/category/.test(path) || /tag\/\d+/.test(path)){
                    key='tag'
                    this.$store.commit('app/showMoodList',[key,!this.isMoodList[key]])
                    this.$store.dispatch(`tag/getArticles`,this.params)
                }else if(/about\/\d+/.test(path)){
                    key='about'
                    this.$store.commit('app/showMoodList',[key,!this.isMoodList[key]])
                    this.$store.dispatch(`about/getArticles`,this.params)
                }
            },
            editMoodClick(){
                this.$store.commit('mood/setMoodEdit',!this.isMoodEdit)
            },
            scrollTop() {
                let timer = null
                cancelAnimationFrame(timer)
                timer = requestAnimationFrame(function fn() {
                    let top = document.body.scrollTop || document.documentElement.scrollTop
                    if (top > 0) {
                        document.body.scrollTop = document.documentElement.scrollTop = top - 150
                        timer = requestAnimationFrame(fn)
                    } else {
                        cancelAnimationFrame(timer)
                    }
                })
            }
        },

        mounted() {
            function getScrollTop() {
                let scrollTop = 0
                let bodyScrollTop = 0
                let documentScrollTop = 0
                if (document.body) {
                    bodyScrollTop = document.body.scrollTop
                }
                if (document.documentElement) {
                    documentScrollTop = document.documentElement.scrollTop
                }
                scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
                return scrollTop
            }

            window.addEventListener('scroll', () => {
                if (getScrollTop() * 2 > window.innerWidth) {
                    this.isShowScroll = true
                } else {
                    this.isShowScroll = false
                }
            })
        }
    }
</script>
progress-image
<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/animation.scss';
    .scroll-wrap {
        position: fixed;
        right: 10px;
        bottom: 5%;
        overflow: hidden;
        padding: 8px;
        z-index: $index-popper - 1;
        .rotateChange {
            animation: rotateAnimation 1s linear infinite;
        }
        .btn {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            color: var(--theme-btn);
            box-shadow: 0 4px 5px 2px rgba(0, 0, 0, .14);
            border-radius: 50%;
            background-color: var(--app-background-color);
            cursor: pointer;
            @media (max-width: 480px) {
                margin-top: 15px;
                width: 32px;
                height: 32px;
                .icon {
                    font-size: 16px;
                }
            }
            @media (min-width: 480px) {
                margin-top: 20px;
                width: 38px;
                height: 38px;
                .icon {
                    font-size: 20px;
                }
            }
            @media (min-width: 1024px) {
                margin-top: 20px;
                width: 44px;
                height: 44px;
                .icon {
                    font-size: 24px;
                }
            }
        }
    }
    @keyframes rotateAnimation{
        0% {
            -webkit-transform: rotate(0deg);
        }
        25% {
            -webkit-transform: rotate(90deg);
        }
        50% {
            -webkit-transform: rotate(180deg);
        }
        75% {
            -webkit-transform: rotate(270deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
</style>
