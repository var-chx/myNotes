# VUE 指令用法总结

## 1. VUE 指令用法
- 指令一般用于对 DOM 元素进行直接操作
- vue 提供很多指令: v-text; v-html; v-bind; v-model; v-if; v-show;

## 2. 指令的定义形式
```js
//  注册一个全局自定义指令
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时...
    inserted: (el) => {
        el.focus()
    }
})
```

## 3. 指令的钩子函数 
```js
bind: 首次绑定执行 用于初始化;
inserted: 被绑定的元素插入父节点的时候调用, 仅保证父节点存在, 不一定已被插入文档;
update: 组件 vnode 更新时, 可能在其子组件更新前;
componentUpdated: 组件Vnode及其子子组件都更新后调用
unbind: 解绑是调用
```

## 4. 指令参数
```js
el: 绑定的元素
binding: 绑定对象, 包含参数, value 和 oldValue
vonde: 当前虚拟节点
oldVnode: 上一个虚拟节点, 仅在 update 和 componentUpdate 钩子可用
```

## 5. 指令的使用场景

### 5.1 v-copy 指令复制元素里边的内容


- 基本原理:
    - 1. 在bind后给元素一个 click 事件
    - 2. 在click 事件中, 插入一个不显示的 textarea, 选中该 textarea
    - 3. 使用 execCommand 执行 copy 命令, 复制 textarea 内容到剪切板
        ```js
        <script type="text/javascript">
        function copyUrl2()
        {
        var Url2=document.getElementById("biao1");
        Url2.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        alert("已复制好，可贴粘。");
        }
        </script>
        <textarea cols="20" rows="10" id="biao1">用户定义的代码区域</textarea>
        <input type="button" onClick="copyUrl2()" value="点击复制代码" />
        ```
    - 4. 移除该 textarea 
```js
// v-copy.js
import { Message } from 'ant-design-vue';
 
const vCopy = { // 名字爱取啥取啥
 /*
  bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
  el: 作用的 dom 对象
  value: 传给指令的值，也就是我们要 copy 的值
 */
 bind(el, { value }) {
  el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到
  el.handler = () => {
   if (!el.$value) {
   // 值为空的时候，给出提示，我这里的提示是用的 ant-design-vue 的提示，你们随意
    Message.warning('无复制内容');
    return;
   }
   // 动态创建 textarea 标签
   const textarea = document.createElement('textarea');
   // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
   textarea.readOnly = 'readonly';
   textarea.style.position = 'absolute';
   textarea.style.left = '-9999px';
   // 将要 copy 的值赋给 textarea 标签的 value 属性
   textarea.value = el.$value;
   // 将 textarea 插入到 body 中
   document.body.appendChild(textarea);
   // 选中值并复制
   textarea.select();
   textarea.setSelectionRange(0, textarea.value.length);
   const result = document.execCommand('Copy');
   if (result) {
    Message.success('复制成功');
   }
   document.body.removeChild(textarea);
  };
  // 绑定点击事件，就是所谓的一键 copy 啦
  el.addEventListener('click', el.handler);
 },
 // 当传进来的值更新的时候触发
 componentUpdated(el, { value }) {
  el.$value = value;
 },
 // 指令与元素解绑的时候，移除事件绑定
 unbind(el) {
  el.removeEventListener('click', el.handler);
 },
};
export default vCopy;
```

### 5.2 v-auth 控制按钮的可见性
- 基本原理
    - 在 inserted 钩子函数中, 判断是否有权限, 没有权限 则移除
    ```js
    export default {
        inserted (el, binding, vnode) {
            const { value } = binding
            const roles = store.getters && store.getters.roles
            if (Array.isArray(value) && value.length > 0) {
                const permissionRoles = value
                cosnt hasPermission = role.some(role => {
                    return permissionRoles.includes(role)
                })
            }
            // 没有权限 就自杀
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        }
    }
    ```

## 6. 把指令注册到全局(插件的形式)
```js
// directives.js
import copy from './v-copy'
const directives = {
    copy,
}
export default {
    install (Vue) {
        Object.keys(directives).forEach(key => {
            Vue.directive(key, directives[key])
        })
    }
}
```
```js
// 在 main.js 中引入
import Directives from './directives'
Vue.use(Directives)
```

## 7. 把指令注册到局部
```js
directives: {
    copy: {
        inserted: (el) {
            el.focus()
        }
    }
}
```

## 8. 在组件中使用
```js
<template>
 <button v-copy="copyText">copy</button>
</template>
 
<script>
export default {
 data() {
  return {
   copyText: '要 Copy 的内容',
  };
 },
};
</script>
```
```js
<template>
 <button v-copy="arr">copy</button>
</template>
 
<script>
export default {
 data() {
  return {
   arr: ['admin', 'master', 'user' ],
  };
 },
};
```

## 9. 常用的第三方指令(滚动指令)

- 仓库地址: https://github.com/rigor789/vue-scrollTo
- Demo: https://vue-scrollto.netlify.com/
- 安装:  npm install --save vue-scrollto 

- 这个指令监听元素的点击事件，然后滚动到指定位置。我通常用来处理文章目录跳转和导航跳转。
```js
<span v-scroll-to="{
  el: '#element',          // 滚动的目标位置元素
  container: '#container', // 可滚动的容器元素
  duration: 500,           // 滚动动效持续时长（毫秒）
  easing: 'linear'         // 动画曲线
  }"
>
  Scroll to #element by clicking here
</span>
```

## 10. 常用的第三方指令(图片懒加载)
- 仓库地址: https://github.com/hilongjw/vue-lazyload
- Demo: http://hilongjw.github.io/vue-lazyload/
- 安装:  npm install --save vue-lazyload 
- 图片懒加载，非常方便。
```js
<img v-lazy="https://www.domain.com/image.jpg">
```

## 11.输入框防抖
```js
// 1.设置v-throttle自定义指令
Vue.directive('throttle', {
  bind: (el, binding) => {
    let throttleTime = binding.value; // 防抖时间
    if (!throttleTime) { // 用户若不设置防抖时间，则默认2s
      throttleTime = 2000;
    }
    let cbFun;
    el.addEventListener('click', event => {
      if (!cbFun) { // 第一次执行
        cbFun = setTimeout(() => {
          cbFun = null;
        }, throttleTime);
      } else {
        event && event.stopImmediatePropagation();
      }
    }, true);
  },
});
// 2.为button标签设置v-throttle自定义指令
<button @click="sayHello" v-throttle>提交</button>
```



参考: 
- [很实用的Vue自定义指令](https://www.cnblogs.com/tuspring/p/12169978.html)





