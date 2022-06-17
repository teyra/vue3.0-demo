import vue from '@vitejs/plugin-vue';
import styleImport, {
  VantResolve
} from 'vite-plugin-style-import';
import path from 'path'
export default {
  /**
   * 插件
   */
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  /**
   * 环境变量
   */
  define: {
    'process.env': {
      VUE_APP_BASE_API: 'http://apidev.bondentcloud.cn'
    }
  },
  resolve: {
    alias: {
      /*
        路径别名
        若为文件系统路径必须是绝对路径的形式，否则将以别名原样呈现，不会解析为文件系统路径路径 
      */
      '@': path.resolve(__dirname, './src')
    },
  },
  server: {
    port: 8080, //vite项目启动时自定义端口
  },
};