<template>
    <header class="header-container" :class="homeMobileClass">
        <div class="header-logo">
            <switch-theme :size="'30px'"></switch-theme>
            <i class="logo" @click="$router.push('/')">{{webConfig.title}}</i>
        </div>
        <nav class="nav-wrapper">
            <desktop-nav class="desktop-hide">
                <no-ssr>
                    <div class="nav-list-item" v-for="(item, index) in clientNavList" :key="item.link">
                        <div class="nav-link" :class="{'nuxt-link-exact-active':$route.path===item.link}"
                             @click="goSkip(item.link)">{{item.name}}
                        </div>
                        <span class="nav-dot"></span>
                    </div>
                </no-ssr>
            </desktop-nav>
            <mobile-nav class="mobile-nav" ref="mobileNav">
                <no-ssr>
                    <div class="nav-list-item" v-for="(item, index) in clientNavList" :key="item.link">                        <div class="nav-link"
                        <div class="nav-link" :class="{'nuxt-link-exact-active':$route.path===item.link}"
                             @click="goSkip(item.link)">{{item.name}}
                            <span class="nav-dot"></span>
                        </div>
                    </div>
                </no-ssr>
            </mobile-nav>
        </nav>
    </header>
</template>

<script>
    import DesktopNav from "@/components/base/nav/desktop-nav"
    import MobileNav from "@/components/base/nav/mobile-nav"
    import SwitchTheme from '@/components/base/switch-theme/switch-theme'
    import {mapState} from 'vuex'
    import dropRight from 'lodash/dropRight'
    export default {
        components: {
            DesktopNav,
            MobileNav,
            SwitchTheme
        },
        methods:{
            hideMobileNav(){
                console.log(55)
            },
            goSkip(link) {
                if (/loginout/.test(link)) {
                    const isLoginout = confirm("确定退出当前账号吗？");
                    if (isLoginout) {
                        this.$store.commit('app/setToken', undefined)
                        this.$store.commit('app/setClientNavList', undefined)
                        this.$router.replace('/login')
                    }
                } else {
                    this.$router.replace(link)
                }
                this.$refs.mobileNav.hideMobileNav()
            }
        },
        created() {

        },
        computed: {
            ...mapState({
                clientNavList: state =>state.app.clientNavList
            }),
            webConfig() {
                return this.$store.state.app.webConfig
            },
            homeMobileClass() {
                return this.$route.path === '/' ? "home-mobile-class" : "";
            }
        }
    };
</script>

<style lang="scss" scoped>
    .mobile-nav {
        .nav-list-item {
            display: flex;
            justify-content: flex-start;
            margin-top: 16px;
            font-weight: $font-weight-bold;
        }
        .nav-link {
            position: relative;

            &:hover .nav-dot {
                background-color: $nav-dot-color;
            }
        }

        .nuxt-link-exact-active {
            & .nav-dot {
                background-color: var(--theme-active);
            }

            &:hover .nav-dot {
                background-color: var(--theme-active);
            }
        }

        .nav-dot {
            position: absolute;
            top: -4px;
            right: -10px;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            transition: all 0.25s ease;
        }
    }
    .header-container {
        @include container;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 160px;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        z-index: $index-top;
        box-sizing: border-box;

        @media (max-width: 480px) {
            height: 100px;
        }
    }

    .header-logo {
        .logo {
            cursor: pointer;
            margin-left: 10px;
            font-size: $title-font-size-medium;
            transition: $theme-transition;
        }
    }

    @media (max-width: 1024px) {
        .home-mobile-class {

            .header-logo {
                color: #fff;
            }
        }
    }

    @media (max-width: 1024px) {
        .desktop-hide {
            display: none !important;
        }
    }
</style>
