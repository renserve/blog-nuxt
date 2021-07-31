<template>
    <tag-detail :id="categoryId" :tagName="tagName" type="category" :name="name" :cover="cover" :description="description"></tag-detail>
</template>

<script>
    import tagDetail from '@/components/layout/tag-detail/tag-detail'
    import { mapState } from 'vuex'
    import defaultConfig from '@/config/const'
    export default {
        components: {
            tagDetail
        },
        computed:{
            ...mapState({
                categories: state => state.tag.categories,
            })
        },
        head() {
            return {
                title: this.name
            }
        },
        async fetch({ store, params,query }) {
            const token = store.state.app.token
            if(query.type==='mood'){
                store.commit('app/showMoodList', ['tag',true])
            }else {
                store.commit('app/showMoodList', ['tag',false])
            }
            await store.dispatch('tag/getArticles', {
                categoryId: params.categoryId,
                tagId: params.tagId,
                page: 0,
                count:10,
                isFront: token ? true : false
            })
        },

        data() {
            return {
                categoryId: null,
                name: '',
                cover: '',
                tagName: '',
                description: ''
            }
        },
        created() {
            const params=this.$route.params
            const tagId=parseInt(params.tagId)
            this.categoryId = parseInt(params.categoryId)
            const category=this.categories.filter(i=>i.id===this.categoryId)[0] || {}
            this.name = category.name
            tagId && (this.tagName = category.tags.find(i=>i.id===tagId).name)
            // console.log(this.tagName)
            this.cover = category.bgCover || category.cover || defaultConfig.defaultStar.cover
            this.description = category.description
        }
    }
</script>
