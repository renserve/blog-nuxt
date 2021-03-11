import {
  get,
  post
} from '@/services/http/axios'

class Message {
  // 获取所有留言
  async getMessages(params={}) {
      Object.assign(params,{modelId:1})
    return await get('/web/article/message', params)
  }

  // 新增一条留言
  async createMessage(params={}) {
      Object.assign(params,{modelId:1})
    const res = await post('/web/article/message/add', params)
    return res
  }
}

export default new Message()
