import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'
export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value,
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const delItemAction = (id) => ({
  type: DEL_ITEM,
  id
})

export const getListData = () => {
  return (dispatch) => {
    axios.get('/api/list').then((res) => {
      const action = {
        type: GET_LIST,
        value: res.data
      }
      dispatch(action)
  })
  }
}