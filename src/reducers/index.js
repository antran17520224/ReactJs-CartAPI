import { combineReducers } from 'redux'
import products from './ProductReducer'
import itemEditing from './ItemEditingReducer'

const appReducer = combineReducers({
    products,itemEditing
})

export default appReducer;