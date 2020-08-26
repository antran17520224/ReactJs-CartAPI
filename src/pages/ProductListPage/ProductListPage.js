import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList'
import ProductItem from '../../components/ProductItem/ProductItem'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class ProductListPage extends Component {


    render() {
        let { products } = this.props;
        return (
            <div className="col-md-12">
                <Link to="/product/add" className="btn btn-info m-10">
                    Thêm sản phẩm
				</Link>
                <ProductList >
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
    componentDidMount = () => {
        this.props.fetchAllProduct();
    }

    onDeleteProduct = id => {
        this.props.onDeleteProduct(id)
    }
    showProduct = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDeleteProduct={this.onDeleteProduct} 
                    />
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProduct: () => {
            dispatch(actions.listProductRequest())
        },
        onDeleteProduct: (id) => {
            dispatch(actions.deleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);


