<template>
    <div class="archive-container">
        <split-line :icon="'post'" :desc="`${archiveTotal} posts`"></split-line>
        <div class="year-wrapper" v-for="year in archive" :key="year.year">
            <div class="year-name">{{year.year}}</div>
            <dl class="month-wrapper" v-for="month in year.monthList" :key="month.month">
                <dt class="month-name">{{month.month | monthTrans}}</dt>
                <dd class="article-item" v-for="article in month.articles" :key="article.id">
                    <client-only :public="article.public">
                        <span class="time">{{article.create_time}}</span>
                        <nuxt-link class="title" :to="`/article/${article.id}`">
                            <span>{{article.title}}</span>
                            <span class="author">{{article.authors.map(i=>i.nickname).join(',')}}</span>
                            <span class="hover-dot"></span>
                        </nuxt-link>
                    </client-only>
                </dd>
            </dl>
        </div>
        <div v-if="isLoadMore" class="load-more" @click="onLoadMore"></div>
        <loading v-if="loading"></loading>
    </div>
</template>

<script>
    import SplitLine from '@/components/base/split-line/split-line'
    import ClientOnly from '@/components/base/client-only/client-only'
    import Utils from '@/services/utils/util'
    import {mapState} from 'vuex'
    import flatten from 'lodash/flatten'
    const monthMap = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }

    export default {
        name: 'archive-page',

        components: {
            SplitLine,
            ClientOnly
        },

        head() {
            return {
                title: '归档'
            }
        },
        data(){
            return{
                page:0
            }
        },
        methods:{
            onLoadMore(){
                if (this.loading) {
                    return
                }
                this.page++
                this.$store.dispatch('article/getMoreArchives', {
                    page: this.page,
                    count: 10
                })
            }
        },
        async fetch({store, params}) {
            const token=store.state.app.token
            await store.dispatch('article/getArchive', {page: 0, count: 10,  isFront:token?true:false})
        },

        filters: {
            monthTrans(month) {
                return monthMap[month]
            }
        },
        computed: {
            isLoadMore() {
                if (this.archive.length && !this.loading) {
                    const archiveLen=flatten(this.archive.map(i=>i.monthList.map(x=>x.articles.length))).reduce((x,y)=>x+y)
                    return this.archiveTotal > archiveLen
                } else {
                    return false
                }
            },
            ...mapState({
                loading: state => state.article.loading,
                archive: state => state.article.archive,
                archiveTotal: state => state.article.archiveTotal
            })
        }
    }
</script>

<style lang="scss" scoped>
    @mixin margin {
        margin-top: .5em;
        margin-left: 2em;

        @media (max-width: 480px) {
            margin-top: .3em;
            margin-left: .7em;
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
    .archive-container {
        @include container;
        min-height: 480px;
    }

    .year-wrapper {
        @include margin;

        @media (max-width: 1024px) {
            margin-left: 5px;
        }

        .year-name {
            font-size: $title-font-size-base;
            font-weight: $font-weight-bold;
        }
    }

    .month-wrapper {
        @include margin;

        .month-name {
            font-size: 1.1rem;
        }
    }

    .article-item {
        @include margin;
        display: flex;
        min-height: 30px;
        font-size: 1rem;

        @media (max-width: 480px) {
            margin-left: 1.5em;
        }

        .time {
            position: relative;
            margin: 0 14px;
            white-space: nowrap;

            @media (max-width: 480px) {
                margin: 0 10px 0 0;
            }

            &:before {
                content: '';
                position: absolute;
                top: 9px;
                left: -18px;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: var(--font-color-primary);
            }
        }

        .title {
            cursor: pointer;
            position: relative;
            .author {
                margin-left: 12px;
                font-size: 14px;
                color: var(--font-color-article);
            }
            &:hover .hover-dot {
                background-color: var(--theme-active);
            }

            .hover-dot {
                position: absolute;
                top: 0;
                right: -10px;
                width: 7px;
                height: 7px;
                border-radius: 50%;
                transition: all 0.25s ease;
            }
        }

        .avtar-wrapper {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: -3px 0 0 30px;

            .avatar {
                display: inline-block;
                width: 30px;
                min-width: 30px;
                height: 30px;
                margin-left: -15px;
                border-radius: 50%;
                background-color: var(--border-color);
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                opacity: 0;
                transform: translate(0);
                transition: all .25s ease-in-out;

                @media (max-width: 480px) {
                    margin: -3px 0 0 -15px;
                }
            }
        }

        &:hover {
            .avatar {
                opacity: 1;
                transform: translateX(10px);
            }
        }
    }
</style>
