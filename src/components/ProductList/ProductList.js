import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="card bg-primary text-white">
                    <div className="card-body">Danh sách sản phẩm</div>
                </div>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã SP</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;
