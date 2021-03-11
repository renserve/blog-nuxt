import Vue from 'vue'
import axios from 'axios'
import Config from '@/config'
import isObject from 'lodash/isObject'
let flagCount=0;
const config = {
    baseURL: Config.baseUrl,
    timeout: 5 * 1000,
    withCredentials: true,
    validateStatus(status) {
        return status >= 200 && status <= 500
    }
}

const _axios = axios.create(config)

_axios.interceptors.request.use((originConfig)=> {
    const reqConfig = {...originConfig}
    const journeyToken=process.client && JSON.parse(window.localStorage.getItem('journeyToken') || null)
    if (journeyToken) {
        if (reqConfig.url === 'cms/user/refresh') {
            const refreshToken = journeyToken.refresh_token
            if (refreshToken) {
                reqConfig.headers.Authorization = refreshToken
            }
        } else {
            // 有access_token
            const accessToken = journeyToken.access_token
            if (accessToken) {
                reqConfig.headers.Authorization = accessToken
            }
        }
    }
    // step1: 容错处理
    if (!reqConfig.url) {
        throw new Error({
            source: 'axiosInterceptors',
            message: 'request need url'
        })
    }

    // 默认使用 get 请求
    if (!reqConfig.method) {
        reqConfig.method = 'get'
    }

    // 大小写
    reqConfig.method = reqConfig.method.toLowerCase()

    if (reqConfig.method === 'get') {
        if (!reqConfig.params) {  // 防止字段用错
            reqConfig.params = reqConfig.data || {}
        }
    } else if (reqConfig.method === 'post') {
        if (!reqConfig.data) {
            reqConfig.data = reqConfig.params || {}
        }

        let hasFile = false
        Object.keys(reqConfig.data).forEach(key => {
            if (typeof reqConfig.data[key] === 'object') {
                if (reqConfig.data[key] instanceof FileList || reqConfig.data[key] instanceof File || reqConfig.data[key] instanceof Blob) {
                    hasFile = true
                } else if (reqConfig.data[key].constructor === Object) {
                    reqConfig.data[key] = JSON.stringify(reqConfig.data[key])
                }
            }
        })

        if (hasFile) {
            const formData = new FormData()
            Object.keys(reqConfig.data).forEach(key => {
                formData.append(key, reqConfig.data[key])
            })
            reqConfig.data = formData
        }
    }

    return reqConfig
}, error => {
    Promise.reject(error)
})

_axios.interceptors.response.use(async (res) => {
    if (res.status.toString().charAt(0) === '2') {
        return res.data
    } else {
        let {code, message} = res.data // eslint-disable-line
        return new Promise(async (resolve, reject) => {
            const {url} = res.config
                if (code === 10041 || code === 10051 || code === 10050) {
                    const cache = {}
                    if (cache.url !== url) {
                        cache.url = url
                        const {id,access_token,refresh_token} = await _axios('cms/user/refresh')
                        flagCount++
                        if(flagCount>3){
                            return
                        }
                        window.localStorage.setItem('journeyToken',JSON.stringify({
                            id,
                            access_token:`Bearer ${access_token}`,
                            refresh_token:`Bearer ${refresh_token}`,
                        }))
                        const result = await _axios(res.config)
                        return resolve(result)
                    }
                }else {
                    if(code === 10100){
                        window.localStorage.removeItem('journey')
                        window.localStorage.removeItem('journeyToken')
                        window.location.reload()
                        alert('请重新登录')
                    }else {
                        if(process.client){
                            message && alert(isObject(message) ? Object.values(message)[0] : message)
                        }
                    }
                }
            })
        }
    },
    error => {
        console.log(error)
    }
)

const Plugin = {}

Plugin.install = function (Vue) {
    Vue.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios
            }
        },
        $axios: {
            get() {
                return _axios
            }
        }
    })
}

if (!Vue.axios) {
    Vue.use(Plugin)
}

// 导出常用函数

export function post(url, data = {}, params = {}) {
    return _axios({
        method: 'post',
        url,
        data,
        params
    })
}

export function get(url, params = {}) {
    return _axios({
        method: 'get',
        url,
        params
    })
}

export function put(url, data = {}, params = {}) {
    return _axios({
        method: 'put',
        url,
        params,
        data
    })
}

export function _delete(url, params = {}) {
    return _axios({
        method: 'delete',
        url,
        params
    })
}

export default _axios
