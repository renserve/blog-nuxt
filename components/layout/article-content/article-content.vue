<template>
    <div v-html="moodContent"></div>
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
        moodContent() {
            if(this.content){
                if(/rel="(.*?)"/.test(this.content)){
                    return this.content.replace(/rel="(.*?)"/g,'rel="external nofollow noopener noreferrer"')
                }else if(/<a/.test(this.content)){
                    return this.content.replace(/<a/g,'<a rel="external nofollow noopener noreferrer"')
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
