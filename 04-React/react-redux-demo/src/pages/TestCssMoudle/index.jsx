import React from 'react'
import './index.scss'
export default class TestCssMoudle extends React.Component {
  render () {
    return (
      <div className={'divNode'}>
        <span className={'spanNode'}>你好啊</span>
        <p className={'pNode'}>你好啊</p>
        <a className={'aNode'}>你好啊</a>
      </div>
    )
  }
}