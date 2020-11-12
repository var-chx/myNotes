# 总结
- 1. 行内样式
- 2. 声明样式
- 3. 引入样式
- 4. Css modules 模块化(推荐)
- 5. Style-component
## 1. 行内样式
```js
class App extends React.Component {
    render () {
        return (
            <div style={{background: '#eee', width: '200px'}}>
                <p style={{color: 'red', fontSize: '24px'}}>行内样式</p>
            </div>
        )
    }
}
```
> 注意: 
> - css 样式名采用驼峰命名: fontSize 
> - css 整体放在两个大括号之间 因为是jsx 一个表示要写js 一个表示styles是以对象的形式传入数组

## 2. 声明样式
```js
class App extends React.Component {
    const style1 = {
        background: '#eee',
        width: '200px'
    }
    const style2 = {
        color: 'red',
        fontSize: '24px'
    }
    render () {
        return (
            <div style={style1}>
                <p style={style2}>行内样式的改进</p>
            </div>
        )
    }
}
```
> 注意:
> - 就是行内样式的改进写法 
> - 多的话还是很乱

## 3. 引入样式
```js
// index.css .less .scss
.father {
    width: 60px;
    text-align: center
}

// App.jsx
import React from 'react'
import './index.css'
class App extends React.Component {
    return (
        <div className='father'>
            我使用的是外部引入的样式
        </div>
    )
}
```
> 注意: 
> - 此方式引入的样式全部是全局样式 会污染

## 4. 使用 CSS Modules
- 原理: CSS Modules 的做法就是通过配置将.css文件进行编译，编译后在每个用到css的组件中的css类名都是独一无二的，从而实现CSS的局部作用域。
- 在create-react-app2.0之前的版本，配置CSS Modules是需要 npm run eject弹出webpack来配置的，幸运的是，create-react-app自从2.0.版本就已经开始支持CSS Modules了，详见官网。可见create-react-app对webpack零配置的追求
- create-react-app2.0以上版本的CSS Modules的用法
```js
局部样式    命名规则: xxx.module.css     

           引入方式 import xxx from 'xxx.module.css'

           用法：<div className={xxx.styleName}>

 
全局样式    命名规则: xxx.css   

           引入方式 import ‘xxx.css’

           用法：<div className='styleName'>

全局样式与局部样式混合使用： 
          <div className={`styleName ${xxx['styleName']}`} > 

          -  其中styleName表示全局样式  ${xxx['styleName']表示局部样式，
          -  注意{ }内使用模板字符串 ``
```
案例: 
- person.module.css
```js
.person{
    width: 60%;
    margin:16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding:16px;
    text-align: center;
}
```
- 
- person.jsx
```js
import React, { Component } from 'react';
 
//局部样式
import styles from './Person.module.css';
 
//全局样式
import '../App.css'
class App extends Component {
  
  render() {
 
    return (
      <div className={styles.person}>
        <p className='fz'>person:Hello world</p>
      </div> 
    )
  }
}
 
export default App;

```

## 5. Styled Components
- 以组件的方式写 css
- 安装
```js
npm install --save styled-components
```
- 用法
```js

// 创建一个 Title 组件,它将渲染一个附加了样式的 <h1> 标签
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
 
// 创建一个 Wrapper 组件,它将渲染一个附加了样式的 <section> 标签
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
 
// 就像使用常规 React 组件一样使用 Title 和 Wrapper 
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```

