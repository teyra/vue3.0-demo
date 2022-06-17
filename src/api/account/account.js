import request from '@/utils/request'
/**
 *@description 用户账户相关接口
 **/
/**
 * 获取用户信息
 * */
export function getinfo() {
    return request({
        url: '/service/account/h5/userInfo',
        method: 'post'
    })
}