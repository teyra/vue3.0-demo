/**
 * @description 全局接口
 * */

import request from '@/utils/request'
//code 换取获取微信 获取openid
export function getWxLoginOauthApi(data) {
    return request({
        url: '/service/account/h5/wechatLogin',
        method: 'post',
        data
    })
}


//用户自定义分享
export function getWxShare(data) {
    return request({
        url: '/service/account/h5/getJSSDKSignature',
        method: 'post',
        data
    })
}

/**
 * @阿里云OSS STS
 **/
export function getStsToken() {
    return request({
        url: '/service/video/common/getStsToken',
        method: 'get'
    })
}

/**
 * @腾讯云点播签名
 **/
export function getTencentOnDemandSign() {
    return request({
        url: '/service/video/common/getTencentOnDemandSign',
        method: 'get'
    })
}

/**
 * @腾讯图形验证码
 * */
export function describeCaptchaResult(data) {
    return request({
        url: '/service/config/common/describeCaptchaResult',
        method: 'post',
        data
    })
}
/**
 * @获取短信验证码
 * */
export function getSmsCode(data) {
    return request({
        url: '/service/notice/sendVerificationCode',
        method: 'post',
        data
    })
}
/**
 * @查询省市城市信息
 * */
export function getProvinces() {
    return request({
        url: '/service/config/common/getProvinces',
        method: 'get'
    })
}
/**
 *登录
 * */

export function login(data) {
    return request({
        url: '/service/account/h5/login',
        method: 'post',
        data
    })
}

/**
 *获取所有课程体系
 * */

export function getPlatformCategory() {
    return request({
        url: '/service/video/common/listPlatformCategory',
        method: 'get',
    })
}

/**
 * 获取腾讯IM签名
 * */
export function getImSig() {
    return request({
        url: '/service/im/common/getImSig',
        method: 'get',
    })
}

/**
 * 微信支付-预支付接口
 * */
export function wechatPrePay(data) {
    return request({
        url: '/service/order/pay/prepay',
        method: 'post',
        data
    })
}
// /service/order/wechat/pay/jsApiPrepay

/**
 * @微信扫码登录
 * */
export function wechatLogin(data) {
    return request({
        url: '/service/account/manage/wechatLogin',
        method: 'post',
        data
    })
}
/**
 * 天眼查接口
 * */
export function enterpriseSearch(data) {
    return request({
        url: '/service/account/common/enterpriseSearch',
        method: 'post',
        data
    })
}