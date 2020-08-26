import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductItem extends Component {

    onDeleteProduct = id => {
        this.props.onDeleteProduct(id)
    }

    render() {
        let { product, index } = this.props;
        let statusName = product.status ? 'Còn hàng' : 'Hết hàng'
        let statusClass = product.status ? 'success' : 'danger'
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product._id ? product._id.slice(0,6) : product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><span className={`badge badge-${statusClass}`}>{statusName}</span></td>
                <td>
                    <Link to={`/product/${product._id}/update`} className="btn btn-success">
                        Sửa
                </Link>
                    <button className="btn btn-danger" onClick={() => this.onDeleteProduct(product._id)}>
                        Xoá
                </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
