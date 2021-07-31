import author from '../models/author'
import article from '../models/article';
import mood from "../models/mood";
import isUndefined from "lodash/isUndefined";
export const state = () => ({
    authors: undefined,
    // 作者详情
    author: {},
    articles: [],
    loading: false,
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
    setAuthors(state, authors) {
        state.authors = authors
    },
    setPage(state,{page,isMoodList,isLoadMore}){
        if(isMoodList){
            isLoadMore && (state.page.mood++)
            !isUndefined(page) && (state.page.mood = page);
        }else {
            isLoadMore && (state.page.article++)
            !isUndefined(page) && (state.page.article = page);
        }
    },
    setArticles(state, {rows, total,isMoodList}) {
        console.log(rows,'rows')
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
    setLoading(state, loading = false) {
        state.loading = loading
    },
    setParams(state, params){
        state.params = params
    },
    setAuthor(state, author) {
        state.author = author
    }
}

export const actions = {
    async getAuthors({commit}) {
        try {
            const authors = await author.getAuthors()
            commit('setAuthors', authors)
        } catch (e) {
        }
    },
    async getArticles({commit,rootState,state,dispatch}, params) {
        const isMoodList=rootState.app.isMoodList.about
        commit('setPage',{isMoodList,page:0});
        commit('app/setParamsAndToggleLoading',{toggleLoading:true,params},{root:true});
        !state.authors && await dispatch('getAuthors');
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
    async getMoreArticles({rootState,state,commit}, params) {
        const isMoodList=rootState.app.isMoodList.about
        console.log(state)
        try {
            commit('setLoading', true)
            commit('setPage',{isMoodList,isLoadMore:1});
            let result;
            params.count=10
            if(isMoodList){
                params.page=state.page.mood
                console.log(params,'params')
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
}
