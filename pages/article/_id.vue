<template>
    <client-only :public="article.public">
        <header class="article-header" :style="articleCover">
            <div class="header-wrapper">
                <div class="content">
                    <tag-list :tagList="article.categories" @selectTag="onSelectCategory"></tag-list>
                    <h1 class="title">{{article.title}}</h1>
                    <div class="author-wrapper" v-show="article.create_time">
                        by&nbsp;
                        <nuxt-link tag="span" v-for="author in article.authors" :key="author.id" class="author-name"
                                   :to="`/about/${author.id}`">{{author.nickname}}
                        </nuxt-link>
                        &nbsp;<time :datetime="article.create_time | filterTime">&nbsp;{{article.create_time |
                        filterTime}}
                    </time>
                    </div>
                </div>
            </div>
        </header>
        <!-- 文章区域 -->
        <div class="article-container">
            <div class="content">
                <!-- 文章内容 -->
                <div class="article-wrapper">
                    <article ref="markedContent" class="markdown" v-html="markedContent"></article>
                </div>
                <!-- 文章信息 -->
                <div class="article-info-wrapper">
                    <div class="tags-wrapper">
                        <i class="icon icon-tags-fill"></i>
                        <ul class="tags">
                            <nuxt-link tag="li" class="tag-item" v-for="tag in article.tags" :key="tag.id"
                                       :to="`/tag/${tag.id}`">{{tag.name}}
                            </nuxt-link>
                        </ul>
                    </div>
                    <div class="like-btn" @click="likeArticle">
                        <i class="icon icon-heart-fill" :class="{'is-like': isLike}"></i>
                        <span>{{articleLike}}</span>
                    </div>
                </div>
                <!-- 相关推荐 -->
                <template v-if="haveCategoryArtilces">
                    <split-line class="split-line" :icon="'recommend'"
                                :desc="'相关推荐'"></split-line>
                    <div class="recommend-wrapper">
                        <recommend :articles="article.categoryArticles"
                                   @showRecommendDetail="onShowRecommendDetail"></recommend>
                    </div>
                </template>
                <!--recommend_total-->
            </div>
        </div>
        <!-- 评论区域 -->
        <div ref="commentArea" class="article-container comment-container">
            <div class="content">
                <split-line class="split-line" :icon="'message'" :desc="'评论'"></split-line>
                <div class="comment-wrapper">
                    <comment :loading="loading" :total="comments_total" :comments="comments"
                             @createCommentSuccess="getSuccessComments" :articleId="parseInt(id)"></comment>
                </div>
            </div>
        </div>
        <aside class="like-wrapper">
            <div class="item" @click="likeArticle">
                <span class="count">{{articleLike}}</span>
                <i class="icon icon-heart-fill" :class="{'is-like': isLike}"></i>
            </div>
            <div class="item" @click="scrollToComment">
                <span class="count">{{comments.length}}</span>
                <i class="icon icon-message-fill" :class="{'is-like': isComment}"></i>
            </div>
        </aside>
        <Dialog :visible.sync="dialogVisible" :loading="imgLoading" :imgSrc="imgSrc"></Dialog>
    </client-only>
</template>

<script>
    import markdown from '@/plugins/marked'
    import Recommend from '@/components/layout/recommend/recommend'
    import Comment from '@/components/layout/comment/comment'
    import SplitLine from '@/components/base/split-line/split-line'
    import TagList from '@/components/base/tag-list/tag-list'
    import Dialog from '@/components/base/dialog/dialog'
    import ClientOnly from '@/components/base/client-only/client-only'
    import defaultConfig from '@/config/const'
    import cloneDeep from 'lodash/cloneDeep'
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: 'article-detail',

        components: {
            Recommend,
            Comment,
            SplitLine,
            TagList,
            Dialog,
            ClientOnly
        },

        head() {
            return {
                title: this.article.title
            }
        },

        async fetch({store, params,app}) {
            const token = store.state.app.token
            const data={id: params.id, isFront: token ? true : false}
            const viewIds=app.$cookies.get('viewIds') || []
            if(!viewIds.includes(params.id)){
                data.view=1
                viewIds.push(params.id)
                app.$cookies.set('viewIds',viewIds,{
                    path:'/',
                    maxAge: 60 * 60 * 24 * 365 * 3
                })
            }
            await store.dispatch('article/getArticleDetail', data)
            await store.dispatch('article/getComments', {
                classId: params.id,
                page: 0,
                count: 10
            })
        },

        data() {
            return {
                dialogVisible: false,
                imgLoading: false,
                imgSrc: '',
                id: 0,
                likeArticles: [],
                commentArticles: [],
                articleCover: {},
                articleLike: 0
            }
        },

        computed: {
            comments_total() {
                return this.$store.state.article.comments_total
            },
            recommend_total() {
                return this.$store.state.article.recommend_total
            },
            loading() {
                return this.$store.state.article.loading
            },
            ...mapState({
                article(state) {
                    const article = state.article.article
                    if (!article) {
                        return {}
                    }
                    const cover = article.bgCover || article.cover
                    if (cover) {
                        this.articleCover = {backgroundImage: `url(${cover})`}
                    } else {
                        this.articleCover = {backgroundImage: `url(${defaultConfig.defaultStar.cover})`}
                    }
                    this.articleLike = article.like
                    return article
                },
                comments: state => state.article.comments
            }),
            isComment() {
                return this.commentArticles.includes(this.id)
            },
            isLike() {
                return this.likeArticles.includes(this.id)
            },

            haveCategoryArtilces() {
                return this.article.categoryArticles && this.article.categoryArticles.length
            },

            markedContent() {
                if (this.article.content) {
                    let content;
                    if (this.article.articleType === 0 || this.article.articleType === 1) {
                        content=this.article.content
                    } else {
                        content=markdown(this.article.content)
                    }
                    if(/rel="(.*?)"/.test(content)){
                        content=content.replace(/rel="(.*?)"/g,'rel="external nofollow noopener noreferrer"')
                    }else if(/<a/.test(content)){
                        content=content.replace(/<a/g,'<a rel="external nofollow noopener noreferrer"')
                    }
                    return content
                } else {
                    return ''
                }
            },
        },

        methods: {
            onSelectCategory(category) {
                this.$router.push(`/category/${category.id}`)
            },
            // markdown 解析
            marked(content) {
                return markdown(content)
            },
            handleLocalInfo(k,v){
                const localInfo=this.$cookies.get(k) || []
                if(v===undefined){
                    return this.$cookies.get(k) || []
                }else {
                    if(!localInfo.includes(v)){
                        localInfo.push(v)
                        this.$cookies.set(k,localInfo,{
                            path:'/',
                            maxAge: 60 * 60 * 24 * 365 * 3
                        })
                    }
                }
            },
            // 点赞文章
            async likeArticle() {
                if (this.isLike) {
                    return
                }
                try {
                    const res = await this.$store.dispatch('article/likeArticle', this.id)
                    if (res.code === 3) {
                        this.articleLike++
                        this.likeArticles.push(this.id)
                        this.handleLocalInfo('likeIds',this.id)
                    }
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.log(e)
                }
            },

            // 滚动到评论区
            scrollToComment() {
                this.$refs.commentArea.scrollIntoView({
                    behavior: 'smooth'
                })
            },

            onShowRecommendDetail(articleId) {
                this.id = articleId
                this.$router.push({
                    path: `/article/${articleId}`
                })
            },


            getSuccessComments() {
                this.commentArticles.push(this.id)
                this.$store.dispatch('article/getComments', {
                    classId: this.id
                })
            },

            initImg() {
                import('../../services/utils/lazy-img').then(res => {
                    res.default('.image-popper')
                })
                this.$refs.markedContent.addEventListener('click', e => {
                    const target = e.target
                    if (target.nodeName.toLocaleLowerCase() === 'img' && target.classList.contains('image-popper')) {
                        e.stopPropagation()
                        this.imgLoading = true
                        this.dialogVisible = true
                        const src = target.dataset.origin
                        const image = new Image()
                        image.src = src
                        image.onload = () => {
                            this.imgSrc = src
                            this.imgLoading = false
                        }
                        image.onerror = () => {
                            this.imgSrc = src
                            this.imgLoading = false
                        }
                    }
                })
            }
        },

        created() {
            this.id = this.$nuxt.$route.params.id
        },

        mounted() {
            this.likeArticles=this.handleLocalInfo('likeIds')
            this.commentArticles=this.handleLocalInfo('commentIds')
            this.$nextTick(()=>{
                this.initImg()
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/mixin.scss';

    .article-header {
        @include cover;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 160px);
        height: calc(100vh - 240px);
        margin: 0 auto;
        max-width: $max-width;
        color: #fff;
        border-radius: 5px;
        background: no-repeat center center;
        background-size: cover;
        box-sizing: border-box;
        overflow: hidden;

        @media (max-width: 1440px) {
            width: 100%;
            border-radius: 0;
        }

        @media (max-width: 1024px) {
            height: calc(100vh - 160px);
        }

        @media (max-width: 480px) {
            height: auto;
            padding: 15vh 0 15vh;
        }

        .header-wrapper {
            @include container;
            position: relative;
            margin: 0 auto;
        }

        .content {
            @include headerPadding;
            margin-top: -10vh;

            @media (max-width: 480px) {
                margin-top: 0;
            }
        }

        .title {
            margin: .7em 0;
            line-height: 1;
            font-size: $title-font-size-extra-large;
            font-weight: $font-weight-bold;

            @media (max-width: 480px) {
                font-size: $title-font-size-base;
            }
        }

        .author-wrapper {
            font-size: $font-size-small;

            @media (max-width: 480px) {
                font-size: $font-size-minimum
            }

            .author-name {
                font-size: $font-size-large;
                font-weight: $font-weight-bold;
                cursor: pointer;

                @media (max-width: 480px) {
                    font-size: $font-size-small;
                }

                &:not(:first-child)::before {
                    content: '、'
                }
            }
        }
    }

    .article-container {
        @include container;
        position: relative;
        margin-top: -10vh;
        border-radius: 5px 5px 0 0;

        @media (max-width: 480px) {
            margin-top: 0;
        }
        .content {
            @include articlePadding;
            border-radius: 5px 5px 0 0;
            background-color: var(--app-background-color-light);
            // box-shadow: 0 2px 24px 5px rgba(0, 0, 0, .05);
            transition: $theme-transition;

            @media (max-width: 480px) {
                box-shadow: none;
                background-color: var(--app-background-color);
            }
        }

        .split-line {
            margin: 20px 0;

            @media (max-width: 480px) {
                margin: 10px 0;
            }
        }
    }

    .comment-container {
        margin-top: 0;
        border-radius: 0 0 5px 5px;

        .content {
            padding-top: 5px;
        }

        @media (max-width: 480px) {
            margin-top: 0;

            .content {
                padding-top: 0;
            }
        }
    }

    .like-wrapper {
        position: fixed;
        right: 0;
        bottom: 21%;
        z-index: $index-popper;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .14);

        @media (max-width: 480px) {
            display: none;
        }

        .item {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 42px;
            height: 42px;
            border: 1px solid var(--tag-color);
            background-color: var(--app-background-color);
            cursor: pointer;

            &:not(:last-child) {
                border-bottom: none;
            }

            &:hover {
                > i {
                    color: var(--theme-active);
                }
            }

            .count {
                position: absolute;
                top: 0;
                left: 0;
                padding: 0 5px;
                font-size: $font-size-small;
                border-radius: 8px;
                transform: translate(-50%, -50%);
                background-color: var(--tag-color);
            }

            > i {
                font-size: $font-size-extra-large;
                transition: all .15s linear;
            }

            .is-like {
                color: var(--theme-active);
            }
        }
    }

    .article-info-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .tags-wrapper {
        display: flex;
        justify-content: flex-start;
        font-size: 1rem;

        > i {
            margin: 8px 10px 0 0;
            font-size: $font-size-icon-rem;
        }

        .tags {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin-top: 10px;

            .tag-item {
                cursor: pointer;

                &:not(:first-child)::before {
                    content: '、'
                }
            }
        }
    }

    .like-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        margin-top: 5px;
        font-size: 1rem;
        cursor: pointer;

        > i {
            margin-right: 6px;
            font-size: $font-size-icon-rem;

            &:hover {
                color: var(--theme-active);
            }
        }

        > span {
            white-space: nowrap;
        }

        .is-like {
            color: var(--theme-active);
        }
    }
</style>
