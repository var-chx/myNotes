# WebSocket

## 什么是 WebSocket
- WebSocket 是一种网络通信协议; RFC6455 定义了它的通信标准
- WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

## 为什么需要 WebSocket ？
- 前置知识
    - HTTP 协议是一种无状态的、无连接的、单向的应用层协议。它采用了请求/响应模型。通信请求只能由客户端发起，服务端对请求做出应答处理
    - 这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。大多数 Web 应用程序将通过频繁的异步 JavaScript 和 XML（AJAX）请求实现长轮询。轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）。
- 因此: WebSocket 连接允许客户端和服务器之间进行全双工通信，以便任一方都可以通过建立的连接将数据推送到另一端。WebSocket 只需要建立一次连接，就可以一直保持连接状态。

## 前端的理解
- Websocket 是一个内置对象 可以new 出来
```
var ws = new WebSocket('ws://localhost:9998/echo');
```
- 具有 属性 事件 方法
    - 属性:

## WebSocket 客户端

- **在客户端** 没有必要为 WebSocket 使用 js库
```js
// 初始化一个 WebSocket 对象
var ws = new WebSocket('ws://localhost:9998/echo');

// 建立 web socket 连接成功触发事件
ws.onopen = function() {
  // 使用 send() 方法发送数据
  ws.send('发送数据');
  alert('数据发送中...');
};

// 接收服务端数据时触发事件
ws.onmessage = function(evt) {
  var received_msg = evt.data;
  alert('数据已接收...');
};

// 断开 web socket 连接成功触发事件
ws.onclose = function() {
  alert('连接已关闭...');
};
```
- **在服务端** (这里的例子是 node服务器) 需要先引入

    - 在 http-server 中使用 npm i ws
    ```js
    var http = require('http');
    var WebSocket = require('ws');
    var server = http.createServer();
    var wss = new WebSocket.Server({server});
    wss.on('connection', (ws) => {
        console.log('链接成功！')
        ws.on('message', (data) => {
            /**
             * 把消息发送到所有的客户端
             * wss.clients获取所有链接的客户端
             */
            console.log(typeof(wss.clients), 9090)
            wss.clients.forEach(function each(client) {
                console.log(1234)
                client.send(data);
            });
        });
    });
    server.listen(8000, function listening() {
        console.log('服务器启动成功！');
    });
    ```



    - 在 express中使用 npmi express-ws
    ```js
    var express = require('express');
    var app = express();
    var expressWs = require('express-ws')(app);
    var util = require('util');
    app.ws('/ws', function(ws, req) {
    util.inspect(ws);
    ws.on('message', function(msg) {
        console.log('_message');
        console.log(msg);
        ws.send('echo:' + msg);
    });
    })
    app.listen(8000);
    ```

    - 纯 WebSocket 服务 npm i nodejs-websocket
    ```js
    var ws = require('nodejs-websocket');
    var server = ws.createServer(function(socket){
    // 事件名称为text(读取字符串时，就叫做text)，读取客户端传来的字符串
    　  var count = 1;
        socket.on('text', function(str) {
    　　     // 在控制台输出前端传来的消息　　
            console.log(str);
            //向前端回复消息
            socket.sendText('服务器端收到客户端端发来的消息了！' + count++);
        });
    }).listen(3300); 
    ```

    - 三种情况对应的客户端代码
    ```js
    var ws = new WebSocket('ws://localhost:8000')
    <!-- var ws = new WebSocket('ws://localhost:8000/ws') -->
    console.log(ws)
    ws.onopen = () => {
        ws.send(23)
    }
    // 接收服务端数据时触发事件
    ws.onmessage = (evt) => {
        var received_msg = evt.data;
        console.log(received_msg)
        alert('数据已接收...');
    };
    ```

- WebSocket 代理: 如果把 WebSocket 的通信看成是电话连接，Nginx 的角色则像是电话接线员，负责将发起电话连接的电话转接到指定的客服。
```
server {
  # this section is specific to the WebSockets proxying
  location /socket.io {
    proxy_pass http://app_server_wsgiapp/socket.io;
    proxy_redirect off;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 600;
  }
}
```

