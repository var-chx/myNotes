import React from 'react'
import PropTypes from 'prop-types';
export default class SonCom extends React.Component {
    render () {
        return (
            <div>
                <h1>son</h1>
                {this.props.listData}
            </div>
        )
    }
}
SonCom.propTypes = {
    listData: PropTypes.string
}

SonCom.defaultProps = {
    listData: '我是默认值'
}