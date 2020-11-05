## 1. 创建项目 
```sh
npx create-react-app react-demo
```

## 2. 项目介绍
- public 入口文件
- src 源码文件
    - index.js  主入口文件

## 3. React 基础知识
### 3.1 JSX 语法 
- 就是 Javascript + xml
- 遇到 <> 按照 html 语法 
    - 如果存在标签结构, 并且标签结构要换行, 需要用() 括起来
- 遇到 {} 按照 js 语法解析
### 3.2 元素渲染
```js
const element = (
    <div>你好啊 哈哈哈</div>
    <div>你好啊 哈哈哈</div>
    <div>你好啊 哈哈哈</div>
)
```

### 3.3 组件
- 组件的后缀可以是 js  可以是 jsx
```js
// class 关键字创建的组件 --------------------
import React from 'react'
class App extends React.Component {
    // render 从本质来说  只是 App 类的一个实例方法
    render () {    // render 的作用是 渲染 当前组件对应的 虚拟 DOM 元素
        return (   // render 中必须要有 return 返回一个 jsx
            <div>
                <h1>123</h1>
                <h1>123</h1>
            </div>
        )
    }
}
export default App
// 使用 <Home nav = { nav2 }/>


// function 创建组件 -------------------
import React from 'react'
export default function FnComponent (props) {
    console.log(props)
    return (
        <div>
            {
                props.nav.map((item, index) => <p key={index}>{item}</p>)
            }
        </div>
    )
}
// 使用 <FnComponent nav={nav1} />

```
- 函数组件 和 class组件区别 (有无 state ; 有无 生命周期函数;)
    - 使用 class 创建的组件 有自己的私有数据和生命周期(因为是继承React.Component) 而 fn 的没有只有 props
    - class 创建的叫有状态组件 fn叫无状态组件(用的不多)
    - 根据本质区别 选择使用场景
    - 官方说 由于 fn 无状态  所以效率高点


### 3.4 props 属性
```js
// 定义
<nav data = {list} title="路径导航"/>


// 使用
this.props.data
this.props.title
// 注意单项数据流 使用时不能修改
```
### 3.5 state 



