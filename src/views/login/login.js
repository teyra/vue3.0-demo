import {
    onMounted,
    ref
} from "vue"
import {
    getRouterInfo
} from "@/utils/utils"
import {
    getToken,
    setToken,
} from '@/utils/auth'
import {
    updateUserInfo
} from '@/utils/user'
import {
    SUCCESSCODE
} from "@/constant/httpcode"
import {
    login,
} from "@/api/common"
import {
    Toast
} from 'vant';
export default {
    components: {
        [Toast.name]: Toast,
    },
    setup() {
        onMounted(() => {
            let {
                redirect
            } = getRouterInfo()
            redirectUrl = redirect
            h5LoginBrowser()
        })
        let redirectUrl = ref('')
        let systemType = ref(0)
        let h5LoginBrowser = () => {
            let system = {
                win: false,
                mac: false,
                xll: false,
                ipad: false
            };
            // systemType 
            // 1 微信环境
            // 2 非微信环境PC端
            // 3 非微信环境移动端
            //检测平台
            let p = navigator.platform;
            system.win = p.indexOf("Win") == 0;
            system.mac = p.indexOf("Mac") == 0;
            system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
            system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
            const ua = navigator.userAgent.toLowerCase()
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                //当前为微信环境
                console.log("当前为微信环境");
                systemType = 1
                wxInit()
            } else {
                //当前为非微信环境
                if (system.win || system.mac || system.xll || system.ipad) {
                    //当前为非微信环境PC端
                    console.log("当前为非微信环境PC端");
                    //扫码登录，弹层二维码界面
                    //扫码后，判断是否绑定手机号，跳转手机绑定；如果已绑定跳转回调
                    // this.wxLoginIsCode()
                    pcBrowserInit()

                } else {
                    // 当前为非微信环境移动端
                    console.log("当前为非微信环境移动端");
                    //短信验证码登录，跳回调页面
                    // this.mobileBrowserInit()
                }
            }
        }
        //PC浏览器打开初始化
        let pcBrowserInit = () => {
            const token = getToken('token')
            if (token) {
                window.location.replace(redirectUrl)
            } else {
                systemType = 2
                confirm()
            }
        }
        let confirm = async () => {
            let postData = {
                loginType: 2,
                userAccount: 18220196104,
                verifyCode: 8888
            }
            let data = await login(postData)
            if (data.code === SUCCESSCODE) {
                const token = data.data.token
                await setToken(token)
                await updateUserInfo()
                window.location.replace(redirectUrl)
                Toast({
                    message: '登录成功！'
                });
            }
        }
    }
}