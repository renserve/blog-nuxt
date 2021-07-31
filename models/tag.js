import {
  get
} from '@/services/http/axios'

class Tag {
  // 获取所有标签
  async getTags(data={}) {
      Object.assign(data,{modelId:1})
    const res = await get('/web/article/classify/tag',data)
    return res
  }
}

export default new Tag()
