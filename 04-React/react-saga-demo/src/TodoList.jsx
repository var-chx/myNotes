import React from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import axios from 'axios'
import { CHANGE_INPUT, ADD_ITEM, GET_LIST } from './store/actionTypes'

export default class TodoList extends React.Component {
    state = store.getState()
    inputChangeHandle = (e) => {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action)
    }
    btnClick = () => {
        const action = {
            type: ADD_ITEM,
        }
        store.dispatch(action)
    }
    componentDidMount () {
        store.subscribe(() => {
            this.setState(store.getState())
        })
        axios.get('/api/list').then((res) => {
            console.log(res.data, 9090)
            const action = {
                type: GET_LIST,
                value: res.data
            }
            store.dispatch(action)
        })
    }
    render () {
        return (
            <div style={{padding: '10px'}}>
                <Input 
                    style={{ width: '300px', margin: ' 0 20px 20px 0'}}
                    onChange={this.inputChangeHandle}
                />
                <Button
                    type="primary"
                    onClick={ ()=> this.btnClick()}
                >Button</Button>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.listData}
                    renderItem={item => (
                        <List.Item>
                         {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
