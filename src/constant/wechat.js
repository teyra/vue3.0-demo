/**
 * @description 微信相关全局变量
 * */
import {
    FILE_URL,
    HOST_URL
} from '@/constant/domain'
export const WECHAT_APPID = process.env.VUE_APP_ID
export const WECHAT_AUTHORIZE_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + WECHAT_APPID +
    '&redirect_uri=' + encodeURIComponent(window.location.href) +
    '&response_type=code&connect_redirect=1&scope=snsapi_userinfo&state=STATE#wechat_redirect'
export const WECHAT_SHARE_TITLE = '分享标题'
export const WECHAT_SHARE_DESC = '分享详情'
export const WECHAT_SHARE_LINK = HOST_URL
export const WECHAT_SHARE_URL = FILE_URL + '/static/images/share.jpg'