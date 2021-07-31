import {
  get
} from '@/services/http/axios'

class Blog {
  // 获取所有友情链接
  async getFriends() {
    const res = await get('/web/article/friend?modelId=1')
    return res
  }
}

export default new Blog()
