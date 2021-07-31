import article from '../models/article'
import comment from '../models/comment'
import Utils from '../services/utils/util'
import marked from '../plugins/marked'
import random from 'lodash/random'
function archiveInit(res,initData) {
    let archive = initData || []
    // 按年份月份重新组合
    res.map(v => {
        let dateArr = v.create_time.split('-')
        let year = dateArr[0]
        let month = parseInt(dateArr[1])
        let time = dateArr[2].split(' ')[0]
        v.create_time = `${month}.${time}`
        let yearObject=archive.find(i=>i.year===year)
        if(yearObject){
            let monthObject=yearObject.monthList.find(i=>i.month===month)
            if(monthObject){
                monthObject.articles.push(v)
            }else {
                yearObject.monthList.push({month,articles:[v]})
            }
        }else {
            archive.push({year,monthList:[{month,articles:[v]}]})
        }
    })
    return archive
}
export const state = () => ({
    // 文章列表
    articles: [],
    total: 0,
    // 归档
    starArticles: [],
    archive: [],
    archiveTotal: 0,
    
    loading: false,
    
    // 详情
    article: null,
    recommend_total:0,
    comments: [],
    comments_total: 0
})

export const mutations = {
    setHomeArticles(state, {articles, total, starArticles}) {
        state.articles = articles
        state.total = total
        state.starArticles = starArticles
    },
    setRepeatArticles(state){
        state.starArticles.reverse()
    },
    setMoreArticles(state, {articles}) {
        state.articles = state.articles.concat(articles)
    },
    setMoreComments(state, {comments, total}) {
        comments.forEach(v => {
            v.content = marked(v.content)
            v.reply && (v.reply = marked(v.reply))
            if (v.children.length) {
                v.children.forEach(c=>{
                    c.content = marked(c.content)
                    c.reply && (c.reply = marked(c.reply))
                })
            }
        })
        state.comments = state.comments.concat(comments)
    },
    setLoading(state, loading = false) {
        state.loading = loading
    },
    
    setArchive(state, {archive, total}) {
        state.archive = archive
        state.archiveTotal = total
    },
    setMoreArchives(state,res) {
        archiveInit(res,state.archive)
    },
    setComments(state, {comments, total}) {
        comments.forEach(v => {
            v.content = marked(v.content)
            v.reply && (v.reply = marked(v.reply))
            if (v.children.length) {
                v.children.forEach(c=>{
                    c.content = marked(c.content)
                    c.reply && (c.reply = marked(c.reply))
                })
            }
        })
        state.comments = comments
        state.comments_total = total
    },
    
    setArticleDetail(state, {article,total}) {
        state.article = article
        state.recommend_total = total
    },
    
    setLikeComment(state, id) {
        state.comments.forEach(v => {
            if (v.id === id) {
                v.like++
            }
        })
    }
}

export const actions = {
    // 获取首页文章列表
    async getHomeArticles({commit}, params) {
        try {
            const {rows, total} = await article.getArticles(params)
            const starArticles =  await article.getArticles({star:1})
            const isLoop=starArticles.length===2
            commit('setHomeArticles', {articles: rows, total, starArticles:isLoop?starArticles.concat(starArticles.reverse()):starArticles})
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },
    
    async getMoreArticles({commit}, params) {
        try {
            commit('setLoading', true)
            const {rows, total} = await article.getArticles(params)
            commit('setMoreArticles', {articles: rows, total})
            commit('setLoading', false)
        } catch (e) {
            commit('setLoading', false)
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },
    async getMoreComments({commit}, params) {
        try {
            commit('setLoading', true)
            const {rows, total} = await comment.getComments(params)
            commit('setMoreComments', {comments: rows, total})
            commit('setLoading', false)
        } catch (e) {
            commit('setLoading', false)
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },
    async getMoreArchives({commit}, query) {
        try {
            commit('setLoading', true)
            const {rows} = await article.getArchive(query)
            commit('setMoreArchives', rows)
            commit('setLoading', false)
        } catch (e) {
            commit('setLoading', false)
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },
    async getArchive({commit}, query) {
        try {
            let {total, rows} = await article.getArchive(query)
            const archive=archiveInit(rows)
            commit('setArchive', {archive, total})
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },
    
    async getComments({commit}, params) {
        try {
            const {rows, total} = await comment.getComments(params)
            commit('setComments', {comments: rows, total})
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },
    
    async getArticleDetail({commit}, params) {
        try {
            const result = await article.getArticleDetail(params)
            if(!result.id){
                //文章不存在
                return '/404'
            }
            const categoryId=result.categories.map(i=>i.id).join(',')
            const randomPage=random(parseInt(result.total/10))
            const {rows,total} = await article.getArticles({...params,categoryId,page:randomPage,count:10})
            result.categoryArticles=rows
            commit('setArticleDetail', {article:result,total})
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },
    
    async likeArticle(_, id) {
        return await article.likeArticle(id)
    },
    
    async likeComment({commit}, id) {
        const res = await comment.likeComment(id)
        if (res.code === 3) {
            commit('setLikeComment', id)
            return res
        }
    },
    
    async createComment(_, params) {
        return await comment.createComment(params)
    },
    
    async replyComment(_, params) {
        return await comment.replyComment(params)
    }
}
