<template>
    <div class="search-container">
        <div class="search-image" :style="{backgroundImage: `url(${webConfig.defaultStar.cover})`}"></div>
        <aside class="section-search">
            <div class="search-close" @click="closeSearch">
                <i class="icon icon-close"></i>
            </div>
            <div class="search-wrapper">
                <input class="search-input" type="text" placeholder="search..." maxlength="10" v-model="searchKeyword"
                       @keyup="debouncedSearch">
                <div class="search-result">为你找到 {{total}} 项结果</div>
                <loading v-if="!articles.length && loading"></loading>
                <ul class="result-list" v-show="articles.length">
                    <li class="result-item" v-for="article in articles" :key="article.id">
                        <h4 class="title">
                          <span class="dotWrap" @click="selectArticle(article.id)">
                            {{article.title}}
                            <span class="hover-dot"></span>
                          </span>
                        </h4>
                        <time class="time" :datetime="article.create_time | filterTime">{{article.create_time|
                            filterTime}}
                        </time>
                    </li>
                </ul>
                <dl class="suggestion-wrapper">
                    <dd class="suggestion-item">
                        <tag-list :title="'分类'" :tagList="categories" @selectTag="onSelectCategory"></tag-list>
                    </dd>
                    <dd class="suggestion-item">
                        <tag-list :title="'标签'" :tagList="tags" @selectTag="onSelectTag"></tag-list>
                    </dd>
                    <dd class="suggestion-item">
                        <tag-list :title="'作者'" :tagList="authors" @selectTag="onSelectAuthor"></tag-list>
                    </dd>
                </dl>
            </div>
            <footer class="footer">
                <switch-theme :size="'18px'"></switch-theme>
                <span class="logo">{{webConfig.title}}</span>
                <span class="desc" v-html="webConfig.signature"></span>
            </footer>
        </aside>
    </div>
</template>

<script>
    import {debounce} from 'throttle-debounce'
    import {mapMutations, mapState} from 'vuex'
    import TagList from '@/components/base/tag-list/tag-list'
    import SwitchTheme from '@/components/base/switch-theme/switch-theme'

    export default {
        components: {
            TagList,
            SwitchTheme
        },

        data() {
            return {
                page: 0,
                searchKeyword: ''
            }
        },

        computed: {
            ...mapState({
                token: state => state.app.token,
                webConfig: state => state.app.webConfig,
                total: state => state.search.total,
                loading: state => state.search.loading,
                articles: state => state.search.articles,
                categories: state => state.search.categories,
                tags: state => state.search.tags,
                authors: state => state.search.authors
            })
        },

        methods: {
            ...mapMutations({
                setShowSearch: 'app/setShowSearch'
            }),

            closeSearch() {
                this.setShowSearch(false)
            },

            onSelectCategory(category) {
                this.$router.push(`/category/${category.id}`)
                this.closeSearch()
            },
            onSelectTag(tag) {
                this.$router.push(`/tag/${tag.id}`)
                this.closeSearch()
            },
            onSelectAuthor(author) {
                this.$router.push(`/about/${author.id}`)
                this.closeSearch()
            },

            selectArticle(id) {
                this.$router.push(`/article/${id}`)
                this.closeSearch()
            },

            async getAuthors() {
                try {
                    const res = await author.getAuthors()
                    this.authors = res
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.log(e)
                }
            },

            async getCategories() {
                try {
                    const res = await category.getCategories()
                    this.categories = res
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.log(e)
                }
            },

            async searchArticles() {
                if (!this.searchKeyword) {
                    return
                }
                this.$store.dispatch('search/searchArticles', {isFront:this.token?1:0,search:this.searchKeyword})
            },
        },

        created() {
            this.$store.dispatch('search/getSearchData')
            this.debouncedSearch = debounce(1000, false, () => {
                this.searchArticles()
            })
        },

        mounted() {
            if (process.client) {
                document.body.style.overflow = 'hidden'
            }
        },

        beforeDestroy() {
            if (process.client) {
                document.body.style.overflow = 'visible'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dotWrap {
        position: relative;
        cursor: pointer;
        &:hover .hover-dot {
            background-color: var(--theme-active);
        }

        .hover-dot {
            position: absolute;
            right: -10px;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            transition: all 0.25s ease;
        }
    }

    .search-container {
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: var(--app-background-color);
        z-index: $index-top;
    }

    .search-image {
        width: 40%;
        height: 100%;
        /*background: url(../../../assets/image/lighthouse.jpg) no-repeat center center;*/
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        @media (max-width: 768px) {
            width: 0;
        }
    }

    .section-search {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 60%;
        padding: 100px 5% 30px;
        box-sizing: border-box;
        overflow: auto;
        -webkit-overflow-scrolling: touch;

        @media (max-width: 768px) {
            width: 100%;
            padding: 85px 85px 30px;
        }

        @media (max-width: 474px) {
            padding: 85px 35px 30px;
        }
    }

    .search-close {
        position: fixed;
        top: 20px;
        right: 40px;
        @media (max-width: 1024px) {
            top: 22px;
            right: 35px;
        }

        .icon-close {
            font-size: $title-font-size-large;
            transition: $theme-transition;
            cursor: pointer;

            &:hover {
                color: var(--theme-active);
            }

            @media (max-width: 1024px) {
                font-size: $title-font-size-medium;
            }
        }
    }

    .search-wrapper {
        .search-input {
            width: 100%;
            height: 62px;
            color: var(--font-color-primary);
            font-size: $title-font-size-medium;
            font-weight: $font-weight-bold;
            outline: none;
            border-width: 0 0 7px 0;
            border-style: solid;
            border-color: var(--border-color);
            background-color: var(--app-background-color);
            transition: border .25s ease-in-out;

            &:focus {
                border-bottom-color: var(--theme-active);
            }

            &::-webkit-input-placeholder {
                color: var(--border-color);
            }

            @media (max-width: 747px) {
                font-size: $title-font-size-small;
            }
        }

        .search-result {
            margin-top: 10px;
            font-size: $font-size-small;
            font-weight: $font-weight-bold;
        }
    }

    .result-list {
        .result-item {
            margin-top: 20px;

            .time {
                font-size: $font-size-base;

                @media (max-width: 768px) {
                    font-size: $font-size-small;
                }
            }

            .title {
                font-size: $title-font-size-base;
                font-weight: $font-weight-bold;
                @media (max-width: 768px) {
                    font-size: $title-font-size-small;
                }
            }
        }
    }

    .suggestion-wrapper {
        margin: 30px 0;
        overflow: hidden;

        .suggestion-item {
            float: left;
            width: 50%;

            &:first-child {
                margin-top: 0;
            }

            @media (max-width: 1199px) {
                margin-top: 30px;
                width: 100%;
            }
        }
    }

    .footer {
        .logo {
            margin-left: 8px;
            color: var(--font-color-dark);
        }

        .desc {
            margin-left: 20px;
        }
    }
</style>
