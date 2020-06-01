### 1. 路由传参:

- 编程式的导航  router.push

  ```js
  this.$router.push("home");
  this.$router.push({ name: 'news', params: { userId: 123 }}) // 传递
  this.$route.params.userId   // 获取
  this.$router.push({path: '/transport/dispatch', query: {paicheNo: obj.paicheNo}}) // 传递
  this.$route.query.paicheNo  // 获取
  ```

- 声明式的导航  <router-link>  一样

  ```
   <router-link 
       tag="li"  // 渲染为 li标签  默认是 a标签
       :to="{name:'city',query:{id:item.id},params:{cityName:item.name}}">
          {{item.name}}
    </router-link>
  ```

-  总结 :  
  - name方式 可以用 query  和 params
  - path方式  只能用 query
  - 命名路由搭配 params，刷新页面参数会丢失
  - 查询参数搭配query，刷新页面数据不会丢失**

### 2. 关于 hash 和 history 模式的区别
- hash模式url带#号 兼容性好，history模式不带#号 是h5的新API
- history模式的优势
  - 没有# url比较规范 用户看着舒服
  - 我们用vue 或者 react做的页面 分享到其他的app中 但是app中不允许 url 中带有 # 
  - 注意 : history 不怕前进 不怕后退 怕刷新  在访问了二级页面的时候 做刷新操作 就会出现 404 需要后端配置下 apache或者nginx的url重定向 定向到我们的首页
- history 模式的原理
  - H5新推出的两个神器：pushState与replaceState
  - 作用就是将url替换且不刷新，好比挂羊头卖狗肉，http并没有去请求服务器该路径下的资源，一旦刷新就会暴露这个实际不存在的“羊头”，显示404。
  - 如何解决404弊端，这就需要服务器端做点手脚，将不存在的路径请求重定向到入口文件（index.html)
- hash 模式原理
  - window是可以监听到哈希值的变化的（onhashchage事件），这就意味着：当url中的哈希值发生了变化，无需发起http请求，window也可以监听到这种变化，并按需加载前端的代码块
- 最后补充
  - history 模式下 build之后在本地打开index.html是无效的 hash模式则可以打开

### 3. 命名视图
- 要实现同级展示多个视图 而不是嵌套的关系 就需要命名视图了
  - 一个组件中准备了三个出口
    ```
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
    ```
  - 对于同一个路由 一个视图出口需要一个组件渲染 三个出口就需要三个 下边是具体的配置 注意 components (此时是要加s的)
    ```
    const router = new VueRouter({
      routes: [
        {
          path: '/',
          components: {
            default: Foo,
            a: Bar,
            b: Baz
          }
        }
      ]
    }) 
    ```

### 4. 重定向 
- 重定向也是通过routes 配置来完成的 下边的例子是从 /a 重定向到 /b
  ```
  const router = new VueRouter({
    routes: [
      {path: '/a', redirect: '/b'}
    ]
  })
  ```
- 重定向的目标也可以是一个命名的路由
  ```
  const router = new VueRouter({
    routes: [
      {path: '/a', redirect: {name: 'foo'}}
    ]
  })
  ```
- 甚至是一个 function 动态的return从定向的目标
  ```
  const router = new VueRouter({
    routes: [
      {path: '/a', redirect: to => {
        // 方法接收目标路由作为参数
        // return 重定向饿 字符串路径或路径对象都可以
      }}
    ]
  })
  ```

### 5. 别名
- “重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b
- “别名”的意思是，  当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /a
```
const router = new VueRouter({
  routes: [
    {path: '/a', component: Foo, alias: '/b'}
  ]
})

```
### 6. 路由守卫
#### 1. 完整的导航解析流程
- 导航被触发了
- 在失活的组件中调用离开守卫  (beforeRouteLeave)
- 调用全局的 beforeEach 守卫
- 在重用的组件中调用 beforeRouterUpdate 守卫(2.2+)
- 在路由配置中调用 beforeEnter
- 解析异步路由组件
- 在被激活的组件里调用 beforeRouterEnter
- 调用全局的 beforeResolve 守卫(2.5+)
- 导航被确认
- 调用全局的 afterEach 钩子
- 触发 DOM 更新
- 用创建好的实例调用 beforeRouterEnter 守卫中传递给 next 的回调函数
#### 2. 三种守卫(全局的守卫, 路由独享的守卫, 组件内的守卫)的具体配置
- 全局前置守卫
  ```
  const router = new VueRouter({....})
  router.beforEach((to, from, next) => {
    // to 即将进入的目标路由对象
    // from 当前导航正要离开的 路由对象
    // next 是一个 function 必须要调用一下 next()  
  })
  ```
- 全局解析守卫
  ```
  router.beforeResolve((to, from) => {
    // 
  })
  ```
- 全局后置守卫
  ```
  router.afterEach((to, from) => {
    // 此时没有了 next 函数
  })
  ```
- 路由独享的守卫
  ```
  const router = new VueRouter({
    routes: [
      {
        path: 'foo',
        component: Foo,
        beforeEnter: (to, from, next) => {

        }
      }
    ]
  })
  ```
- 组件内的守卫 (定义的位置和组件的生命周期平级)
  ```
  const Foo = {
    template: `...`,

    beforeRouterEnter (to, from, next) {
      // 在组件的对应路由被 confirm 前调用
      // 不能获取 组件的 this 因为当此守卫执行时 组件实例还没有创建   下方法可以访问组件实例  
      next(vm => {
        // 通过 vm 访问组件的实例 
      })
    },

    beforeRouterUpdate (to, from, next) {
      // 当前路由改变 但是该组件被复用时 调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件的 this
    },

    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
    }
  }
  ```















