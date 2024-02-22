import React, { Component } from "react";

export default class Cart extends Component {
  renderCartShoe = () => {
    let { cart, handleDeleteProduct, handleQuantityProduct } = this.props;
    return cart.map((e) => {
      let { name, image, price, quantity, id } = e;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>
            <img src={image} alt="" width={70} />
          </td>
          <td>${price}</td>
          <td>
            <button
              onClick={() => {
                 handleQuantityProduct(id, -1)
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              onClick={() => {
                 handleQuantityProduct(id, 1)
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>${price * quantity}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDeleteProduct(id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="mt-5">Cart</h3>
        <table className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>{this.renderCartShoe()}</tbody>
        </table>
      </div>
    );
  }
}
