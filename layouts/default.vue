<template>
    <div id="app" class="app-container">
        <page-header :navList="navList"></page-header>
        <main class="view">
            <transition name="fade-transform"
                        mode="out-in">
                <nuxt/>
            </transition>
        </main>
        <page-footer :navList="navList"></page-footer>
        <transition name="search-slide">
            <page-search v-if="isShowSearch"></page-search>
        </transition>
        <scroll-top></scroll-top>
    </div>
</template>

<script>
    import {mapMutations,mapState} from 'vuex'
    import PageHeader from '@/components/layout/page-header/page-header'
    import PageFooter from '@/components/layout/page-footer/page-footer'
    import PageSearch from '@/components/layout/page-search/page-search'
    import ScrollTop from '@/components/layout/scroll-top/scroll-top'
    import cloneDeep from "lodash/cloneDeep";
    export default {
        components: {
            PageHeader,
            PageFooter,
            PageSearch,
            ScrollTop
        },

        data() {
            return {

            }
        },

        computed: {
            ...mapState({
                navList: state => state.app.navList,
                theme: state => state.app.theme,
            }),
            isShowSearch() {
                const is = this.$store.state.app.isShowSearch
                if (process.client) {
                    document.documentElement.style.overflowY = is ? 'hidden' : 'visible'
                }
                return is
            }
        },

        methods: {
            ...mapMutations({
                setTheme: 'app/setTheme'
            }),
            handleLocalInfo(k,v){
                const userId=window.localStorage.getItem('userId')
                const userLocal=cloneDeep(JSON.parse(window.localStorage.getItem(userId)))
                if(v===undefined){
                    if(userId){
                        return userLocal[k]
                    }else {
                        return []
                    }
                }else {
                    if(!userLocal[k].includes(v)){
                        userLocal[k].push(v)
                        window.localStorage.setItem(userId,JSON.stringify(userLocal))
                    }
                }
            },
            setFingerprint(){
                const userId=window.localStorage.getItem('userId')
                if(!userId){
                    requestIdleCallback(function () {
                        Fingerprint2.get(function (components) {
                            // console.log(components) // an array of components: {key: ..., value: ...}
                            var values = components.map(function (component) { return component.value })
                            var murmur = Fingerprint2.x64hash128(values.join(''), 31)
                            window.localStorage.setItem('userId',murmur)
                            window.localStorage.setItem(murmur,JSON.stringify({likeIds:[],commentIds:[],viewIds:[]}))
                        })
                    })
                }else {
                    const userLocalInfo=window.localStorage.getItem(userId)
                }
            }
        },

        mounted() {
            this.$nextTick(()=>{
                this.setFingerprint()
            })
            this.setTheme(this.theme || 'light')
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/animation.scss";

    .app-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }

    .view {
        flex: 1;
    }
</style>

