import { Component } from 'react'
export default class LifeCycle extends Component {
    constructor () {
        super()
        this.state = {
            msg: 123
        }
    }
    componentWillMount () {
        console.log(this.state, 'componentWillMount')
    }
    componentDidMount () {
        console.log('准备好了')
        console.log(this.state.msg, 123)
    }
    render () {
        return (
            <div>life{ this.state.msg }</div>
        )
    }
}