# Node.js

## 清除 npm 的缓存
```sh
rm -r node_modules
npm cache clean
```
## start 脚本
- 在 package.json 文件中定义的 "scripts" 对象中查找 "start" 属性， 如果此属性定义了任何命令则执行之。 如果 "scripts" 对象中没有定义 "start" 属性， 默认执行 node server.js 命令。

## 利用node的util中的promisify 将异步封装为promise
- 利用promise封装异步读取文件(原生)
```js
const fs = require('fs')
let read = (url) => {
    return new Promise((resolve, reject) => {
        fs.readfile(url, 'utf-8',(err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

read('./index.js').then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

// 也可以使用 catch() 实质就是 .then(null,reject)
read('./index.js').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
```

- 利用node的util中的 promiseify 将异步封装成 promise
```js
const fs = require('fs')
const util = require('util')

let read = util.promiseify(fs.readFile)
read('./index.js', 'utf-8').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
```
## path 模块的使用
- 创建 main.js 文件，代码如下所示：
```js
var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径(注意理解 ../)
console.log('join path : ' + path.join('/test', 'test1', '../2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));
```

- 执行结果
```js
normalization : /test/test1/2slashes/1slash
join path : /test/2slashes/1slash
resolve : /Users/hxchu/workSpace/myNotes/07-Nodejs/WebScoket后端实现/main.js
ext name : .js
```