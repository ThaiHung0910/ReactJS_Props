import React, { Component } from "react";
import { showModal } from "../../Modal/Modal";
import style from "./css/ProductItem.module.css";

export default class ProductItem extends Component {
  render() {
    let { item, setStateModal, handleAddProduct } = this.props,
      { name, image, shortDescription, price, id } = item;

    return (
      <div className="card m-3" style={{ height: "600px" }}>
        <img className="card-img-top" src={image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{shortDescription}</p>
          <h5 className="card-text">${price}</h5>
          <div className={style.card_btn}>
            <button
              className="btn btn-success"
              onClick={() => {
                handleAddProduct(item);
              }}
            >
              Add to cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button
              className="btn btn-info text-white"
              onClick={() => {
                setStateModal(id);

                showModal();
              }}
            >
              More Info <i className="fa-solid fa-info"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
