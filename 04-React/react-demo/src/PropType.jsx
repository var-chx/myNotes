import React from 'react'
import PropTypes from 'prop-types'
export default class PropTypesComponent extends React.Component {
    constructor () {
        super ()
        this.state = {
            value: '我是类型验证'
        }
    }
    render () {
        return (
            <div>
                {this.state.value}
                参数{this.props.name}
            </div>
        )
    }
}
// 验证类型
PropTypesComponent.propTypes = {
    name: PropTypes.string
}
// 给name 设置默认值
PropTypesComponent.defaultProps = {
    name: "我就是name参数的默认值"
}