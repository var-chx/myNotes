import React from 'react'
import styles from './index.module.scss'
export default class TestCssMoudle extends React.Component {
  render () {
    return (
      <div className={styles.divNode}>
        <span className={styles.spanNode}>你好啊</span>
        <p className={styles.pNode}>你好啊</p>
        <p href="#" className={styles.aNode}>你好啊</p>
      </div>
    )
  }
}