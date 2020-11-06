/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Home from './Home'
import StateComponent from './StateComponent'
import FnComponent from './FnComponent'
import LifeCycle from './LifeCycle'
import IfDemo from './IfDemo'
import 受控组件 from './受控组件'
import Refs from './Refs'
import 不受控组件 from './不受控组件'
import PropTypesCom from './PropType'
class App extends React.Component {
    render () {
        const nav1 = ['前端', '后端', '运维']
        const nav2 = ['js', 'java', 'node']
        return (
            <div>
                <h1>123</h1>
                <h1>123</h1>
                <Home nav = { nav1 }/>
                <Home nav = { nav2 }/>
                <FnComponent nav={nav1} />
                <StateComponent />
                <LifeCycle />
                <IfDemo />
                <受控组件 />
                <Refs />
                <不受控组件 />
                <PropTypesCom name={'123'} />
                <PropTypesCom />

            </div>
        )
    }
}
export default App
