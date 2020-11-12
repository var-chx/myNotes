## 问题描述
- create-react-app 脚手架将配置文件全部都屏蔽了，让用户使用默认配置就能满足大部分需求，有点类似于“乔布斯”的设计理念；
- 在实际开发中，文件夹的目录嵌套比较深，文件夹也比较多，为了方便管理，就需要设置“绝对路径”
## 使用 react-app-rewired插件解决
- 略
## 放出create-react-app默认配置，修改webpack配置文件
- 安装脚手架依赖库,执行 'npm run eject’命令，释放出默认配置
- 修改工程名/config/webpack.config.js文件
```js
resolve: {
    alias: {
        'react-native': 'react-native-web',
        ...(isEnvProductionProfile && {
            'react-dom$': 'react-dom/profiling',
            'scheduler/tracing': 'scheduler/tracing-profiling',
        }),
        ...(modules.webpackAliases || {}),
        '@': path.resolve(__dirname, '../src'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@pages': path.resolve(__dirname, '../src/pages')
    },
}
```