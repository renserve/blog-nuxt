import {
    post,
  get
} from '@/services/http/axios'

class Author {
    // 登录
    async getToken(data) {
        const res = await post('cms/user/login',data)
        return res
    }
    // 获取所有作者
  async getAuthors() {
    const res = await get('/web/article/author?modelId=1')
    return res
  }
}

export default new Author()
