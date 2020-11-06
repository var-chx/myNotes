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