import React from 'react'
import Home from './Home'
import StateComponent from './StateComponent'
import FnComponent from './FnComponent'
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
            </div>
        )
    }
}
export default App
