// import {
//     UPLOAD_COVER_RULE,
//     UPLOAD_VIDEO_RULE
// } from '@/constant/filerules'


/**
 * @description 后台管理系统工具类
 * @create 2021-07-05
 * @By J.J
 *
 * */


/**
 * @description 检查手机号合法性
 * */
export const checkPhoneNum = num => /^1(3|4|5|6|7|8|9)\d{9}$/.test(num);

// /**
//  * @description 视频封面图片上传验证
//  * */
// export const checkUploadCoverImage = function (file, size) {

//     let isImgType = UPLOAD_COVER_RULE.indexOf(file.type) != -1
//     let isImgSize = file.size / 1024 / 1024 < size
//     if (!isImgType) {
//         return 'type'
//     }
//     if (!isImgSize) {
//         return 'size'
//     }
//     return isImgType && isImgSize;
// }
// /**
//  * @description 视频上传验证
//  * */

// export const checkUploadVideo = function (file, size) {
//     let videoType = file.raw.type
//     let videoSize = file.raw.size / 1024 / 1024
//     if (this.$refs.videoUploader.uploadFiles.length > 1) {
//         this.$refs.videoUploader.uploadFiles.shift()
//     }
//     if (this.videoAcceptArr.indexOf(videoType) == -1) {
//         this.msgError('上传视频只能是mp4，avi，wmv，mov，flv，rmvb，3gp，m4v，mkv格式!')
//         this.$refs.videoUploader.clearFiles()
//         this.fileList = []
//         return
//     }
//     if (videoSize >= 5000) {
//         this.msgError('上传视频不能超过5G!')
//         this.$refs.videoUploader.clearFiles()
//         this.fileList = []
//         return
//     }
//     // console.log(fileList)
//     this.fileList = fileList
//     return videoType && videoSize
// }

/**
 * @description 获取转义后url链接参数
 * */

export const parseQueryString = function (url) {
    let index = url.lastIndexOf("?");
    let str = url.substring(index + 1);

    if (str) {
        let iterms = str.split("&");
        let data = {};
        for (let i = 0; i < iterms.length; i++) {
            let arr = iterms[i].split("=");
            data[arr[0]] = arr[1];
        }
        return data;
    }
}

/**
 * @description 获取redirect转义后url链接参数
 * */

export const parseRedirectQueryString = function (url) {
    let index = url.lastIndexOf("?redirect");
    let str = url.substring(index + 1);
    if (str) {
        let iterms = str.split("redirect=");
        let data = iterms[1].split("&code=")[0]
        return data;
    }
}
/**
 * base64转file
 * */
export const base64ToFile = function (urlData) {
    return blobToFile(base64ToBlob(urlData))
}
export const base64ToBlob = function (base64Data) {
    let arr = base64Data.split(","),
        fileType = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        l = bstr.length,
        u8Arr = new Uint8Array(l)
    while (l--) {
        u8Arr[l] = bstr.charCodeAt(l)
    }
    return new Blob([u8Arr], {
        type: fileType
    })
}
export const blobToFile = function (newBlob) {
    newBlob.lastModifiedDate = new Date()
    //newBlob.name = fileName
    return newBlob
}
/** 图片压缩，默认同比例压缩
 *  @param {Object} fileObj
 *  图片对象
 *  回调函数有一个参数，base64的字符串数据
 */
export const imageCompress = function (fileObj, rw, rh, callback) {
    try {
        const image = new Image()
        image.src = URL.createObjectURL(fileObj)
        image.onload = function () {
            const that = this
            let quality = 0.98 // 默认图片质量为0.8
            // 生成canvas
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            // 创建属性节点
            const anw = document.createAttribute('width')
            anw.nodeValue = rw
            const anh = document.createAttribute('height')
            anh.nodeValue = rh
            canvas.setAttributeNode(anw)
            canvas.setAttributeNode(anh)
            ctx.drawImage(that, 0, 0, rw, rh)
            // 图像质量
            // if (fileObj.quality && fileObj.quality <= 1 && fileObj.quality > 0) {
            //     quality = fileObj.quality
            // }
            // quality值越小，所绘制出的图像越模糊
            const data = canvas.toDataURL('image/jpeg', quality)
            // 压缩完成执行回调
            const newFile = base64ToFile(data)
            callback(newFile)
        }
    } catch (e) {
        console.log('压缩失败!')
    }
}
/**
 *获取路由信息
 */
import {
    useRouter
} from "vue-router"
export const getRouterInfo = function () {
    let data = useRouter().currentRoute._value.query
    return data
}