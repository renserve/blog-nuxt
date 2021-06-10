<template>
    <div v-html="relContent"></div>
</template>

<script>
export default {
    name: "article-content",
    props: {
        content: {
            type: String,
            default: ''
        },
    },
    computed: {
        relContent() {
            if(this.content){
                if(/rel="(.*?)"/.test(this.content)){
                    return this.content.replace(/rel="(.*?)"/g,'target="_blank" rel="external nofollow noopener noreferrer"')
                }else if(/<a/.test(this.content)){
                    return this.content.replace(/<a/g,'<a target="_blank" rel="external nofollow noopener noreferrer"')
                }else {
                    return this.content
                }
            }else {
                return ''
            }
        },
    }
}
</script>

<style scoped>

</style>
