import { Component } from 'react'
export default class IfDemo extends Component {
    constructor () {
        super()
        this.state = {
            isShow: true
        }
    }
    render () {
        let showView = this.state.isShow ?
        <div>/大块jsx用我这样的/登录了</div> : 
        <div>没有登录</div>

        return (
            <div>
                { this.state.isShow && 
                    <div>
                        简单的用  使用我
                    </div>
                }
                {showView}
                <div>
                    The user is <b>{this.state.isShow ? 'true' : 'false'}</b> logged in.
                </div>
            </div>
        )
    }
}