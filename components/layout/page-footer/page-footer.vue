<template>
    <footer class="footer-container">
        <div class="footer-wrapper">
            <a class="between">
                <switch-theme :size="'18px'"></switch-theme>
                <span class="logo" @click="$router.push('/')">{{webConfig.title}}</span>
            </a>
            <div class="menu-wrapper">
                <desktop-nav>
                    <no-ssr>
                        <div class="nav-list-item" v-for="(item, index) in clientNavList" :key="item.link">
                            <div class="nav-link" :class="{'nuxt-link-exact-active':$route.path===item.link}"
                                 @click="goSkip(item.link)">{{item.name}}
                            </div>
                            <span class="nav-dot"></span>
                        </div>
                    </no-ssr>
                </desktop-nav>
            </div>
            <!--<div class="social-links between">
              <a href="mailto:1249485588@qq.com" target="_blank">
                <i class="icon icon-mail"></i>
              </a>
              <a href="" target="_blank">
                <i class="icon icon-github"></i>
              </a>
            </div>-->
        </div>
        <div class="footer-copyright">
            <span class="copyright">{{webConfig.copyright}}</span>
            <div class="record-number">{{webConfig.record}}</div>
        </div>
    </footer>
</template>

<script>
    import SwitchTheme from '@/components/base/switch-theme/switch-theme'
    import DesktopNav from '@/components/base/nav/desktop-nav'
    import {mapState} from 'vuex'
    export default {
        components: {
            SwitchTheme,
            DesktopNav
        },
        methods:{
            goSkip(link) {
                if (/loginout/.test(link)) {
                    const isLoginout = confirm("确定退出当前账号吗？");
                    if (isLoginout) {
                        this.$store.commit('app/setToken', undefined)
                        this.$store.commit('app/setNavList', dropRight(this.navList, 2))
                        this.$router.replace('/login')
                    }
                } else {
                    this.$router.replace(link)
                }
            }
        },
        computed: {
            ...mapState({
                clientNavList: state =>state.app.clientNavList
            }),
            webConfig() {
                return this.$store.state.app.webConfig
            },
        }
    }
</script>

<style lang="scss" scoped>
    .footer-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        z-index: $index-normal;

        .footer-wrapper {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: calc(100% - 85px - 85px);
            max-width: 1024px;
            margin-top: 8vh;
            padding: 0 15px 15px;

            @media (max-width: 1440px) {
                max-width: 950px;
            }

            @media (max-width: 1024px) {
                flex-direction: column;
            }

            @media (max-width: 480px) {
                width: 100%;
            }

            .menu-wrapper {
                @media (max-width: 1024px) {
                    margin: 14px 0;
                }
            }

            .between {
                width: 100px;

                @media (max-width: 1024px) {
                    display: flex;
                    justify-content: center;
                }
            }

            .logo {
                cursor: pointer;
                margin-left: 8px;
                line-height: 1.8;
            }

            .social-links {
                display: flex;
                justify-content: flex-end;
                font-size: 1rem;

                @media (max-width: 1024px) {
                    justify-content: center;
                }

                a {
                    display: flex;
                    align-items: center;
                    margin-left: 24px;

                    &:first-child {
                        margin-left: 0;
                    }
                }

                .icon {
                    font-size: $font-size-icon-rem;

                    &:hover {
                        color: var(--theme-active);
                    }
                }

                .text {
                    white-space: nowrap;

                    &:hover {
                        color: var(--theme-active);
                    }
                }
            }
        }

        .footer-copyright {
            font-size: 12px;
            font-weight: 400;
            line-height: 1.3;
            max-width: 600px;
            margin: 0 auto;
            padding: 25px 30px;
            text-align: center;
            letter-spacing: .7px;
            color: var(--font-color-light);

            .copyright {
                font-weight: $font-weight-bold;

                .logo {
                    color: var(--font-color-dark);
                }
            }
        }
    }

    .record-number {
        margin-top: 10px;
    }

    ;
</style>
