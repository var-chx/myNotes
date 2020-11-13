# 搭建UI组件库
## 1. 初始化一个项目 hx-ui
```sh
vue create hx-ui
// 选择 babel lint sass 就够了 不需要 vuex 和 router等
```
## 2. 删除多余的内容 获得一个干净的项目
## 3. 在 components 文件夹下写自己的组件
## 4. 在 main.js 中 全局注册
```js
import HxButton from './components/button.vue'

Vue.component(HxButton.name, HxButton)
```
## 4. 在 App.vue 中引用 做测试

## 封装 UI 组件库 借鉴 element-ui
- 再初始化一个项目 删除多余的内容 获取一个干净的项目
- 调整目录 根目录创建
    - packages: 用于存放所有的组件 最终对其打包
    - examples: 进行测试 把 src 改为 examples 
    - 把fonts放到packages中
- 此时项目无法启动 要修改 入口文件 新增vue.config.js配置
```js
const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
```
- 在scripts中新增一条 打包命令
```js
"lib": "vue-cli-service build --target lib packages/index.js"
```

- 修改 package.json 文件
```json
"private": false,
"main": "dist/xxxxxxx.umd.min.js",
"author": {
  "name": "xxx"
},
```
- 增加 .npmignore 文件
```sh
# 忽略目录
examples/
packages/
public/
 
# 忽略指定文件
vue.config.js
babel.config.js
*.map
```
- 换成 npm 源
- 发布
```
npm login in publish
```

## element-ui 修改源码后打包
- 修改源码不能在项目中修改，不管是去element-ui下的packages下的组件中的main.js还是去输出的lib包里面修改都是无效的。
- 这个时候就要去创建一个新的文件夹，在文件夹下面运行命令窗口，输入以下代码
```sh
git clone https://github.com/ElemeFE/element.git
cd element
npm install
```
- 然后再修改packages 里面的源码，在进行打包运行
```sh
npm run dist
```
- 然后把打包后的lib包文件去替换node_modules中的elementuiElement下的lib文件 




