import {
  get
} from '@/services/http/axios'

class Category {
  // 获取所有分类
  async getCategories(data={}) {
      Object.assign(data,{modelId:1})
    const res = await get('/web/article/classify/category',data)
    return res
  }
}

export default new Category()
