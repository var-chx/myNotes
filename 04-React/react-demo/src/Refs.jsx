import React from 'react'
export default class RefsComponent extends React.Component {
    constructor () {
        super()
        this.myRef = React.createRef()
    }
    componentDidMount () {
        console.log(this.myRef, 'DOM')
    }
    render () {
        return (
            <div ref={this.myRef}></div>
        )
    }
}