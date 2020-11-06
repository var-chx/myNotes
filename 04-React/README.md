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
### 3.5 行内样式定义
```
<div style{{color: 'red'}}> 
```

### 3.6 绑定事件
```
// 行内方法
<button onClick={ function () { console.log(123) } }></button>

// 外部方法
1. 和 render 平级 定义
fn () {
    console.log(123)
}
2. 使用
<button onClick={this.fn}></button>

```
// 外部的标准使用
```js
1. 定义
fn = (arg1) => {  // 这样就实现  可以使用 this.state  解决的 this 指向问题
    console.log(arg1)
}
2. 使用 
<button onClick={()=>this.fn('传参')}></button>  // 这样就实现 调用时传参
```
> 拓展: function 函数  this 谁调用指向谁; 箭头函数 指向上层

### 3.7 state 
- this.setState() 是异步的 
```js
this.setState({
    msg: '123'
})
console.log(this.state.msg) // 这里是拿不到最新的  还是old 值 说明 是异步的
要想立即拿到  需要回调
this.setState({
    msg: '123'
},() => {
    this.state.mag // 这里就是最新的 msg的值
})
```
### 3.8 组件的生命周期
- React 的生命周期 分为三个部门
    - 组件创建阶段 : 一辈子执行一次
        - componentWillMount;
        - render
        - componentDidMount
    - 组件运行阶段: 根据 props 和 state 的状态的改变, 选择性的执行一次或者多次
        - componentWillReveiveProps
        - shouldComponentUpdate
        - componentWillUpdate
        - render
        - componentDidUpdate
    - 组件销毁阶段 : 一辈子只执行一次
        - componentWillUnmount

### 3.9 组件之间的通信
- 父传子
```
// 定义
<nav data = {list} title="路径导航" clickChange={this.change} />


// 使用
this.props.data
this.props.title
this.props.clickChange()
```
- 子修改父  可以通过 父穿过去的方法修改

### 3.10 条件渲染
```
// 简单用 if
{ this.state.isShow && 
    <div>
        简单的用  使用我
    </div>
}

// 简单的用 if-else
<div>
    The user is <b>{this.state.isShow ? 'true' : 'false'}</b> logged in.
</div>

// 大块用 先在 return 外 准备好 然后再丢进去
render () {

    let showView = this.state.isShow ?
    <div>/大块jsx用我这样的/登录了</div> : 
    <div>没有登录</div>

    return (
        <div>
            {showView}
        </div>
    )
}
```

### 3.11 列表渲染  
- 使用 map 函数 
- 注意使用 key
    - 一般使用 唯一的id , 最后选择使用 索引
    - 如果您选择不将明确的 键(key) 分配给列表项，那么 React 将默认使用索引作为键(key)。
    - 如果列表项的顺序可能改变，我们不建议使用索引作为 keys。这可能会对性能产生负面影响，

### 3.12 表单
- 受控组件
```js
import React from 'react'
export default class NameForm extends React.Component {
    constructor () {
        super()
        this.state = {
            value: '3'
        }
    }
    changeHandle = (e) => {
        this.setState({value: e.target.value})
        console.log(123444)
    }
    sumbmitHandle = (e) => {
        alert(this.state.value)
        e.preventDefault()
    }
    render () {
        return (
            <form onSubmit={this.sumbmitHandle}>
                <input type="text" value={this.state.value} onChange={this.changeHandle}/>
                <input type="submit" value="valSubmit" />
                <button type="submit" >btnSubmit</button>
            </form>
        )
    }
}
```
- 非受控组件
```js
import React from 'react'
export default class NameFrom extends React.Component {
    constructor () {
        super()
        this.myFromName = React.createRef()
    }
    sumbithandle = (e) => {
        e.preventDefault()
        alert(this.myFromName.current.value)
    }
    render () {
        return (
            <form onSubmit={this.sumbithandle}>
                <input ref={this.myFromName} type="text" />
                <input type="password" name="password"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
```
### 3.13 状态提升


