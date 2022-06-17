import Cookies from 'js-cookie'
import {
    WECHAT_OPENID,
    TOKEN,
    USER_ID,
    USER_NAME,
    USER_AVATAR,
    USER_ACCOUNT
} from "../constant/localstorage";
//存token
export function getToken() {
    return Cookies.get(TOKEN)
}

export function setToken(key) {
    return Cookies.set(TOKEN, key, {
        expires: 1
    })
}
export function removeToken() {
    return Cookies.remove(TOKEN)
}

//存微信OPENID
export function getOpenId() {
    return Cookies.get(WECHAT_OPENID)
}
export function setOpenId(key) {
    return Cookies.set(WECHAT_OPENID, key, {
        expires: 1
    })
}
export function removeOpenId() {
    return Cookies.remove(WECHAT_OPENID)
}

/**
 * 存用户信息
 */
// ID
export function getUserId() {
    return Cookies.get(USER_ID)
}

export function setUserId(key) {
    return Cookies.set(USER_ID, key, {
        expires: 1
    })
}
export function removeUserId() {
    return Cookies.remove(USER_ID)
}
// USER_NAME
export function getUserName() {
    return Cookies.get(USER_NAME)
}

export function setUserName(key) {
    return Cookies.set(USER_NAME, key, {
        expires: 1
    })
}
export function removeUserName() {
    return Cookies.remove(USER_NAME)
}
// USER_AVATAR
export function getUserAvatar() {
    return Cookies.get(USER_AVATAR)
}

export function setUserAvatar(key) {
    return Cookies.set(USER_AVATAR, key, {
        expires: 1
    })
}
export function removeUserAvatar() {
    return Cookies.remove(USER_AVATAR)
}
// USER_ACCOUNT
export function getUserAccount() {
    return Cookies.get(USER_ACCOUNT)
}

export function setUserAccount(key) {
    return Cookies.set(USER_ACCOUNT, key, {
        expires: 1
    })
}
export function removeUserAccount() {
    return Cookies.remove(USER_ACCOUNT)
}