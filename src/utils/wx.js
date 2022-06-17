import wx from "weixin-js-sdk"
import {
    SUCCESSCODE
} from "@/constant/httpcode"
import {
    getWxShare
} from "@/api/common"
export async function wxShare(shareData) {
    const data = await getWxShare({
        url: window.location.href
    })
    if (data.code === SUCCESSCODE) {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.data.appId, // 必填，公众号的唯一标识
            timestamp: data.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
            signature: data.data.signature, // 必填，签名，见附录1
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "chooseImage"],
            /**
             * 注：新属性 华为mate20 不支持，使用老属性，废弃后需要修改为新属性
             * */
            //jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            openTagList: ["wx-open-launch-app", "wx-open-audio"], // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
        })
        wx.ready(() => {
            wx.onMenuShareAppMessage({
                title: shareData.title,
                desc: shareData.desc,
                link: shareData.link,
                imgUrl: shareData.imgUrl,
                success: (e) => {
                    // console.log('微信分享设置成功')
                },
                fail: (e) => {
                    console.log('设置失败', e)
                }
            })
            wx.onMenuShareTimeline({
                title: shareData.title,
                desc: shareData.desc,
                link: shareData.link,
                imgUrl: shareData.imgUrl,
                success: () => {
                    // console.log('微信分享设置成功')
                },
                fail: (e) => {
                    console.log('设置失败', e)
                }
            })
        })
    }
}