import {
    get,
} from '../services/http/axios'
class MoodList {
    // 获取随笔
    async getLists(params={}) {
        Object.assign(params,{modelId:1})
        const {total,rows} = await get((params.isFront?'/web/article/mood/private':'/web/article/mood'),params)
        return {total,rows}
    }

}

export default new MoodList()
