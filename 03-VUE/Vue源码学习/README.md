# VUE 源码解读

## 写在前面

- 要看一个项目的源码 不要 一上来就看 先去了解一下项目本身的元数据和依赖 特别是前端的开源项目 一个要看的就是 package.json 文件 了解了以后 如果有依赖 npm install 就 ok

## 一些概念

### VUE 2.0 和 3.0的区别
- 核心思想没有变化(响应式原理 设计思想) 主要是一些js的高级语法 让一些写法更加简洁 但本质是相同的
- Vue3.x改用Proxy替代Object.defineProperty。
- 因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法。并且作为新标准将受到浏览器厂商重点持续的性能优化。
- Proxy 与 Object.defineProperty 优劣对比 
    - Proxy 的优势如下:
        - Proxy 可以直接监听对象而非属性；
        - Proxy 可以直接监听数组的变化
        - Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
        - Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
        - Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
    - Object.defineProperty 的优势如下:
        - 兼容性好 支持IE9  而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill
### MVVM 理解
- Model-View-ViewModel 的缩写, Model 代表数据模型, View 代表 UI 组件, ViewModel 就是将 View 和 Model 关联起来
- 数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据

### 响应式数据原理
- Vue 数据双向绑定主要是指：数据变化更新视图，视图变化更新数据。其中，View变化更新Data，可以通过事件监听(input textare事件)的方式来实现，所以 Vue数据双向绑定的工作主要是如何根据Data变化更新View。
- 简述：
    - 当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。
    - 这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。
    - 每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。
- 深入理解: 
    - 监听器 Observer：对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
    - 解析器 Compile：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
    - 订阅者 Watcher：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 - - watcher 重新计算，从而致使它关联的组件得以更新——这是一个典型的观察者模式
    - 订阅器 Dep：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher(订阅者来自wathert 存在 Dep中)，对监听器 Observer 和 订阅者 Watcher 进行统一管理(Observer通知变化给 Dep, Dep 再通知 Watcher 去更新视图)。

    ![Image](./assets/数据劫持-发布订阅者.jpg)

### 项目目录结构(大佬们都说VUE的结构很漂亮)
 ```
├── build --------------------------------- 构建相关的文件，一般情况下我们不需要动
├── dist ---------------------------------- 构建后文件的输出目录
├── examples ------------------------------ 存放一些使用Vue开发的应用案例
├── flow ---------------------------------- 类型声明，使用开源项目 [Flow](https://flowtype.org/)
├── package.json -------------------------- 不解释
├── test ---------------------------------- 包含所有测试文件
├── src ----------------------------------- 这个是我们最应该关注的目录，包含了源码
│   ├── entries --------------------------- 包含了不同的构建或包的入口文件
│   │   ├── web-runtime.js ---------------- 运行时构建的入口，输出 dist/vue.common.js 文件，不包含模板(template)到render函数的编译器，所以不支持 `template` 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意
│   │   ├── web-runtime-with-compiler.js -- 独立构建版本的入口，输出 dist/vue.js，它包含模板(template)到render函数的编译器
│   │   ├── web-compiler.js --------------- vue-template-compiler 包的入口文件
│   │   ├── web-server-renderer.js -------- vue-server-renderer 包的入口文件
│   ├── compiler -------------------------- 编译器代码的存放目录，将 template 编译为 render 函数
│   │   ├── parser ------------------------ 存放将模板字符串转换成元素抽象语法树的代码
│   │   ├── codegen ----------------------- 存放从抽象语法树(AST)生成render函数的代码
│   │   ├── optimizer.js ------------------ 分析静态树，优化vdom渲染
│   ├── core ------------------------------ 存放通用的，平台无关的代码
│   │   ├── observer ---------------------- 反应系统，包含数据观测的核心代码
│   │   ├── vdom -------------------------- 包含虚拟DOM创建(creation)和打补丁(patching)的代码
│   │   ├── instance ---------------------- 包含Vue构造函数设计相关的代码
│   │   ├── global-api -------------------- 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码
│   │   ├── components -------------------- 包含抽象出来的通用组件
│   ├── server ---------------------------- 包含服务端渲染(server-side rendering)的相关代码
│   ├── platforms ------------------------- 包含平台特有的相关代码
│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包 (和 vue cli 相关)
│   ├── shared ---------------------------- 包含整个代码库通用的代码
 ```

 ### 关于虚拟DOM

- 简单理解: VUE 中数据状态的改变后会采用 virtual DOM 的方式更新 DOM 简单分为三个步骤
1. createElement(): 用 JavaScript对象(虚拟树) 描述 真实DOM对象(真实树)
2. diff(oldNode, newNode) : 对比新旧两个虚拟树的区别，收集差异
3. patch() : 将差异应用到真实DOM树
- 目的
1. 提升性能(频繁的操作dom浪费性能 先统一在内存处理虚拟dom 最后统一更新)

- 真实DOM => virtual DOM 
```js
<div title="1" class="c">
    你好
    <p></p>
</div>
==> 
{ tag: 'div',
  data: {
    titel: '1',
    class: 'c',
  }, 
  value: '你好',
  children: [ // 数组可以是多个
    {tag: 'p'}
  ]
}
```
- 相互转换
    - 思想和深拷贝类似 深度遍历(递归 while循环) 
    - 递归遍历DOM 生成 virtaul DOM 
    - 递归遍历 virtaul DOM 生成 DOM
    - Vue 的源码中使用的是 栈结构 使用栈存储父元素来实现递归生成 这个操作功能和递归完全一样 
        - Vue 为什么这样用:
        1. 是 vue 解析的是字符串 
        2. vue 中 是把 dom 转换成字符串 
        3. 利用语法解析  解析成抽象语法树(AST) 然后在生成 virtaul DOM 

### 函数柯里化
- 定义
    - 柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
- 目的
    缓存一些内容 减少解析
- 实用性体现
    - 提高适用性 (减少反复的相同传参: 模板固定 数据经常改变)
    - 延迟执行 (不断的柯里化，累积传入的参数，最后执行)
    - 固定易变因素(我们经常使用的函数的bind方法就是一个固定易变因素的很好的例子)
- 性能
    - 实用柯里化意味着一些额外的开销(函数参数的调用, 产生大量的闭包) 但是 web 应用的性能瓶颈主要在操作DOM(浏览器需要不断去渲染刷新 往页面加一个东西 改一个东西 删一个东西 需要操作dom树 操作完了 浏览器要去刷新重绘 很消耗性能)上 所以.....
- 举例
    - Vue 本质上是使用 HTML 的字符串作为模板的, 将字符串的 模板 转换为 AST, 再转换为 VNode.
        - 模板 -> AST (最消耗性能: 对字符串进行了解析)
        - AST -> VNode
        - VNode -> DOM
        - 所以: 将 vNode 缓存起来, 生成一个函数, 函数只需要传入数据 就可以得到 真正的 DOM
- 拓展概念
    1. 科里化: 一个函数原本有多个参数, 只传入**一个**参数, 生成一个新函数, 由新函数接收剩下的参数来运行得到结构.
    2. 偏函数: 一个函数原本有多个参数, 只传入**一部分**参数, 生成一个新函数, 由新函数接收剩下的参数来运行得到结构.
    3. 高阶函数: 一个函数**参数是一个函数**, 该函数对参数这个函数进行加工, 得到一个函数, 这个加工用的函数就是高阶函数.
- 字符串操作拓展(为什么操作字符串消耗性能) <br/>
    例子: let s = "1 + 2 * ( 3 + 4 * ( 5 + 6 ) )" <br/>
    写一个程序, 解析这个表达式, 得到结果 ( 一般化 ) <br/>
    我们一般会将这个表达式转换为 "波兰式" 表达式, 然后使用栈结构来运算 

### diff 算法的简单理解
- 本质
    - diff算法的本质是找出两个对象之间的差异，目的是尽可能复用节点。
- 理解vue更新视图过程
    1. 页面DOM 和 VDOM(old) 是一一对应的
    2. VUE中每次改变数据的时候 都会生成一个 新的 VDOM(new)
    3. old 和 new 的对比 用到的 就是 diff 算法(发现相同的忽略, 不同的就更新到 old 上, 同时页面DOM也更新了)
- 简单理解Vue中的diff
    - 需要经历两次遍历 
        - 先遍历old的所有属性看 new 中有没有这个值 有的话 如果不同 更新下 ; 没有  就从old 删除
        - 再遍历 new 看 old 中 没有的 就加到 old
- 为什么不直接不用 diff算法  直接 new 替换 old
    1. VDOM 和 DOM 都是引用类型的 而且他们是 tree 和 tree 的一一对应关系 直接替换 就要涉及树的递归遍历访问 很消耗性能
    2. diff 时 如果是静态属性 就直接跳过 有可变值的才对比(为了减少循环递归的行为)
- 使用了 二次提交的思想
    - 生成新VDOM 一次
    - 比较一次
    - 最后更新
- 拓展概念
    1. 二阶段提交（Two-phase Commit):为了使基于分布式系统架构下的所有节点在进行事务提交时保持一致性而设计的一种算法(银行 A账户给B账号转钱 案例 )

### 响应式原理
- 本质
    在给对象赋值和读取的时候 附带的要做一些事情
- 关键的 Object.defineProperty 实现响应式
```js
var o = {}; 
    
// 给 o 提供属性
o.name = '张三';

// 等价于
Object.defineProperty( o, 'name', {
    configurable: true, // 可配置  如果 false 定义 defineProperty 是无效的
    writable: true, // 可以改
    enumerable: true, // 控制属性是否可枚举, 是不是可以被 for-in 取出来 比如对象中的 __proto__ 就是灰色的不能遍历出来 就是设置了 enumerable = false
    value: 张三,
    set() {},  赋值触发
    get() {}   取值触发
} );


// 将对象简化为响应式简化版本

let obj = {
    name: 'jim',
    age: 18,
    gender: '男'
}
function defineReactive (target, key, val) { 
    // 函数内部就是一个局部作用域, 这个 value 就只在函数内使用的变量 ( 闭包 )
    Object.defineProperty(target, key, {
        configurable: true,
        enumerable: true,
        get () {
            console.log(`读取 obj 的${key}`)
            return val
        },
        set (newVal) {
            console.log(`设置 obj 的 ${key}, 值为${newVal}`)
            val = newVal
        }
    })
}
Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
})


```

### 函数的拦截 (在函数原有的基础上增加额外的操作 拓展数组的 push pop...)

```js
// 这个就是在函数原有的基础上增加额外的操作: 函数的拦截
// 1. 使用一个临时的函数名存储函数
// 2. 重新定义原来的函数
// 3. 定义扩展的功能
// 4. 调用临时的那个函数

function func() {
    console.log( '原始的功能' );
}

// 1
let _tmpFn = func;

// 2
func = function () {
    // 4
    _tmpFn();

    // 3
    console.log( '新的扩展的功能' );

};


func(); // 1. 打印出 原始的功能
        // 2. 打印出 新的扩展功能
// 一定要克制，函数拦截侵入太强，使用不当或者过度使用，会导致问题很难追踪，另外代码阅读体验很差！！！
```

### 关于Vue 中的 proxy

```js
app._data.name
// vue 设计, 不希望访问 _ 开头的数据
// vue 中有一个潜规则:
//  - _ 开头的数据是私有数据
//  - $ 开头的是只读数据
app.name
// 将 对 _data.xxx 的访问 交给了 实例

// 重点: 访问 app 的 xxx 就是在访问 app._data.xxx
```

假设:

```js
var  o1 = { name: '张三' };
// 要有一个对象 o2, 在访问 o2.name 的时候想要访问的是 o1.name
Object.defineProperty( o2, 'name', {
  get() {
    return o1.name
  }
} );
```

问题: 

在 vue 中不仅仅是只有 data 属性, properties 等等 都会挂载到 Vue 实例上

```js
function proxy( app, prop, key ) {
  Object.defineProperty( app, key, {
    get() {
      return app[ prop ][ key ]
    },
    set( newVal ) {
      app[ prop ][ key ] = newVal;
    }
  } )
};

// 如果将 _data 的成员映射到 实例上
proxy( 实例, '_data', 属性名 )
// 如果要 _properties 的成员映射到 实例上
proxy( 实例, '_properties', 属性名 )
```

### 发布订阅模式(实质就是事件模型)

1. 中间的**全局的容器**, 用来**存储**可以被触发的东西( 函数, 对象 )
2. 需要一个方法, 可以往容器中**传入**东西 ( 函数, 对象 )
3. 需要一个方法, 可以将容器中的东西取出来**使用**( 函数调用, 对象的方法调用 )

#### Vue 模型

页面中的变更 ( diff ) 是一组件为单位
- 每个组件都是有之计的 watcher , 读取的时候 调用 depend 方法 存储到全局的 watcher 中 (栈 数组)
- 如果页面中只有一个组件 ( Vue 实例 ), 不会有性能损失
- 但是如果页面中有多个组件 ( 多 watcher 的一种情况 ), 第一次会有 多个组件的 watcher 存入到 全局watcher 中.
  - 如果修改了局部的数据( 例如其中一个组件的数据 )
  - 表示只会对该组件进行 diff 算法, 也就是说只会重新生成该组件的 抽象语法树
  - 只会访问该组件的 watcher
  - 也就表示再次往全局存储的只有该组件的 watcher
  - 页面更新的时候也就只需要更新一部分
- 1. 读取 将 watcher 存入全局容器 被称为 依赖收集
- 2. 修改时 将全局容器中的 watcher 取出执行, 被称为 派发更新

### Vue 中的 watcher 构造函数

Watcher 会有一些方法: 

- get() 用来进行**计算**或**执行**处理函数(组件中的 compintant 和 watcher)
- update() 公共的外部方法, 外部使用都调用该方法 该方法会触发内部的 run 方法
- run() 运行, 用来判断内部是使用异步运行(浏览器)还是同步运行(服务端渲染)等, 这个方法最终会调用内部的 get 方法
- cleanupDep() 简单理解为清除队列

### 对数组去重

```js

let arr = [ 1, 1, 1, 2, 2, 3, 3, 3 ]; // => [ 1, 2, 3 ]

// 一般的做法
// let newarr = [];
// arr.forEach( v => newarr.indexOf( v ) === -1 && newarr.push( v ) ); // indexOf 原本隐含着循环

// 利用 集合 来简化实现 ( ES6 Set )
let _set = {};
let _newarr = [];
arr.forEach( v => _set[ v ] || ( _set[ v ] = true, _newarr.push( v ) ) ) // 减少赋值行为
// Object.kyes( _set ) // 获得去重后的数组

// { 1: true }
// { 1: true, 2: true }

// 在网络中有一个终极的算法, 就是如何 "判同"

```





### Vue 的使用步骤

- 编写页面模板
    - 直接在HTMl标签中写标签
    - 使用 template
    - 使用单文件
- 创建 Vue 的实例
    - 在 vue 的构造函数中提供了 data methods computed watcher props ...
- 将 Vue 挂载到 页面上

### 数据驱动模型

- Vue 的执行流程
    - 获得模板 模板中有坑
    - 利用Vue 构造函数中提供的数据来填坑 
- Vue 所做的事情 就是 利用我们提供的数据 和 页面中提供的模板 生成了几个新的 node元素 替换了页面中放置模板的位置



## 参考
+ [Vue2.1.7源码学习](http://hcysun.me/2017/03/03/Vue%E6%BA%90%E7%A0%81%E5%AD%A6%E4%B9%A0/)
+ [前端基础进阶系列](https://www.jianshu.com/p/cd3fee40ef59)
+ [函数式编程](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)






