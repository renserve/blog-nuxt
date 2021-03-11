import apply from '../models/apply'

export const state = () => ({
  apply: [],
  total: 0,
  loading: false
})

export const mutations = {
  setApply(state, { apply, total }) {
    state.apply = apply
    state.total = total
  },

  setMoreApply(state, { apply }) {
    state.apply = state.apply.concat(apply)
  },

  setLoading(state, loading = false) {
    state.loading = loading
  },
}

export const actions = {
  async getApply({ commit }, params) {
    try {
      const {total,rows} = await apply.getApply(params)
      commit('setApply', { apply:rows, total: total })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },

  async getMoreApply({ commit, state }, params) {
    try {
      commit('setLoading', true)
        const {total,rows}= await apply.getApply(params)
      commit('setMoreApply', { apply:rows, total: total })
      commit('setLoading', false)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },

  async createApply({ commit, state }, params) {
    return await apply.createApply(params)
  }
}
