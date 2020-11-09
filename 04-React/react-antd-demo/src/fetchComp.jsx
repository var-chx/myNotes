import React from 'react'
export default class FetchComp extends React.Component {
    componentDidMount () {
        fetch('v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0')
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
        })
        fetch('index/api/list')
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
        })
    }
    render () {
        return (
            <div>123</div>
        )
    }
}