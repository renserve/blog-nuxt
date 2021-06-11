import tag from '../models/tag'
import category from '../models/category'
import article from '../models/article'
import mood from "../models/mood";
import isUndefined from 'lodash/isUndefined'
import isNumber from 'lodash/isNumber'
export const state = () => ({
    tags: undefined,
    categories: undefined,
    params:undefined,
    // 标签 或 分类 详情
    loading: false,
    articles: [],
    moods: [],
    page:{
        mood: 0,
        article:0
    },
    total: {
        mood: 0,
        article:0
    }
})

export const mutations = {
    setPage(state,{page,isMoodList,isLoadMore}){
        if(isMoodList){
            isLoadMore && (state.page.mood++)
            !isUndefined(page) && (state.page.mood = page);
        }else {
            isLoadMore && (state.page.article++)
            !isUndefined(page) && (state.page.article = page);
        }
    },
    setTagAndCategories(state, {tags, categories}) {
        state.tags = tags.filter(i=>!i.categories.length)
        state.categories = categories
    },
    setArticles(state, {rows, total,isMoodList}) {
        if(isMoodList){
            state.moods = rows
            state.total.mood = total
        }else {
            state.articles = rows
            state.total.article = total
        }
    },
    setMoreArticles(state, {rows,isMoodList}) {
        if(isMoodList){
            state.moods = state.moods.concat(rows)
        }else {
            state.articles = state.articles.concat(rows)
        }
    },
    clearMoodList(state) {
        state.moods = []
        state.total.mood = 0
    },
    setToggleLoading(state, toggleLoading) {
        state.toggleLoading = toggleLoading
    },
    setLoading(state, loading = false) {
        state.loading = loading
    },
    setParams(state, params){
        state.params=params
    }
}

export const actions = {
    async getTagAndCategories({commit}) {
        try {
            const tags = await tag.getTags()
            const categories = await category.getCategories()
            commit('setTagAndCategories', {tags, categories})
        } catch (e) {}
    },

    async getMoreArticles({rootState,state,commit}, params) {
        const isMoodList=rootState.app.isMoodList.tag
        try {
            commit('setLoading', true)
            commit('setPage',{isMoodList,isLoadMore:1});
            let result;
            params.count=10
            if(isMoodList){
                params.page=state.page.mood
                result= await mood.getLists(params)
            }else {
                params.page=state.page.article
                result= await article.getArticles(params)
            }
            commit('setMoreArticles',{rows:result.rows,isMoodList})
            commit('setLoading', false)
        } catch (e) {
            commit('setLoading', false)
        }
    },
    async getArticles({commit,rootState,state,dispatch}, params) {
        const isMoodList=rootState.app.isMoodList.tag
        commit('setPage',{isMoodList,page:0});
        commit('app/setParamsAndToggleLoading',{toggleLoading:true,params},{root:true});
        if(!state.tags || !state.categories){
            await dispatch('getTagAndCategories');
        }
        params && commit('setParams',params);
        // alert(isMoodList,'isMoodList')
        try {
            if(isMoodList){
                params.page=state.page.mood
                let {rows,total}= await mood.getLists(params)
                commit('setArticles',{rows,total,isMoodList})
            }else {
                params.page=state.page.article
                let {rows,total}= await article.getArticles(params)
                commit('setArticles',{rows,total,isMoodList})
            }
        } catch (e) {

        }
        commit('app/setParamsAndToggleLoading',{toggleLoading:false},{root:true})
    },
}
