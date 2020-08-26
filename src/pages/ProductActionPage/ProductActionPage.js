import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            cbStatus: true,
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps && nextProps.itemEditing) {
            let itemEditing = nextProps.itemEditing;
            this.setState({
                id: itemEditing._id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                cbStatus: itemEditing.status
            })

        }
    }

    onSave = (e) => {
        e.preventDefault();
        let { id, txtName, txtPrice, cbStatus } = this.state;
        let { history } = this.props;
        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: cbStatus,
        }
        if (id) {
            this.props.onUpdateProduct(product)
            // history.goBack();
        } else {
            this.props.onAddProduct(product);
            history.goBack();
        }
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = match.params.id
            this.props.onEditProduct(id);
        }
    }

    render() {
        let { txtName, txtPrice, cbStatus } = this.state;
        return (
            <div className="col-md-6">
                <div>
                    <h2>Thêm sản phẩm</h2>
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Tên sản phẩm :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="txtName"
                                onChange={this.onChange}
                                value={txtName}
                                required />
                        </div>
                        <div className="form-group">
                            <label>Giá sản phẩm:</label>
                            <input
                                type="number"
                                className="form-control"
                                name="txtPrice"
                                onChange={this.onChange}
                                value={txtPrice}
                                required />
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="cbStatus"
                                    onChange={this.onChange}
                                    value={cbStatus}
                                    checked={cbStatus} />
                                Còn hàng
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Lưu</button>
                    </form>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actions.addProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actions.getProductRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(actions.updateProductRequest(product))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);

