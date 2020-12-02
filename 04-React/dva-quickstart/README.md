# 关于 Dva 的总结
### 1. 路由的使用

```js
import { Link } from 'dva/router'

<Link to="/">去首页<Link>

```
```js
// 如果不是被路由
// <Router path="/product" component={ProductPage}>
// 需要传递下去
// <Abc history={this.props.history}>
this.props.history.push('/')
```

```js
// 使用高阶组件包一下

import { withRouter } from 'dva/router'
// 子组件内就可以直接使用 this.props.history 了
export default withRouter(Abc)

```

```js
// 当然 dispath 要先引入  就是  modle 中的 dispatch 
import { routerRedux } from 'dva/router'
this.props.dispatch(routerReduc.push('/'))
```

### 2. modle 中的 API
- 2.1  和 effects 平级可以添加一个监听
```js


subscriptions: {
  setup({dispatch, history}) {
    window.onresize = () => {
      dispatch({
        type: ....
        paylpad: //////
      })
    }
    // 这时 当窗口缩放时 就可以调用 dispatch 去修改 store中的值
  }
}
```
- 2.2 modele 文件夹的合并 自动导出
```js
// models/index.js
const context = require.context('./', false, /.js$/)

export default context
  .keys()
  .filter(item => item !== './index.js')
  .map(key => context(key))

// 入口注册时就可以改为
// app.model(require('./models/example').default)
// app.model(require('./models/product').defualt)

require('./models').default.forEach(key => app.model(key.default))
```

