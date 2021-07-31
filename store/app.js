import webConfig from '../config/const'
import author from "../models/author";
import cloneDeep from "lodash/cloneDeep";
export const state = () => ({
    theme: 'light',
    webConfig:webConfig,
    isShowSearch: false,
    toggleLoading: false,
    token:undefined,
    isMoodList:{
        about:false,
        tag:false,
    },
    userLocal:{likeIds:[],commentIds:[],viewIds:[]},
    params:undefined,
    clientNavList:[],
    navList:[
        {
            link: "/",
            ssr:1,
            name: "首页"
        },
        {
            link: "/mood",
            ssr:1,
            name: "随笔"
        },
        {
            link: "/sitemap",
            ssr:1,
            name: "标签"
        },
        {
            link: "/archive",
            ssr:1,
            name: "归档"
        },
        {
            link: "/about",
            ssr:1,
            name: "关于"
        },
        {
            link: "/messages",
            ssr:1,
            name: "留言墙"
        },
        /*{
            link: "/login",
            ssr:1,
            name: "入驻"
        }*/
    ]
})

export const mutations = {
    setParamsAndToggleLoading(state, {toggleLoading,params}) {
        state.toggleLoading = toggleLoading
        params && (state.params = params)
    },
    showMoodList(state, data){
        // console.log()
        state.isMoodList[data[0]]=data[1]
    },
    setLocalInfo(state,data){
        // window和dom对象只能在客户端访问
        if(process.client){
            const userId=window.localStorage.getItem('userId')
            if(userId){
                const userLocal=state.userLocal
                if(!userLocal[data.k].includes(data.v)){
                    userLocal[data.k].push(data.v)
                    window.localStorage.setItem(userId,JSON.stringify(state.userLocal))
                }
            }
        }
    },
    setToken(state, token) {
        if(!token && process.client){
            window.localStorage.removeItem('journeyToken')
        }
        state.token=token
    },
    setTheme(state, theme) {
        document.body.id = theme
        state.theme = theme
    },
    setClientNavList(state, data){
        state.clientNavList = data || []
    },
    setShowSearch(state, isShowSearch) {
        state.isShowSearch = isShowSearch
    }
}
export const actions = {
    async getToken({commit},data) {
        try {
            const  result= await author.getToken(data)
            let token;
            if(result){
                const {access_token,refresh_token,id}=result
                token={
                    id,
                    access_token:`Bearer ${access_token}`,
                    refresh_token:`Bearer ${refresh_token}`,
                }
                commit('setToken', token)
            }
            return Promise.resolve(token)
        } catch (e) {
            // eslint-disable-next-line no-console
            return Promise.reject(false)
        }
    }
}
