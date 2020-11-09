const defaultState = {
    inputVal: 'Write something',
    listData: [
        '早上8点开会redux',
        '9点需求讨论',
        '晚上5点对接 代码 review'
    ]
}
const reducer = (state = defaultState, action ) => {
    console.log(state, action, 9090)
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    } else if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.listData.push(state.inputVal)
        return newState
    } else if (action.type === 'delItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.listData.splice(action.value, 1)
        return newState
    }
    return state
}
export default reducer