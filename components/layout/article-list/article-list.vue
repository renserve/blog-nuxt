<template>
    <div class="article-list-container">
        <div class="article-list-wrapper">
            <template v-if="lists.length">
                <client-only v-for="(article,index) in lists" :key="article.id" :public="article.public">
                    <div class="mood" :style="[!index?{marginTop:0}:{}]" v-show="isShowMoodList">
                        <div>
                            <i class="iconfont iconrili"></i>
                            <time :datetime="article.create_time | filterTime('Y-m-d')">{{article.create_time | filterTime('Y-m-d')}}</time>
<!--                            <div  class="content" v-html="article.content"></div>-->
                            <article-content class="content" :content="article.content"></article-content>
                        </div>
                        <img v-if="article.cover" :src="article.cover" alt="">
                    </div>
                    <div class="article-item" :style="[!index?{border:'none'}:{}]" v-show="!isShowMoodList">
                        <article class="article-wrapper">
                            <a class="category" v-for="category in article.categories" :key="category.id">
                                {{category.name}}
                            </a>
                            <h3 class="title">
                                <router-link :to="'/article/' + article.id" class="article-link">
                                    {{article.title}}<span class="hover-dot"></span>
                                </router-link>
                            </h3>
                            <p class="content">{{article.description}}</p>
                            <footer class="footer">
                                <ul class="author-wrapper">
                                    <li class="author" v-for="author in article.authors" :key="author.id">
                                       <span class="avatar"
                                             :style="{backgroundImage:`url(${author.avatar})`}"></span>
                                        <span>{{author.nickname}}</span>
                                    </li>
                                </ul>
                                <div class="info-wrapper">
                                    <i class="icon icon-eye"></i>
                                    <span class="count">{{article.views}}</span>
                                    <i class="icon icon-reply"></i>
                                    <span class="count">{{article.comments && article.comments.length}}</span>
                                    <i class="icon icon-heart"></i>
                                    <span class="count">{{article.like}}</span>
                                    <time class="time" :datetime="article.create_time | filterTime('Y-m-d')">
                                        {{article.create_time | filterTime('Y-m-d')}}
                                    </time>
                                </div>
                            </footer>
                        </article>
                        <div v-if="article.cover" class="split"></div>
                        <img v-if="article.cover" class="article-image" :src="article.cover"/>
                    </div>
                </client-only>
            </template>
            <div v-if="isLoadMore" class="load-more" @click="$emit('loadMore',moodListKey && isMoodList[moodListKey])"></div>
            <loading v-if="loading"></loading>
            <empty v-if="!loading && !lists.length"></empty>
        </div>
    </div>
</template>

<script>
    import ClientOnly from '@/components/base/client-only/client-only'
    import ArticleContent from '@/components/layout/article-content/article-content'
    import {mapState} from 'vuex'
    import isObject from 'lodash/isObject'
    export default {
        name: 'article-list',
        components: {
            ClientOnly,
            ArticleContent
        },
        props: {
            articles: {
                type: Array,
                default: () => []
            },
            moods: {
                type: Array,
                default: () => []
            },
            loading: {
                type: Boolean,
                default: false
            },
            total: {
                type: Number,
                default: 0
            }
        },
        computed: {
            ...mapState({
                isMoodList: state => state.app.isMoodList,
                toggleLoading: state => state.app.toggleLoading
            }),
            moodListKey(){
                let path=this.$route.path
                if(/category/.test(path) || /tag\/\d+/.test(path)){
                    return 'tag'
                }else if(/about\/\d+/.test(path)){
                    return 'about'
                }else {
                    return ''
                }
            },
            isShowMoodList(){
                return this.moodListKey && this.isMoodList[this.moodListKey]
            },
            lists(){
                return this.isShowMoodList?this.moods:this.articles;
            },
            isLoadMore() {
                const total=isObject(this.total)?(this.isShowMoodList?this.total.mood:this.total.article):this.total
                if (this.lists.length && !this.loading) {
                    return total > this.lists.length
                } else {
                    return false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
    .article-list-container {
        @include container;
        box-sizing: border-box;
        margin: 0 auto;
    }
    .article-list-wrapper {
        box-sizing: border-box;
        /*padding: 50px 120px;*/
        padding: 50px 50px;
        border-radius: 5px;
        background-color: var(--app-background-color-light);
        box-shadow: 0 2px 24px 5px var(--app-box-shadow);
        transition: $theme-transition;
        /*.changeList {
            position: absolute;
            top: 8px;
            right: 12px;
            cursor: pointer;
            z-index: 4;
            color: var(--font-color-light);
            .iconhuanyihuan {
                margin-right: 4px;
            }
        }*/

        @media (max-width: 1440px) {
            padding: 40px;
        }
        @media (max-width: 1024px) {
            padding: 30px;
        }
        @media (max-width: 768px) {
            padding: 20px;
        }
        @media (max-width: 480px) {
            padding: 0;
            box-shadow: none;
        }
        .mood {
            overflow: hidden;
            i,time {
                font-size: 13px;
            }
            .content {
                margin-top: 8px;
                margin-bottom: 5px;
            }
            margin-top: 20px;
            padding: 30px;
            color:var(--font-color-article);
            background: var(--mood-background);
            border: 1px solid var(--border-color);
            border-radius: 5px;
            /*&:first-child{
                margin-top: 0;
            }*/
            @media (max-width: 480px) {
                margin-top: 10px;
                padding: 15px;
                font-size: 14px;
            }
        }
        .article-item {
            position: relative;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            text-align: left;
            box-sizing: border-box;
            border-top: 1px solid var(--main-border-color);
            padding: 40px 30px;
            @media (max-width: 1024px) {
                flex-direction: column-reverse;
                right: auto;
                width: 100%;
                padding: 40px 30px;
                text-align: left;
                &:nth-child(2n) {
                    flex-direction: column-reverse;
                    left: auto;
                    text-align: left;
                }
            }
            @media (max-width: 768px) {
                padding: 30px 20px;
            }
            @media (max-width: 480px) {
                padding: 20px 10px;
            }
            &:hover {
                background: var(--app-background-color-active);
            }
        }
    }

    .article-wrapper {
        width: 100%;
        color: var(--font-color-article);

        .category {
            cursor: pointer;
            color: var(--font-color-light);
        }

        .title {
            margin: 10px 0 0;
            font-weight: $font-weight-bold;
            color: var(--font-color-dark);

            @media (max-width: 768px) {
                font-size: $title-font-size-small;
            }

            .article-link {
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

        }

        .content {
            margin: 1.5em 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 7;
            -webkit-box-orient: vertical;

            @media (max-width: 480px) {
                font-size: $font-size-base;
            }
        }

        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: $font-size-small;

            .author-wrapper {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .avatar {
                    display: inline-block;
                    width: 34px;
                    height: 34px;
                    margin-right: 5px;
                    border-radius: 50%;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    @media (max-width: 480px) {
                        width: 26px;
                        height: 26px;
                    }

                    &:not(:first-child) {
                        margin-left: -17px;
                    }
                }
                .author {
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    &:not(:first-child)::before {
                        content: ', ';
                        margin:0 8px;
                    }
                }
            }

            .info-wrapper {
                display: flex;
                align-items: center;
                font-size: $font-size-small;

                > i {
                    display: inline-block;
                    margin-right: 2px;
                }

                > span {
                    margin-right: 10px;
                    line-height: 1;
                }

                > time {
                    line-height: 1;
                }

                .count {
                    white-space: nowrap;
                }

                .time {
                    white-space: nowrap;
                }
            }
        }
    }

    .split {
        width: 4vw;
        min-width: 4vw;
    }

    .article-image {
        width: 340px;
        min-width: 340px;
        border-radius: 4px;
        background-size: cover;
        // box-shadow: 0 5px 26px -3px rgba(0, 0, 0, .12);
        cursor: pointer;

        @media (max-width: 1024px) {
            width: 100%;
            min-width: auto;
            margin-bottom: 30px;
            box-shadow: none;
        }

        @media (max-width: 768px) {
            margin-bottom: 20px;
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
