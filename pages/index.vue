<template>
    <div>
        <carousel class="carousel-container"
                  :showRightArrow="starArticles.length > 1"
                  :showLeftArrow="starArticles.length > 1"
                  :autoplay="starArticles.length > 1"
        >
            <carousel-item v-for="(article,index) in starArticles" :key="article.id">
                <carousel-card :article="article"></carousel-card>
            </carousel-item>
        </Carousel>
        <section class="article-wrapper">
            <article-list :articles="articles" :loading="loading" :total="total" @loadMore="onLoadMore"></article-list>
        </section>
    </div>
</template>

<script>
    import Carousel from '@/components/base/carousel/carousel'
    import CarouselItem from '@/components/base/carousel/carousel-item'
    import CarouselCard from '@/components/layout/carousel-card/carousel-card'
    import ArticleList from '@/components/layout/article-list/article-list'

    import constConfig from '@/config/const'

    export default {
        name: 'home-page',
        components: {
            Carousel,
            CarouselItem,
            CarouselCard,
            ArticleList,
        },

        async fetch({store, params}) {
            const token=store.state.app.token
            await store.dispatch('article/getHomeArticles', {
                page: 0,
                count: 10,
                isFront:token?true:false
            })
        },

        data() {
            return {
                page: 0,
            }
        },

        computed: {
            articles() {
                return this.$store.state.article.articles
            },

            total() {
                return this.$store.state.article.total
            },

            starArticles() {
                const starArticles = this.$store.state.article.starArticles
                if (!starArticles.length) {
                    return [constConfig.defaultStar]
                }
                return starArticles
            },

            loading() {
                return this.$store.state.article.loading
            }
        },

        methods: {
            onLoadMore() {
                if (this.loading) {
                    return
                }
                this.page++
                this.$store.dispatch('article/getMoreArticles', {
                    page: this.page,
                    count: 10
                })
            }
        },
        mounted() {

        },
    }
</script>

<style lang="scss" scoped>
    .carousel-container {
        height: calc(100vh - 450px);
        min-height: 450px;
        /*display: inline-block;
        width: auto;
        overflow: hidden;*/
        @media (max-width: 1024px) {
            margin-top: -160px;
            /*height: 100vh;*/
        }
        @media (max-width: 480px) {
            margin-top: -100px;
        }
    }

    .article-wrapper {
        position: relative;
        width: 100%;
        margin-top: -10vh;
    }
</style>
