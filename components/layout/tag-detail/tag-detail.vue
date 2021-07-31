<template>
    <div class="tags-detail-container">
        <detail-header :name="name" :description="description" :cover="cover">
            <template v-slot:info>
                <div class="posts-number">
                    <i class="icon icon-post"></i>
                    <span v-if="tagName">{{tagName}}，</span>
                    <span>{{currentTotal || 0}}&nbsp;posts</span>
                </div>
            </template>
        </detail-header>
        <article class="article-list">
            <article-list :articles="articles" :moods="moods" :loading="loading" :total="currentTotal" @loadMore="onLoadMore"></article-list>
        </article>
    </div>
</template>

<script>
    import ArticleList from '@/components/layout/article-list/article-list'
    import DetailHeader from '@/components/layout/detail-header/detail-header'
    import {mapState} from 'vuex'

    export default {
        components: {
            ArticleList,
            DetailHeader
        },

        props: {
            tagName:{
                type: String,
                deault: '',
            },
            id: Number,

            type: {
                type: String,
                default: 'tag'
            },

            name: {
                type: String,
                deault: '',
            },

            description: {
                type: String,
                default: ''
            },

            cover: {
                type: String,
                default: ''
            }
        },

        computed: {
            ...mapState({
                token:state=>state.app.token,
                isMoodList: state => state.app.isMoodList,
                loading: state => state.tag.loading,
                articles: state => state.tag.articles,
                moods: state => state.tag.moods,
                total: state => state.tag.total
            }),
            currentTotal(){
                return this.isMoodList.tag?this.total.mood:this.total.article
            },
        },
        methods: {
            onLoadMore(isMoodList) {
                const params = {
                    isFront: this.token ? true : false,
                    [this.type === 'tag' ? 'tagId' : 'categoryId']: this.id
                }
                this.$store.dispatch('tag/getMoreArticles', params)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';
    .posts-number {
        display: flex;
        align-items: center;
        margin: 0 auto;

        .icon-post {
            font-size: $title-font-size-base;
        }

        span {
            font-size: $font-size-small;
            font-weight: $font-weight-bold;
            padding-left: 5px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
    }

    .article-list {
        position: relative;
        margin-top: -10vh;
    }
</style>
