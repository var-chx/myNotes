import { Component } from 'react'
export default class StateComponent extends Component {
    constructor () {
        // 因为存在继承 所以必须要调用 super()
        super()
        this.state = {
            count : 10
        }
    }
    inner = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    ppp () {
        this.setState({
            count: this.state.count - 1
        })
    }
    pppp = function(){
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log(this.state.count)
        })
        console.log(this.state.count)
    }
    render () {
        return (
            <div>
                <h3>组件的state</h3>
                <p>{this.state.count}</p>
                <button onClick={this.inner}>增加</button>
                <button onClick={this.ppp.bind(this)}>减少</button>
                <button onClick={this.pppp.bind(this)}>减少</button>
            </div>
        )
    }
}