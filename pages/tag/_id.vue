<template>
    <tag-detail :id="id" type="tag" :name="name" :cover="cover"></tag-detail>
</template>

<script>
    import tagDetail from '@/components/layout/tag-detail/tag-detail'
    import defaultConfig from '@/config/const'
    import {mapState} from 'vuex'
    export default {
        components: {
            tagDetail
        },

        head() {
            return {
                title: this.name
            }
        },

        async fetch({store, params}) {
            const token = store.state.app.token
            await store.dispatch('tag/getArticles', {
                tagId: params.id,
                page: 0,
                count:10,
                isFront: token ? true : false
            })
        },
        computed: {
            ...mapState({
                tags: state => state.tag.tags
            })
        },
        data() {
            return {
                id: null,
                name: '',
                cover: '',
            }
        },

        created() {
            // 标签
            this.id = parseInt(this.$nuxt.$route.params.id)
            const tags = this.tags.filter(i => i.id === this.id)[0] || {}
            this.name = tags.name
            this.cover = defaultConfig.defaultStar.cover
        }
    }
</script>
