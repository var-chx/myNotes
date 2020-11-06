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