/**
 * @description 用于webview的方法类
 */

import {
    setToken
} from "./auth";
import {
    updateUserInfo
} from "./user";

/**
 * 检查手机系统
 */
export function checkSystem() {
    const u = navigator.userAgent;
    const android = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
    const ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (android) {
        return "android"
    } else if (ios) {
        return "ios"
    }
}


// export function getAppToken( fun ) {
//     const u = navigator.userAgent;
//     const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
//     const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

//     if (isAndroid) {
//         let androidToken = window.Android.getToken()
//         setToken(androidToken)
//         updateUserInfo()
//     } else if (isIos) {
//         window.getToken = (iosToken) => {
//            // alert(iosToken + '40')
//             setToken(iosToken)
//             updateUserInfo()
//             fun && fun(iosToken)

//         }
//     }
// }
/**
 * 获取APP-TOKEN 更新cookie用户信息
 */
export function getAppToken(token) {
    setToken(token)
    updateUserInfo()
}
/**
 * IOS传值
 */
export function setString(val) {
    return val;
}