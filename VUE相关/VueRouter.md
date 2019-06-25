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

