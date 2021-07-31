<template>
    <div class="card-container">
        <div class="card-image" :style="{backgroundImage: `url(${article.cover})`}"></div>
        <!--<div class="card-image" :style="{backgroundImage: `url(@/assets/image/bg_01.jpg)`}"></div>-->
        <div class="feature-wrapper">
            <article class="feature-content">
                <div class="feature-category">
                    <span class="category-name" v-for="category in article.categories" :key="category.id"
                          @click.stop="navCategory(category.id)">
                        {{category.name}}
                    </span>
                </div>
                <h2 class="feature-text">
                    <a @click="nav">
                        {{article.title}}
                        <span class="feature-dot"></span>
                    </a>
                </h2>
                <span class="feature-author">by&nbsp;
                    <span class="author-name" v-for="author in article.authors" :key="author.id"
                          @click.stop="navAuthor(author.id)">{{author.nickname}}</span>
                    <time :datetime="article.create_time | filterTime">
                    &nbsp;{{article.create_time | filterTime('Y-m-d')}}
                    </time>
                </span>
            </article>
        </div>
    </div>
</template>

<script>
    // import defaultCover from '@/assets/image/lighthouse.jpg'
    import defaultCover from '@/assets/image/home_our.jpg'

    export default {
        props: {
            article: {
                type: Object,
                default: () => ({})
            }
        },

        methods: {
            nav() {
                if (this.article.id) {
                    this.$router.push({
                        path: `/article/${this.article.id}`
                    })
                }
            },
            navCategory(id) {
                if (id) {
                    /*this.$router.push({
                        path: `/about/${id}`
                    })*/
                }
            },
            navAuthor(id) {
                if (id) {
                    this.$router.push({
                        path: `/about/${id}`
                    })
                }
            }
        },
    };
</script>

<style lang="scss" scoped>

    .card-container {
        display: flex;
        justify-content: space-between;
        width: calc(100% - 160px);
        height: 100%;
        margin: 0 auto;
        max-width: $max-width;
        box-sizing: border-box;
        .card-image {
            width: calc(50% - 45px);
            height: 100%;
            border-radius: 5px;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;

            @media (max-width: 1024px) {
                @include cover;
            }
        }

        .feature-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 50%;
            /*padding: 0 12% 10vh 45px;*/
            box-sizing: border-box;
        }
    }

    .feature-text {
        margin: 20px 0 25px;
        font-size: $title-font-size-extra-large;
        font-weight: $font-weight-bold;
        line-height: 1.2;

        a {
            position: relative;
            cursor: pointer;

            &:hover {
                .feature-dot {
                    background-color: var(--theme-active) !important;
                }
            }
        }

        .feature-dot {
            display: inline-block;
            position: absolute;
            right: -14px;
            width: 12px;
            height: 12px;
            margin-top: 8px;
            border-radius: 50%;
            transition: all 0.25s ease;
        }
    }

    .feature-category {
        .category-name {
            cursor: pointer;
        }
    }

    .feature-author {
        font-size: $font-size-base;
        font-weight: $font-weight-primary;

        .author-name {
            font-size: $font-size-large;
            font-weight: $font-weight-bold;
            cursor: pointer;

            &:not(:first-child)::before {
                content: '、'
            }
        }
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        .card-container {
            width: 100%;
            .card-image {
                border-radius: 0 5px 5px 0;
            }
        }

        .feature-text {
            font-size: $title-font-size-large;
        }

        .feature-dot {
            right: -14px;
            width: 10px;
            height: 10px;
            margin-top: 10px;
        }
    }

    @media (max-width: 1024px) {
        .card-container {
            position: relative;
            display: block;
            width: 100%;
            .card-image {
                width: 100%;
                border-radius: 0;
            }

            .feature-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                /*padding: 0 0 10vh 0;*/
                z-index: $index-normal;
            }

            .feature-content {
                padding: 60px 18% 60px 123px;
                color: #fff;

                a {
                    color: #fff;

                    &:hover {
                        .feature-dot {
                            background-color: transparent !important;
                        }
                    }
                }
            }
        }

        .feature-text {
            font-size: $title-font-size-extra-large;
        }

        .feature-author {
            font-size: $font-size-base;

            a {
                font-size: $font-size-base;
            }
        }
    }

    @media (max-width: 768px) {
        .card-container {
            .feature-content {
                padding: 60px 18% 60px 85px;
            }
        }

        .feature-text {
            margin: 15px 0 20px;
            font-size: $title-font-size-large;
        }
    }

    @media (max-width: 480px) {
        .card-container {
            .feature-content {
                padding: 30px 15px;
            }
        }

        .feature-text {
            font-size: $title-font-size-medium;
        }
    }
</style>
