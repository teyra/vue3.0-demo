/**
 * @file rem set
 */

/**
 * @description 1rem === 1px
 */


export const setRem = () => {
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
        (function (doc, win) {

            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    if (clientWidth >= 750) {
                        docEl.style.fontSize = '100px';
                    } else {
                        docEl.style.fontSize = 30 * (clientWidth / 750) + 'px';
                    }
                    var html = document.getElementsByTagName('html')[0];
                    var settingFs = parseInt(30 * (clientWidth / 750));
                    var settedFs = parseInt(30 * (clientWidth / 750));
                    var whileCount = 0;
                    while (true) {
                        var realFs = parseInt(window.getComputedStyle(html).fontSize);
                        var delta = realFs - settedFs;
                        //不相等
                        if (Math.abs(delta) >= 1) {
                            if (delta > 0)
                                settingFs--;
                            else
                                settingFs++;
                            html.setAttribute('style', 'font-size:' + settingFs + 'px!important');
                        } else
                            break;
                        if (whileCount++ > 100)
                            break
                    }
                };
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
    }
}
/**
 * 处理微信字体调整的问题
 */
export const reSetFontSize = () => {
    (function () {
        if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
            handleFontSize();
        } else {
            if (document.addEventListener) {
                document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
            } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", handleFontSize);
                document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
            }
        }

        function handleFontSize() {
            // 设置网页字体为默认大小
            WeixinJSBridge.invoke('setFontSizeCallback', {
                'fontSize': 0
            });
            // 重写设置网页字体大小的事件
            WeixinJSBridge.on('menu:setfont', function () {
                WeixinJSBridge.invoke('setFontSizeCallback', {
                    'fontSize': 0
                });
            });
        }
    })();
}