import request from '@/utils/request.js'
/**
 *@description 企业大学用户课程相关接口
 **/
/**
 * 获取视频详情
 * */

export function getVideoDetailApi(vid) {
    return request({
        url: '/service/video/h5/getDetail?videoId=' + vid,
        method: 'get'
    })
}
/**
 * 获取视频防盗链
 * */
export function getVideoUrlApi(url) {
    return request({
        url: '/service/video/common/getChainFileUrl?fileUrl=' + url,
        method: 'get'
    })
}