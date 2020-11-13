# Vue的MVVM实现原理

## 1. 简单理解
- Model-View-ViewModel 的缩写, Model 代表数据模型, View 代表 UI 组件, ViewModel 就是将 View 和 Model 关联起来
- 数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据

## 2. 几种实现双向绑定的做法
- 目前几种主流的mvc(vm)框架都实现了单向数据绑定，
- 双向数据绑定无非就是在单向绑定的基础上给可输入元素（input、textare等）添加了change(input)事件，来动态修改model和 view，并没有多高深。

## 3. 实现数据绑定的做法有大致如下几种：
- 发布者-订阅者模式（backbone.js: 是一种重量级javascript  MVC 应用框架）

- 脏值检查（angular.js）

- 数据劫持（vue.js）

### 3.1 发布者-订阅者模式: 
- 一般通过sub, pub的方式实现数据和视图的绑定监听，更新数据方式通常做法是 vm.set('property', value)，这里有篇文章讲的比较详细，有兴趣可点[这里](http://www.html-js.com/article/Study-of-twoway-data-binding-JavaScript-talk-about-JavaScript-every-day)
- 这种方式现在毕竟太low了，我们更希望通过 vm.property = value这种方式更新数据，同时自动更新视图，于是有了下面两种方式

### 3.2 脏值检查:
- angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 setInterval() 定时轮询检测数据变动，当然Google不会这么low，angular只有在指定的事件触发时进入脏值检测，大致如下：
    - DOM事件，譬如用户输入文本，点击按钮等。( ng-click )
    - XHR响应事件 ( $http )
    - 浏览器Location变更事件 ( $location )
    - Timer事件( interval )
    - 执行 digest() 或apply()

### 3.3 数据劫持: 
- vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，
- 通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

## 4. MVVM原理
- Vue响应式原理最核心的方法便是通过Object.defineProperty()来实现对属性的劫持，达到监听数据变动的目的，
- 要实现mvvm的双向绑定，就必须要实现以下几点：
    1. 实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
    2. 实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
    3. 实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图
    4. mvvm入口函数，整合以上三者

    ![Image](../assets/数据劫持-发布订阅者.jpg)

