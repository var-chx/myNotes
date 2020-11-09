import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    inputVal: 'Write something',
    listData: []
}
const reducer = (state = defaultState, action ) => {
    console.log(state, action, 9090)
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    } else if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.listData.push(state.inputVal)
        return newState
    } else if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.listData.splice(action.value, 1)
        return newState
    } else if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.listData = action.value
        return newState
    }
    return state
}
export default reducer