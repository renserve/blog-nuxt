<template>
    <div class="tag-container">
        <split-line :icon="'cloud'" :desc="'标签'"></split-line>
        <div class="tag-wrapper">
            <tag-list :tagList="tags" @selectTag="onSelectTag"></tag-list>
        </div>
        <split-line :icon="'tag'" :desc="'分类'"></split-line>
        <ul class="category-list">
            <nuxt-link tag="li" class="category-item" v-for="category in categories" :key="category.id"
                       :to="`/category/${category.id}`">
                <div class="category-wrapper">
                    <div class="category-image" :style="{backgroundImage: `url(${category.cover})`}"></div>
                    <h2 class="title" :class="{center: !category.tags.length && !category.description}">{{category.name}}</h2>
                    <div class="category-tag">
                        <span @click.stop="goCategoryTag(category.id,tag.id)" v-for="tag in category.tags" :key="tag.id">{{tag.name}}<span class="nav-dot"></span></span>
                    </div>
                    <p v-if="category.description" class="desc">{{category.description}}</p>
                </div>
            </nuxt-link>
        </ul>
    </div>
</template>

<script>
    import SplitLine from '@/components/base/split-line/split-line'
    import TagList from '@/components/base/tag-list/tag-list'
    import {mapState} from 'vuex'

    export default {
        name: 'tags-page',

        components: {
            SplitLine,
            TagList
        },

        head() {
            return {
                title: '标签'
            }
        },

        async fetch({store, params}) {
            await store.dispatch('tag/getTagAndCategories')
        },

        computed: {
            ...mapState({
                categories: state => state.tag.categories,
                tags: state => state.tag.tags
            })
        },

        methods: {
            goCategoryTag(categoryId,tagid){
                this.$router.push({
                    path: `/category/${categoryId}/${tagid}`
                })
            },
            onSelectTag(tag) {
                this.$router.push({
                    path: `/tag/${tag.id}`
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/mixin.scss';

    .tag-container {
        @include container;
    }

    .tag-wrapper {
        margin: 10px 0;
    }

    .category-list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        /* margin: 0 -15px;*/
        .category-item {
            flex: 1 1 auto;
            max-width: 400px;
            position: relative;
            padding: 15px;
            box-sizing: border-box;
            transition: all .25s ease-in-out;
            cursor: pointer;
            .category-wrapper {
                overflow: hidden;
                border-radius: 20px;
            }
            &:hover {
                transform: translateY(-4px);
            }

            /*@media (max-width: 470px) {
              margin: 15px 15px 0;
            }*/
        }
    }

    .category-wrapper {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        color: #fff;
        padding: 0 30px;
        .category-image {
            @include cover;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            z-index: -1;
        }
        .category-tag {
            display: flex;
            overflow: hidden;
            flex-wrap: wrap;
            padding-bottom: 15px;
            /*&:empty {
                padding: 8px 0;
            }*/
            >span {
                margin-right: 12px;
                line-height: 25px;
                height: 25px;
                position: relative;
                .nav-dot {
                    background-color: #fff;
                    position: absolute;
                    top: 0;
                    right:-6px;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    transition: all 0.25s ease;
                    display: none;
                }
                &:hover {
                    .nav-dot {
                        display: block;
                    }
                }
            }
        }
        .title {
            padding-top: 15px;
            font-size: $title-font-size-medium;
            font-weight: $font-weight-bold;
        }

        .center {
            text-align: center;
        }

        .desc {
            box-sizing: border-box;
            max-width: 450px;
            padding-bottom: 15px;
            /*padding: 0 60px 3vh 30px;*/
        }
    }
</style>
