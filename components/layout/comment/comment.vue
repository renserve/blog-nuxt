<template>
    <div class="comment-container">
        <comment-editor
            ref="editor"
            :isShowReplyContent="isShowReplyContent"
            @closeReplyContent="closeReply"
            @send="onSend"
        ></comment-editor>
        <div class="comment-list-wrapper">
            <comment-list :total="total" :comments="comments" @loadMore="onLoadMore" @reply="onReply"
                          :loading="loading"></comment-list>
        </div>
    </div>
</template>

<script>
    import CommentList from "./comment-list";
    import CommentEditor from "@/components/base/comment-editor/comment-editor";
    import cloneDeep from "lodash/cloneDeep";

    export default {
        components: {
            CommentEditor,
            CommentList
        },

        props: {
            total: {
                type: Number,
                default: 0
            },
            comments: {
                type: Array,
                default: () => []
            },

            articleId: {
                type: Number
            },

            loading: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                isShowReplyContent: false,
                parentId: 0,
                page: 0
            };
        },

        methods: {
            onLoadMore() {
                if (this.loading) {
                    return
                }
                this.page++
                this.$store.dispatch('article/getMoreComments', {
                    page: this.page,
                    count: 10
                })
            },
            onReply(comment) {
                this.parentId = comment.id
                this.$refs.editor.reply = {
                    nickname: comment.nickname,
                    content: comment.content
                }
                this.isShowReplyContent = true;
            },

            closeReply() {
                this.isShowReplyContent = false
                this.parentId = 0
                this.$refs.editor.reply = {
                    nickname: '',
                    content: ''
                }
                this.$refs.editor.resetField()
            },
            handleLocalInfo(k,v){
                const userId=window.localStorage.getItem('userId')
                const userLocal=cloneDeep(JSON.parse(window.localStorage.getItem(userId)))
                console.log(k,v)
                if(v===undefined){
                    if(userId){
                        return userLocal[k]
                    }else {
                        return []
                    }
                }else {
                    if(!userLocal[k].includes(v)){
                        userLocal[k].push(v)
                        window.localStorage.setItem(userId,JSON.stringify(userLocal))
                    }
                }
            },
            async onSend(data) {
                if (!this.articleId) {
                    return
                }
                if (this.isShowReplyContent) {
                    // 回复评论
                    if (!this.parentId) {
                        return
                    }
                    try {
                        data.classId = this.articleId
                        data.parentId = this.parentId
                        const res = await this.$store.dispatch('article/replyComment', data)
                        if (res.code === 1) {
                            this.closeReply()
                            this.handleLocalInfo('commentIds',String(this.articleId))
                            this.$emit('createCommentSuccess')
                        }
                    } catch (e) {
                        // eslint-disable-next-line no-console
                        console.log(e)
                    }
                } else {
                    // 创建评论
                    try {
                        data.classId = this.articleId
                        data.parentId = this.parentId
                        const res = await this.$store.dispatch('article/createComment', data)
                        if (res.code === 1) {
                            this.$refs.editor.resetField()
                            this.handleLocalInfo('commentIds',String(this.articleId))
                            this.$emit('createCommentSuccess')
                        }
                    } catch (e) {
                        // eslint-disable-next-line no-console
                        console.log(e,'===')
                    }
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .comment-list-wrapper {
        margin-top: 25px;
    }
</style>
