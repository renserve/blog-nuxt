import {
    get,
} from '../services/http/axios'
class MoodList {
    // č·åéįŽ
    async getLists(params={}) {
        Object.assign(params,{modelId:1})
        const {total,rows} = await get((params.isFront?'/web/article/mood/private':'/web/article/mood'),params)
        return {total,rows}
    }

}

export default new MoodList()
