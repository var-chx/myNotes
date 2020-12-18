# VUE 插件用法总结
## 使用场景
- 插件通常用来为 vue 添加全局的功能, 插件的功能范围没有严格的限制, 一般有以下场景:
    - 添加全局方法或者 property。如：vue-custom-element
    - 添加全局资源：指令/过滤器/过渡等。如 vue-touch
    - 通过全局混入来添加一些组件选项。如 vue-router
    - 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
    - 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router

## 使用插件
```js
// 这样就会调用 MyPlugin.install(Vue)
Vue.use(myPlugin)  // 注意: 要在 new Vue 之前完成

new Vue({
    // ....
})

```

## 开发插件
```js
// abc.js

export default {
    install () {
        // 添加全局方法
        Vue.myGlobalMethod = () => {
            // todo
        }

        // 添加全局资源
        Vue.direction('my-direction', {
            bind () {
                // todo
            }
        })

        // 注入组件选项
        Vue.mixin({
            data () {
                return {
                    abd: 123,
                }
            },
            created () {
                // todo
            }
        })

        // 添加实例方法
        Vue.protptype.$myMethod = () => {
            // todo something
        }
    }
}
```

## 字典插件

```js
// Dict/Resouse.js

const insuranceType = {
    0: '守护C',
    1: 'I保C',
}

export default {
    insuranceType
}
// Dict/Dict.js

import Vue from 'vue'
import resourse from './Resourse'

export default class Dict {
    constructor (dirt) {
        this.dict = dirt
    }

    init (names) {
        if(names === undefined || names === null) {
            throw new Error('need a names')
        }
        names.forEach(item => {
            Vue.set(this.dict, item, resourse[intm])
        })
    }
}

// Dict/index.js

import Dict from './Dict'

export default {
    install (Vue) {
        Vue.mixin({
            data () {
                return {
                    dict: {}
                }
            },
            created () {
                if (this.$options.dicts instanceof Array) {
                    new Dict(this.dict).init(this.$options.dicts)
                }
            }
        })
    }
}

// main.js
 import dict from './Dict'

 Vue.use(dict)

// XXX.vue

<template>

<div>{{dict.insuranceType['0']}}</div>
<div>{{dict.insuranceType['1']}}</div>

</template>

<script>
export default {
    dicts: ['insuranceType']
}
</script>
```