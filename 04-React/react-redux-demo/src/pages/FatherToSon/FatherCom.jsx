import React from 'react'
import SonCom from './SonCom'
export default class FantherCom extends React.Component {
    state = {
        listData: [
            1, 2, 3
        ]
    }
    render () {
        return (
            <div>
                <h1>father</h1>
                <SonCom listData={this.state.listData} />
                <SonCom />
            </div>
        )
            
    }
}