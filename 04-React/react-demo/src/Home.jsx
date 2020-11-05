import { Component } from 'react'
export default class MyNav extends Component {
    render () {
        return (
            <div>
                <ul>
                    {
                        this.props.nav.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}