import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './actionTypes'
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