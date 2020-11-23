# Express 框架

## 介绍
- Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。

## 基本使用 Hello world
- 下载 npm i express -S
- 新建 server.js
```js
const express = require('express)
const app = express() 
app.get('/',(req, res) => {
    res.send('Hello world')
})
app.listen(8083, () => {
    console.log('Server is running at http://localhost:8083')
})

```
## 请求和响应
- Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。
```js
app.get('/', function (request, response) {
   // --
})
```
> 具体介绍

## Request 对象
> request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：
- req.app：当callback为外部文件时，用req.app访问express的实例
- req.baseUrl：获取路由当前安装的URL路径
- req.body / req.cookies：获得「请求主体」/ Cookies
- req.fresh / req.stale：判断请求是否还「新鲜」
- req.hostname / req.ip：获取主机名和IP地址
- req.originalUrl：获取原始请求URL
- req.params：获取路由的parameters
- req.path：获取请求路径
- req.protocol：获取协议类型
- req.query：获取URL的查询参数串
- req.route：获取当前匹配的路由
- req.subdomains：获取子域名
- req.accepts()：检查可接受的请求的文档类型
- req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
- req.get()：获取指定的HTTP请求头
- req.is()：判断请求头Content-Type的MIME类型

## Response 对象
> response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：

- res.app：同req.app一样
- res.append()：追加指定HTTP头
- res.set()在res.append()后将重置之前设置的头
- res.cookie(name，value [，option])：设置Cookie opition: domain / expires / httpOnly / maxAge / path / secure / signed
- res.clearCookie()：清除Cookie
- res.download()：传送指定路径的文件
- res.get()：返回指定的HTTP头
- res.json()：传送JSON响应
- res.jsonp()：传送JSONP响应
- res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
- res.redirect()：设置响应的Location HTTP头，并且设置状态码302
- res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
- res.send()：传送HTTP响应
- res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
- res.set()：设置HTTP头，传入object可以一次设置多个头
- res.status()：设置HTTP状态码
- res.type()：设置Content-Type的MIME类型

## Express 路由
> 路由决定了由谁(指定脚本)去响应客户端请求。<br />
> 在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。
- 路由的基本形式
```js
app.METHOD(PATH, HANDLER)

app 表示的是一个Express的实例
METHOD 是http请求的方法（get, psot..）
PATH 服务器上的路径
HANDLER请求之后的执行函数
```
- e.g.
```js
// 对/news 页面进行get请求
app.get('news', (req, res)=>{
    res.send('Hello news');
});
// 对/about 页面进行post请求
app.post('about', (req, res)=>{
    res.send('Hello about');
});
// 对/list* 可匹配 /list+任意字符
app.get('/list*', (req, res)=>{
    res.send('Hello list pages');
})
```


## Express 搭建静态资源库
> Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。

你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：
```js
app.use(express.static('public'));
```
如果要使用多个静态资源目录，请多次调用 express.static 中间件函数：
```js
app.use(express.static('public'))
app.use(express.static('files'))
```
Express 在静态目录查找文件，因此，存放静态文件的目录名不会出现在 URL 中。
但是您可以给静态目录添加一个路由：
```js
app.use('/static', express.static(path.join(__dirname, 'public')))
```
设置/static为/public目录的路由。
现在，你就可以通过带有 /static 前缀地址来访问 public 目录中的文件了。
```js
http://localhost:8083/static/css
http://localhost:8083/static/css/index.css
http://localhost:8083/static/image
http://localhost:8083/static/images/bg.jpeg
http://localhost:8083/static/index.html
```
为了安全，最好使用绝对路由：
```js
app.use('/static', express.static(path.join(__dirname, 'public')))
```

## Express 处理 post 请求的 body 参数 
```js
// server.js

// 如果不设置  无法拿到   application/x-www-form-urlencoded 格式的参数
app.use(express.urlencoded()) // 请求体参数是: name=tom&pwd=123

// 如果不设置  post 请求 res.body 为 undefined
app.use(express.json()) // 请求体参数是json结构: {name: tom, pwd: 123}
```









