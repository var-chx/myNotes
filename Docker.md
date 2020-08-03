## Docker基础 

### 概念
- 是一个应用容器引擎 基于Go语言开发 使用沙箱机制 容器的性能开销很低

### Docker的应用场景
- Web应用的自动化打包和发布
- 自动化测试和持续集成 发布
- 在服务型环境中部署和调整数据库后其他后台应用

### 与传统虚拟机的比较
- Docker 启动很快  占用体积小

### 组成
- docker 守护进程
- 仓库: 共有 私有
- 镜像
- 容器
- docker客户端

### 意义
- 使用Docker可以实现开发人员的开发环境 测试人员的测试环境 运维人员的生产环境的一致性

### 镜像的相关指令
- Docker 镜像是由文件系统叠加而成的(一种文件的存储形式) 可以理解为对某些运行环境或者软件打的包 用户可以从decker的仓库下载基础镜像到本地 
- 查看镜像 docker images 
- 镜像的搜索 docker search centos7 
- 镜像的拉取 docker pull centos:7 (如果不指定版本号 则拉取最新的版本)
- 镜像的删除 dockre rmi + IMAGE ID  (docker rmi 'docker images -q' 全部删除)

### 查看 & 创建并启动容器
- 查看正在运行的容器 docker ps
- 查看所有的容器 docker ps -a
- 创建并启动容器 docker run -it --name=mycentos7 centos /bin/bash
    - 参数说明: 
    > -i 表示运行容器 <br/>
    > -t 表示启动容器后会进入命令行 容器创建就能进去 分配一个伪终端 <br/>
    > -v 目录映射 最好做目录映射 在宿主机上做修改 然后共享到容器上
    > -d 创建守护式容器在后台运行
    > -p 表示端口映射 
- 交互式容器 docker run -it --name=mycentos7 centos /bin/bash
    - 已交互式方式创建并启动容器 启动完成后 直接进入当前容器 
    - 注意:
    > 使用 exit 命令退出 注意: 此容器退出 容器就进入 停止状态
- 守护式容器 : 可以在后台运行
    - 创建并启动  docker run -id --name=mycentos2 centos
    - 容器启动后再进入 docker exec -it mycentos2(或者id) /bin/bash
    - 注意
    > 守护式容器启动后会在后台一直运行 执行 exit 命令退出 也不会停止容器

### 容器的操作
- 停止容器 docker stop 名称(|id)
- 启动容器 docker start 名称(|id)
- 文件拷贝 

