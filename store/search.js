
import author from '../models/author'
import article from '../models/article'
import category from '../models/category'
import tag from '../models/tag'

export const state = () => ({
  authors: undefined,
    tags: undefined,
  categories: undefined,
  articles: [],
  loading: false,
  total: 0
})

export const mutations = {
  setAuthorsTagsCategories(state, { authors, categories,tags }) {
    state.authors = authors
    state.categories = categories
      state.tags = tags
  },

  setLoading(state, loading = false) {
    state.loading = loading
  },

  setArticles(state, { articles, total }) {
    state.articles = articles
    state.total = total
  }
}

export const actions = {
  async getSearchData({ commit,rootState,state }) {
    try {
      const authors = rootState.about.authors || await author.getAuthors()
      const categories =rootState.tag.categories ||  await category.getCategories({forbid:1})
      const tags =await tag.getTags({forbid:1})
      commit('setAuthorsTagsCategories', { authors, categories ,tags})
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },

  async searchArticles({ commit }, params) {
    try {
      commit('setLoading', true)
      const results= await article.searchArticles(params)
      commit('setArticles', { articles:results,total:results.length})
      commit('setLoading', false)
    } catch (e) {
      commit('setLoading', false)
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}
