import { GET_LIST, GET_LIST0 } from './actionTypes'
import { takeEvery, put } from 'redux-saga/effects'  
import axios from 'axios'
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_LIST, getList)
    yield takeEvery(GET_LIST0, getList0)
}

function* getList(){
    const res = yield axios.get('/api/list')
    const action = {
        type: GET_LIST,
        value: res.data
    }
    yield put(action)
}
function* getList0(){
    const res = yield axios.get('/api/list0')
    const action = {
        type: GET_LIST0,
        value: res.data
    }
    yield put(action)
}
export default mySaga