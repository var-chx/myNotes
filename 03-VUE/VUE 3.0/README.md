# VUE 3.0

## 1. Vue 3.0 新特性介绍
### 1.1 Vue 3.0 现状
- 版本说明:
    - Alpha(阿尔法) 版表示内部测试版 一般不对外发布 bug比较多
    - Beta(贝塔) 版表示公开测试版 该版本依然存在很多bug 而且还会添加新功能
    - Rc (Release Candidate)版 发行候选版本 不再添加新功能, 主要是修复 bug
    - Release 版 正式发布版 官方推荐的版本
- 2020.01.04 vue发布 3.0 alpha版
- 2020.04.17 vue发布 3.0 beta版
- 2020.07.18 vue发布 3.0 rc-1版
- 2020.09.18 vue发布 v3.0.0 One Piece
- 目前最新版  v3.0.2
- https://github.com/vuejs/vue-next/releases

### 1.2 Vue 3.0 新特性
- 响应式数据重新实现(使用ES6的proxy 代替了 Object.defineProperty)
- 源码使用 ts进行重构(更好的类型推导)
- 虚拟DOM新算法(更快 更小)
- 提供了composition api 为了更好的逻辑复用和代码组织
- 自定义渲染器(可以根据需求自定义各种各样的渲染器)
    - APP端
    - 小程序端
    - 游戏开发
- Fragment, 模板可以有多个根元素
- 等等...
### 1.3 官网
- Vue 3.0 官网: https://v3.vuejs.org/
- Composition api 官网: https://composition-api.vuejs.org/zh/

## 2. Vue 2.0 和 3.0 响应式原理的对比
### 2.1 Vue 2.0 响应式原理 
- Vue 2.0 中使用 Object.defineProperty 方法实现数据的响应
```js
var o = {} 
    
// 给 o 提供属性
o.name = '张三'

// 等价于
Object.defineProperty( o, 'name', {
    configurable: true, // 可配置  如果 false 定义 defineProperty 是无效的
    writable: true, // 可以改
    enumerable: true, // 控制属性是否可枚举, 是不是可以被 for-in 取出来 比如对象中的 __proto__ 就是灰色的不能遍历出来 就是设置了 enumerable = false
    value: 张三,
    set() {},  赋值触发
    get() {}   取值触发
} )
```
- 缺点
    - 无法监测到对象属性的动态添加和删除
    - 无法监测到数组下标和length属性的变化
- 解决方法
    - Vue.set()
    - Vue.delete()
    - 重写vue中数组的方法 'push 等等'

### 2.2 Vue 3.0 中响应式的原理
- Vue 3.0 中使用ES6中的 proxy语法 实现数据的响应
- 优点
    - 可以监测到对象属性的动态添加和删除
    - 可以监测到数组下标和length属性的变化
- 缺点
    - 对低版本不支持 IE 11
    - vue 3.0 会出一个针对 IE 11 的特殊版本来支持 
- Vue 3.0 中使用 proxy 方法实现数据的响应
```js
var target = {
   name: 'poetries'
}
var logHandler = {
    get: function(target, key) {
        console.log(`${key} 被读取`)
        return target[key]
    },
    set: function(target, key, value) {
        console.log(`${key} 被设置为 ${value}`)
        target[key] = value
    },
    deleteProperty(targer, key) {
        console.log(`监测到删除${key}`)
        return delete target[key]
    }
}
 var targetWithLog = new Proxy(target, logHandler)
 
 targetWithLog.name // 控制台输出：name 被读取
 targetWithLog.name = 'others' // 控制台输出：name 被设置为 others
 
 console.log(target.name) // 控制台输出: others
``` 

## 3. 创建 3.0 项目
### 3.1 用最新的脚手架 直接创建  第一步会让你选 创建 vue 2 还是 3  的项目
```sh
# 升级最新的脚手架

sudo npm update -g @vue/cli
vue -V
vue create hello-vue3
# select vue 3 preset

```
### 3.2 使用 vite

> 1. Vite 是一个由原生 ESM(ES6标准的模块化规范) 驱动的 web开发构建工具 在开发环境下基于浏览器原生 ES imports 开发 在生产环境下基于 Eollup 打包
> 2. Vite 目前仅支持 vue 3.0 项目 不支持 2.0
> 3. Vite 基本使用
```sh

npm init vite hello-vue3 
# OR yarn create vite-app hello-vue3

cd hello-vue3
npm i

```
> 4. [有了Vite , 还需要 webpack吗?](https://zhuanlan.zhihu.com/p/150083887)

## Composition API 的使用






