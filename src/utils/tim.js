import TIM from 'tim-js-sdk';
import TIMUploadPlugin from 'tim-upload-plugin';
// 1400560018
let options = {
    SDKAppID: Number(process.env.VUE_APP_TIM_SDK_ID)
};
let tim = TIM.create(options);
tim.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用
// 注册腾讯云即时通信 IM 上传插件
tim.registerPlugin({
    'tim-upload-plugin': TIMUploadPlugin
});
export default tim