import {
  createApp
} from 'vue'
import App from '@/App.vue'
import axios from 'axios'
import errorCode from '@/utils/errorCode'
import {
  getToken,
} from '@/utils/auth'
import {
  SUCCESSCODE,
  MISSTOKENCODE,
  ERRORCODE
} from "@/constant/httpcode"
// import store from '../'
// import router from '../router/index'
import {
  Toast,
  Dialog
} from 'vant'
import {
  loginOut
} from './stateManage'
const app = createApp(App)
app.use(Toast)
app.use(Dialog)
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000
})
// request拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  // const isToken = (config.headers || {}).isToken === false
  const isToken = config.headers.token
  if (getToken() && !isToken) {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers['source'] = "2" // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?';
    for (const propName of Object.keys(config.params)) {
      const value = config.params[propName];
      var part = encodeURIComponent(propName) + "=";
      if (value !== null && typeof (value) !== "undefined") {
        if (typeof value === 'object') {
          for (const key of Object.keys(value)) {
            let params = propName + '[' + key + ']';
            var subPart = encodeURIComponent(params) + "=";
            url += subPart + encodeURIComponent(value[key]) + "&";
          }
        } else {
          url += part + encodeURIComponent(value) + "&";
        }
      }
    }
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || SUCCESSCODE;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    if (code === MISSTOKENCODE) {
      console.log('MISSTOKENCODE');
      loginOut()
    } else if (code === ERRORCODE) {
      Toast(msg)
      return
    } else if (code !== SUCCESSCODE) {
      Toast({
        message: msg
      })
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error)
    let {
      message
    } = error;
    if (message == "Network Error") {
      message = "呀，网络出了问题";
    } else if (message.includes("timeout")) {
      message = "呀，网络出了问题";
    } else if (message.includes("Request failed with status code")) {
      //message = "系统接口" + message.substr(message.length - 3) + "异常";
      message = "呀，网络出了问题";
    }
    Toast(message)
    return Promise.reject(error)
  }
)

export default service