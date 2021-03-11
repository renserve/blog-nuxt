import Cookies from 'js-cookie'
export function getCookie(key) {
    return Cookies.get(key)
}

export function setCookie(key,val) {
    return Cookies.set(key,val)
}

export function removeCookie(key) {
    return Cookies.remove(key)
}