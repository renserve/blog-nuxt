import {
  get,
  put,
  post
} from '@/services/http/axios'

class Comment {
  // 获取这篇文章下的所有评论
  async getComments(query={}) {
      Object.assign(query,{modelId:1})
    const res = await get('/web/article/comment', query)
    return res
  }

  // 点赞某条评论
  async likeComment(id) {
    const res = await put('/web/article/comment/like', {id})
    return res
  }

  // 创建一条评论
  async createComment(data) {
      Object.assign(data,{modelId:1})
    const res = await post('/web/article/comment/add', data)
    return res
  }

  // 回复评论
  async replyComment(data) {
      Object.assign(data,{modelId:1})
    const res = await post('/web/article/comment/add', data)
    return res
  }
}

export default new Comment()
