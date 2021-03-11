import mood from '../models/mood'
export const state = () => ({
    isMoodEdit:false,
    lists: [],
    listsTotal: 0,
    loading: false,
})

export const mutations = {
    setMoodEdit(state, isMoodEdit) {
        state.isMoodEdit=isMoodEdit
    },
    setLoading(state, loading = false) {
        state.loading = loading
    },
    setLists(state, {rows, total}) {
        state.lists = rows
        state.listsTotal = total
    },
    setMoreLists(state,rows) {
        state.lists = state.lists.concat(rows)
    },
}

export const actions = {
    async getMoreLists({commit}, query) {
        try {
            commit('setLoading', true)
            const {rows} = await mood.getLists(query)
            commit('setMoreLists', rows)
            commit('setLoading', false)
        } catch (e) {
            commit('setLoading', false)
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },
    async getLists({commit}, query) {
        try {
            let {total, rows} = await mood.getLists(query)
            commit('setLists', {rows, total})
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    }
}
