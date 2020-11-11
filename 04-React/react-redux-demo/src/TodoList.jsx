import React from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import { Provider } from 'react-redux'
import TodoListReactRedux from './TodoListReactRedux'
import { changeInputAction, addItemAction, delItemAction, getListData } from './store/actionCreators'
import TestCssMoudle from './pages/TestCssMoudle'
export default class TodoList extends React.Component {
    // constructor (props) {
    //     super(props)
    //     console.log(store.getState())
    // }
    state = store.getState()
    inputChangeHandle = (e) => {
        console.log(e.target.value)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
        
    }
    btnAdd = () => {
        const action = addItemAction()
        store.dispatch(action)
    }
    delItem = (id) => {
        const action = delItemAction(id)
        store.dispatch(action)
    }
    componentDidMount () {
        store.subscribe(() => {
            this.setState(store.getState())
        })
        const action = getListData()
        store.dispatch(action)
    }
    render () {
        return (
            <>
                <div style={{ padding: '30px 20px'}}>
                    <Input 
                        placeholder="Basic usage" 
                        style={{ width: '200px', marginRight: '10px'}}
                        onChange={this.inputChangeHandle}
                        
                    />
                    {this.state.inputVal}
                    <Button 
                        type="primary"
                        onClick={ ()=>this.btnAdd() }
                    >增加</Button>
                </div>
                <div>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.listData}
                        renderItem={(item, index) => (
                            <List.Item
                                onClick={ ()=> this.delItem(index)}
                            >{item}</List.Item>
                        )}
                    />
                </div>
                <Provider store={store}>
                    <TodoListReactRedux />
                </Provider>
                <TestCssMoudle />
                <div className="divNode">
                    <p className={'pNode'}>测试会不会污染 真的污染了</p>
                </div>
            </>
        )
    }
}