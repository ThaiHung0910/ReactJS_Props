import React, { Component } from "react";
import ProductItem from "./ProductItem/ProductItem";

export default class ProductList extends Component {
  renderProductItem = () => {
    let { productData, setStateModal, handleAddProduct } = this.props;
    return productData.map((e, id) => (
      <div key={id} className="col-4">
        <ProductItem
          item={e}
          setStateModal={setStateModal}
          handleAddProduct={handleAddProduct}
        />
      </div>
    ));
  };
  render() {
    return <div className="row">{this.renderProductItem()}</div>;
  }
}
