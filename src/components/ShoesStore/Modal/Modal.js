/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import style from "./css/Modal.module.css";

let showModal = () => {
    let modalId = document.getElementById("modalId");
    modalId.classList.add("show");
    modalId.style.display = "block";
    modalId.style.backgroundColor = "rgba(0, 0, 0, 0.75)";

    window.onclick = (event) => {
      if (event.target === modalId) {
        modalId.style.display = "none";
      }
    };
  },
  closeModal = () => {
    let modalId = document.getElementById("modalId");
    modalId.classList.remove("show");
    modalId.style.display = "none";
    modalId.style.backgroundColor = "none";
  };

export default class Modal2 extends Component {
  render() {
    let { content } = this.props,
      { name, image, description, price, quantity, alias } = content;

    return (
      <div>
        <div className="modal fade" id="modalId">
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className={`modal-header ${style.header}`}>
                <img src={image} alt="Title" width={300} />
              </div>
              <div className="modal-body">
                <h4>Detail Product</h4>

                <h5>Name</h5>
                <p>{name}</p>

                <h5>Alias</h5>
                <p>{alias}</p>

                <h5>Description</h5>
                <p>{description}</p>
                <div className={style.item_q_p}>
                  <h5>Quantity: {quantity}</h5>
                  <h5>Price: ${price}</h5>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { showModal };
