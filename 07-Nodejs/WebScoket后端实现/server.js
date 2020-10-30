

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




// var http = require('http');
// var WebSocket = require('ws');
// var server = http.createServer();
// var wss = new WebSocket.Server({server});
// wss.on('connection', (ws) => {
//     console.log('链接成功！')
//     ws.on('message', (data) => {
//         /**
//          * 把消息发送到所有的客户端
//          * wss.clients获取所有链接的客户端
//          */
//         console.log(typeof(wss.clients), 9090)
//         wss.clients.forEach(function each(client) {
//             console.log(1234)
//             client.send(data);
//         });
//     });
//  });
// server.listen(8000, function listening() {
//     console.log('服务器启动成功！');
// });


// var express = require('express');
// var app = express();
// var expressWs = require('express-ws')(app);
// var util = require('util');
// app.ws('/ws', function(ws, req) {
//   util.inspect(ws);
//   ws.on('message', function(msg) {
//     console.log('_message');
//     console.log(msg);
//     ws.send('echo:' + msg);
//   });
// })
// app.listen(8000);

var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径(注意理解 ../)
console.log('join path : ' + path.join('/test', 'test1', '../2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('1.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));
