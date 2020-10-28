## 关于Kurento和WebRTC
- kurento 是 一个 webRTC 的媒体服务
- 它提供一组 客户端API, 简化了web 和智能手机等平台开发高级视频应用的工作
- 它的特性包含 群组通信, 转码, 录音, 混音, 广播, 视听流路由
    - 群组通信:将一个对等点生成的媒体流分发给几个接收方，即充当一个多会议单元(MCU)。
    - 转码:在不兼容的客户端之间动态地调整编解码器和格式。
    - 混合: 把几个进入的流转变成一个单一的混合流。
### Kurento 提供一个多媒体框架, 它简化了使用一下特性构建多媒体应用程序任务
#### 1. 动态 WebRTC 媒体管道:
- Kurento允许自定义媒体管道连接到WebRTC节点，如web浏览器和移动应用程序。这些媒体管道基于可组合的元素，如播放器、录音机、混频器等，这些元素可以在任何时间被混合和匹配、激活或停用，即使媒体已经在流动。
#### 2.  客户机/服务器体系结构:
- 使用 Kurento 开发的 App 遵循 客户端/服务端 架构
- Kurento Media Server(KMS)是一个服务器, 它提供了一个基于Kurento协议的 WebSocket 接口,该协议允许客户端程序定义管道拓扑
#### 3. Java 和 javeScript 客户端应用程序:
- KMS部署的典型用例由三层架构组成
- 其中用户浏览器通过中间客户端应用程序与KMS服务器交互。
- 官方提供几个 由 Java 和 JavaScript 实现的 中间客户端
- 当然, 其他语言 也很容易按照 WebSocket协议实现
#### 4. 第三方模块:
- 创建一个 新的 Kurento 元素, 可以在已经存在的媒体管道中使用

## WebRTC 媒体服务
- webRTC 是一组协议,通过点对点连接为浏览器和移动应用程序提供实时通信(RTC)功能的机制和API
- 不需要其他基础设施的中介, 就能实现浏览器间的直接通信, 但能能创建基本的web应用, 诸如组通信、媒体流记录、媒体广播或媒体转码等功能很难在其上实现。由于这个原因，许多应用程序最终需要一个中间媒体服务器。
- 从概念上讲 webRTC 是一个多媒体的中间件

## Kurento 媒体服务
- Kurento 主要功能是在 KMS 上, 有一下功能
    - 网络流媒体协议，包括HTTP, RTP和WebRTC。
    - 组通信(MCU和SFU功能)支持媒体混合和媒体路由/分派
    - 对实现计算机视觉和增强现实算法的过滤器的通用支持。
    -  GStreamer支持的任何编解码器之间的自动媒体转码，包括VP8、H.264、H.263、AMR、OPUS、Speex、G.711等。

## Kurento 设计原则
- 分开的媒体和信号层面
- 媒体和应用服务的分发 媒体和应用服务可以部署在不同的机器上
- 适合云平台
- 通过媒体管道连接媒体元素
- 应用程序开发 不需要了解 Kurento的内部实现原理
- 端到端的通信能力

## 使用Kurento 的步骤
- 1. 选择 Kurento 还是 OpenVidu
- 2. 安装 Kurento
- 3. 配置
- 4. 编写一个查询Kurento API的应用程序，(官方提供jave, javaScript),可以用任何语言

## 安装方式
- Amazon Web Services
- Docker images
- apt-get install

## 开发方式
- java (需要安装 Java 的 JDK 和 Maven)
- bowser JavaScript(不需要服务器 直接运行在浏览器)
- Node.js

## Node.js -- hello world
1. 安装 Kurento media Server
```
docker pull kurento/kurento-media-server:latest

linux: docker run -d --name kms --network host kurento/kurento-media-server:latest
Mac: docker run --rm -d --name kms -p 8888:8888 kurento/kurento-media-server:latest

```

2. 启动一个 hello world
```
git clone https://github.com/Kurento/kurento-tutorial-node.git
cd kurento-tutorial-node/kurento-hello-world
git checkout master
npm install
cd static
bower install --allow-root  (npm install -g bower 也是一个包管理工具)
cd ..
npm start
```

## 场景: 一对多
- 一个视频广播web应用程序的实现










