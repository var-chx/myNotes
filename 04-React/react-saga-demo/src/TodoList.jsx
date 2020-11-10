import React from 'react'
import { Input, Button, List } from 'antd'
export default class TodoList extends React.Component {
    state = {
        inputVal : '年后',
        listData: [
            '哈哈镜',
            '我是你好'
        ]
    }
    inputChangeHandle = e => {
        alert(e.target.value)
        this.setState({
            inputVal: e.target.value
        })
    }
    render () {
        return (
            <div style={{padding: '10px'}}>
                <Input 
                    style={{ width: '300px', margin: ' 0 20px 20px 0'}}
                    onChange={this.inputChangeHandle}
                />
                <Button type="primary">Button</Button>
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
