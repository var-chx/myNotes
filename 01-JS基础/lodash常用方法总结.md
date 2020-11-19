# lodash

## 1. 简介
- Lodash是一个著名的javascript原生库，不需要引入其他第三方依赖。
- 是一个意在提高开发者效率,提高JS原生方法性能的JS库。
- 简单的说就是，很多方法lodash已经帮你写好了，直接调用就行，不用自己费尽心思去写了，而且可以统一方法的一致性。
- Lodash使用了一个简单的 _ 符号，就像Jquery的 $ 一样，十分简洁。
- 类似的还有Underscore.js和Lazy.js

## 2. 支持
- 兼容性好(几乎涵盖现在市面上可以见到的大部分浏览器)
    - chrome 43往上
    - Firefox 38往上
    - IE 6-11
    - MS Edge
    - Safari 5往上

## 3. 安装
```js
<script src="lodash.js"></script> 直接下载下来引入，或者使用cdn
```
```sh
npm i --save lodash
```

## 4. node 中使用
```js
var _ = require('lodash')

// 循环5次
_.times(5,function(a){
        console.log(a);
});

```

## 5. vue 中使用单文件中使用
```js
import _ form 'lodash'
export default {
  methods: {
    throttledMethod: _.throttle(() => {
      console.log('I get fired every two seconds!')
    }, 2000)
  }

```

## 6. 常用方法
- 6.1 深度拷贝
```js
let obj = {
    a: 1, 
    b: 2,
    c: {
        c1: 3,
        c2: function () {
            console.log('拷贝到我才算是深度拷贝')
        }
    }
}
var _ = require('lodash')
const obj0 = _.cloneDeep(obj)
```

- 6.2 深层查找属性
```js
let ownerArr = [{
    owner: 'Colin',
    pets: [{name: 'dog'}, {name: 'cat'}]
}, {
    owner: 'John',
    pets: [{name: 'chick'}, {name: 'peer'}]
}]

```

- 6.3 防抖函数(debounce): 触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间(输入框使用)
```js

<template>
  <button @click="throttledMethod()">Click me as fast as you can!</button>
</template>
 
<script>
import _ from 'lodash'
 
export default {
  methods: {
    throttledMethod: _.debounce(() => {
      console.log('I only get fired once every two seconds, max!')
    }, 2000)
  }
}
</script>

```

- 6.4 节流函数(thorttle)高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率(滚动到底部使用)
```JS
<template>
  <button @click="throttledMethod()">Click me as fast as you can!</button>
</template>
 
<script>
import _ from 'lodash'
 
export default {
  methods: {
    throttledMethod: _.throttle(() => {
      console.log('I get fired every two seconds!')
    }, 2000)
  }
}
</script>
```
