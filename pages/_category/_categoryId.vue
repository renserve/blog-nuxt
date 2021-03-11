<template>
    <nuxt-child></nuxt-child>
</template>

<script>
    export default {
        name: "tagWrap",
        validate ({ params }) {
            return /^category$/.test(params.category)
        }
    }
</script>

<style scoped>

</style>