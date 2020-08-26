import * as types from '../constant/ActionTypes'

let initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.product
            return [...state]
        case types.DELETE_PRODUCT:
            let index = state.findIndex(item => item._id === action.id)
            state.splice(index, 1);
            return [...state]
        case types.ADD_PRODUCTS:
            state.push(action.product)
            return [...state]
        case types.UPDATE_PRODUCT:
            return [...state]
        default: return [...state];
    }
}

export default products;