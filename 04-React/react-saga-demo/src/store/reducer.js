import { CHANGE_INPUT, ADD_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    inputVal : '年后',
    listData: [
        '哈哈镜reducer',
        '我是你好'
    ]
}
const reducer = (state = defaultState, action) => {
    const { type, value } = action
    const newState = JSON.parse(JSON.stringify(state))
    switch ( type ) {
        case GET_LIST:
            newState.listData = value
            return newState
        case CHANGE_INPUT:
            newState.inputVal = value
            return newState
        case ADD_ITEM:
            newState.listData.push(state.inputVal)
            return newState
        default:
            return state
    }
}
export default reducer