import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    inputVal: 'Write something',
    listData: []
}
const reducer = (state = defaultState, action ) => {
    // if (action.type === CHANGE_INPUT) {
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.inputVal = action.value
    //     return newState
    // } else if (action.type === ADD_ITEM) {
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.listData.push(state.inputVal)
    //     return newState
    // } else if (action.type === DEL_ITEM) {
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.listData.splice(action.value, 1)
    //     return newState
    // } else if (action.type === GET_LIST) {
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.listData = action.value
    //     return newState
    // }
    // return state
    const { type, value } = action
    const newState = JSON.parse(JSON.stringify(state))
    switch (type) {
        case CHANGE_INPUT:
            newState.inputVal = value
            return newState
        case ADD_ITEM:
            newState.listData.push(state.inputVal)
            return newState
        case DEL_ITEM:
            newState.listData.splice(value, 1)
            return newState
        case GET_LIST:
            newState.listData = value
            return newState
        default:
            return state
    }
}
export default reducer