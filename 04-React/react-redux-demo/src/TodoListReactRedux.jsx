import React from 'react'
import { connect } from 'react-redux'
import { Input, List, Button } from 'antd'
import { changeInputAction } from './store/actionCreators'
const stateToProps = (state)=>{
    return {
        ...state
    }
}
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = changeInputAction(e.target.value)
            dispatch(action)
        }
    }
}
export default connect(stateToProps, dispatchToProps)( class TodoListReactRedux extends React.Component {
    render () {
        return (
            <>
                <div>
                    <Input 
                        placeholder="Basic usage" 
                        onChange={this.props.inputChange}
                        style={{width: '300px', margin: '30px 20px'}}
                    />
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
                    dataSource={this.props.listData}
                    renderItem={item => (
                        <List.Item>
                         {item}
                        </List.Item>
                    )}
                />
                </div>
            </>
        )
    }
})
