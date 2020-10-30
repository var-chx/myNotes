# Node.js

## 清除 npm 的缓存
```sh
rm -r node_modules
npm cache clean
```
## start 脚本
- 在 package.json 文件中定义的 "scripts" 对象中查找 "start" 属性， 如果此属性定义了任何命令则执行之。 如果 "scripts" 对象中没有定义 "start" 属性， 默认执行 node server.js 命令。
