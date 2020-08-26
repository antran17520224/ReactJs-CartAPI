import * as types from '../constant/ActionTypes'
import CallAPI from '../utils/CallAPI'
//GET
export const listProductRequest = () => {
    return async (dispatch) => {
        const res = await CallAPI('list_product', 'GET', null)
        dispatch(listProduct(res.data.data))
    }
}
export const listProduct = (product) => {
    return {
        type: types.FETCH_PRODUCTS,
        product
    }
}
//DELETE
export const deleteProductRequest = id => {
    return  dispatch => {
        CallAPI(`delete_product/${id}`, 'DELETE', null)
        dispatch(deleteProduct(id))
    }
}
export const deleteProduct = (id) => {
    return {
        type : types.DELETE_PRODUCT,
        id
    }
}
//POST
export const addProductRequest = product => dispatch => {
    CallAPI('insert_product','POST',product).then(res => {
        dispatch(addProduct(res.data.data))
    })
}
export const addProduct = product => {
    return {
        type : types.ADD_PRODUCTS,
        product
    }
}
//PUT
export const getProductRequest = id => dispatch => {
    CallAPI(`get_product/${id}`,'GET',null).then(res => {
        dispatch(getProductEdit(res.data.data))
    })
}

export const getProductEdit = product => {
    return {
        type : types.EDIT_PRODUCT,
        product
    }
}

export const updateProductRequest = product => dispatch => {
    CallAPI("update_product",'PUT',product).then(res => {
        dispatch(updateProduct(product))
    })
}

export const updateProduct = product => {
    return {
        type : types.UPDATE_PRODUCT,
        product
    }
}