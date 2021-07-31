import {
    get,
    put
} from '../services/http/axios'
import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'
class Article {
    // 获取所有文章
    async getArticles(params = {}) {
        let query = params.star?params:{
            categoryId: params.categoryId ,
            authorId: params.authorId,
            tagId: params.tagId,
            search:params.search,
            id:params.id,
            page: params.page ? params.page : 0,
            count: params.count ? params.count : 10
        }
        Object.assign(query,{modelId:1})
        return await get((params.isFront?'/web/article/article/private':'/web/article/article'),omitBy(query,isUndefined))
    }
    
    // 获取历史归档
    async getArchive(query={}) {
        Object.assign(query,{modelId:1})
        const {total,rows} = await get((query.isFront?'/web/article/article/private':'/web/article/article'),{...query,archive:1})
        return {total,rows}
    }
    
    // 获取某篇文章详情
    async getArticleDetail(params) {
        const res = await get(params.isFront?`/web/article/article/private/${params.id}?view=${params.view || 0}`:`/web/article/article/${params.id}?view=${params.view || 0}`)
        return res
    }
    
    // 获取这篇文章下的所有评论v1/blog/article/like/comment
    async getComments(query={}) {
        Object.assign(query,{modelId:1})
        const res = await get('/web/article/comment', query)
        return res
    }
    
    // 点赞文章
    async likeArticle(id) {
        const res = await put('/web/article/article/subjoin', {id, like: 1})
        return res
    }
    
    // 搜索文章
    async searchArticles(query={}) {
        Object.assign(query,{modelId:1})
        return await get(query.isFront?'/web/article/article/private':'/web/article/article', query)
    }
}

export default new Article()
