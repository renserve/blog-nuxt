import {
  get,
  post
} from '@/services/http/axios'

class Apply {
  // 获取所有留言
  async getApply(params={}) {
      Object.assign(params,{modelId:1})
    return await get('/web/article/apply', params)
  }

  // 新增一条留言
  async createApply(apply={}) {
      Object.assign(apply,{modelId:1})
    const res = await post('/web/article/apply/add', apply)
    return res
  }
}

export default new Apply()
