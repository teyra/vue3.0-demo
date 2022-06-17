/**
 * @description 用于打开App的方法类
 */




/**
 * 从H5打开App的某个页面
 */
export function openApp() {
    // let system = {
    //     win: false,
    //     mac: false,
    //     xll: false,
    //     ipad: false
    // };
    // // systemType 
    // // 1 微信环境
    // // 2 非微信环境PC端
    // // 3 非微信环境移动端
    // //检测平台
    // let p = navigator.platform;
    // system.win = p.indexOf("Win") == 0;
    // system.mac = p.indexOf("Mac") == 0;
    // system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    // system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
    // const ua = navigator.userAgent.toLowerCase()
    // if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    //     //当前为微信环境
    //     console.log("当前为微信环境");
    // } else {
    //     //当前为非微信环境
    //     if (system.win || system.mac || system.xll || system.ipad) {
    //         //当前为非微信环境PC端
    //         console.log("当前为非微信环境PC端");
    //         //请在移动端中打开
    //     } else {
    //         // 当前为非微信环境移动端
    //         let link = "bondent://app/in?type=live&liveType=1&id=1";
    //         // let link = "taobao://item.taobao.com/item.htm?id=";
    //         // 尝试呼起 App
    //         // 3s 后未能呼起则跳转下载
    //         window.location.href = link;
    //         setTimeout(() => {

    //         }, 2000);

    //     }
    // }

}