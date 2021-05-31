<template>
    <div class="profile-container">
        <detail-header :name="nickname" :description="signature">
            <template v-slot:header>
                <div class="avatar" :style="{backgroundImage: `url(${avatar})`}"></div>
            </template>
            <!--<template v-slot:info>
              <div class="social-wrapper">
                <a class="social-item icon icon-mail"></a>
              </div>
            </template>-->
        </detail-header>
        <article class="article-list">
            <article-list :moods="moods" :articles="articles" :loading="loading" :total="isMoodList?total.mood:total.article" @loadMore="onLoadMore"></article-list>
        </article>
    </div>
</template>

<script>
    import DetailHeader from "@/components/layout/detail-header/detail-header"
    import ArticleList from "@/components/layout/article-list/article-list"
    import {mapState} from 'vuex'

    export default {
        name: 'about-detail',

        components: {
            DetailHeader,
            ArticleList
        },

        head() {
            return {
                title: this.nickname
            }
        },

        async fetch({store, params,query}) {
            const token = store.state.app.token
            if(query.type==='mood'){
                store.commit('app/showMoodList', ['about',true])
            }else {
                store.commit('app/showMoodList', ['about',false])
            }
            await store.dispatch('about/getArticles', {
                authorId: params.id,
                page: 0,
                count: 10,
                isFront: token ? true : false
            })
        },

        data() {
            return {
                id: null,
                avatar: '',
                nickname: '',
                signature: '',
            }
        },

        computed: {
            ...mapState({
                token : state => state.app.token,
                authors: state => state.about.authors,
                articles: state => state.about.articles,
                moods: state => state.about.moods,
                isMoodList: state => state.app.isMoodList.about,
                total: state => state.about.total,
                loading: state => state.about.loading
            })
        },

        methods: {
            onLoadMore() {
                this.$store.dispatch('about/getMoreArticles', {
                    isFront: this.token ? true : false,
                    authorId: this.id,
                    count: 10
                })
            }
        },

        created() {
            this.id = parseInt(this.$route.params.id)
            const authors = this.authors.filter(i => i.id === this.id)[0] || {}
            this.avatar = authors.avatar
            this.nickname = authors.nickname
            this.signature = authors.signature
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';

    .avatar {
        width: 120px;
        height: 120px;
        margin: 0 auto 20px;
        border-radius: 26px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    .social-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .social-item {
            font-size: $title-font-size-base;
            margin-right: 20px;
            transition: color 0.25s ease-in-out;
            cursor: pointer;

            &:last-child {
                margin-right: 0;
            }

            &:hover {
                color: var(--theme-active);
            }

            @media (max-width: 480px) {
                font-size: $title-font-size-small;
            }
        }
    }

    .article-list {
        position: relative;
        margin-top: -10vh;
    }
</style>
