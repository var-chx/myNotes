// const http = require('http')
// const WebSocket = require('ws')
// const hostname = '127.0.0.1'
// const port  = 3300
// console.log(port)
// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('content-type', 'text/plain')
//     res.end('Hello world')
// })
// server.listen(port, hostname, () => {
//     console.log('127.0.0.1:3300')
//     const wss = new WebSocket.Server({ noServer: true })
//     console.log(wss)
//     wss.on('connection', (ws) => {
//         console.log('222222222')
//         ws.on('message', (msg) => {
//             console.log(msg)
//         })
//     })
// })

// var ws = require('nodejs-websocket');
// var server = ws.createServer(function(socket){
// // 事件名称为text(读取字符串时，就叫做text)，读取客户端传来的字符串
// 　  var count = 1;
//     socket.on('text', function(str) {
// 　　     // 在控制台输出前端传来的消息　　
//         console.log(str);
//         //向前端回复消息
//         socket.sendText('服务器端收到客户端端发来的消息了！' + count++);
//     });
// }).listen(3300); 

var express = require('express');
var http = require('http');
var WebSocket = require('ws');

var app = express();
app.use(express.static(__dirname));

var server = http.createServer(app);
var wss = new WebSocket.Server({server});
 
wss.on('connection', function connection(ws) {
    console.log('链接成功！');
    ws.on('message', function incoming(data) {
        /**
         * 把消息发送到所有的客户端
         * wss.clients获取所有链接的客户端
         */
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    });
 });
server.listen(8000, function listening() {
    console.log('服务器启动成功！');
 });