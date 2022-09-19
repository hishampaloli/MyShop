import React from "react";
import Products from "../components/Products";
import { useSelector, useDispatch } from "react-redux";
import { getProductsDetails } from "../actions/productsActions.js";
import { addToCart, deleteFromCart } from "../actions/cartAction.js";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  //   console.log(cart);

  const [qty, setQty] = useState(1);
  const [id, setId] = useState("");
  let pric = 0;

  let price = cart.map((pro) => {
    return (pric = pric + pro?.price * pro.qty);
  });

  let delivery = pric > 100 ? 0 : 40;
  let tax = Number(pric * 0.1).toFixed(2);

  console.log(pric);
  //   console.log(qty);

  return (
    <div className="d-flex m-3 flex-row">
      <div>
        {cart.length === 0 ? (
          <img
            src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png"
            style={{ height: "50vh", width: "50%", marginLeft: "20%" }}
            alt=""
            srcset=""
          />
        ) : (
          ""
        )}
        {cart.map((product) => {
          return (
            <div className="d-flex m-3 " style={{ width: "650px" }}>
              <div style={{ width: "300px" }}>
                <img
                  className="img-fluid"
                  style={{ width: "400px" }}
                  src={product?.image}
                  alt=""
                />
              </div>

              <div
                className="m-3"
                style={{
                  width: "700px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h3>{product?.name}</h3>
                <p>{product?.description}</p>
                <p>
                  <strong>Price: </strong> ${product?.price}{" "}
                </p>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    className="btn"
                    onClick={(e) => {
                      dispatch(deleteFromCart(product?.product));
                    }}
                    style={{ border: "1px solid" }}
                  >
                    Delete from cart
                  </button>

                  <Form.Select
                    value={product?.qty}
                    onChange={(e) => {
                      dispatch(addToCart(product?.product, e.target.value));
                    }}
                    style={{ width: "200px" }}
                    size="md"
                  >
                    {[...Array(product?.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="mt-4 ml-auto mr-4"
        style={{
          backgroundColor: "#F8F9FA",
          minWidth: "250px",
          padding: "20px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: "-0px",
          borderRadius: "10px",
        }}
      >
        <ul
          className="d-flex "
          style={{
            listStyle: "none",
            justifyContent: "space-between",
            marginLeft: "-15px",
          }}
        >
          <li>Subtotal</li>
          <li>${pric}</li>
        </ul>
        <ul
          className="d-flex "
          style={{
            listStyle: "none",
            justifyContent: "space-between",
            marginLeft: "-15px",
          }}
        >
          <li>Delivery</li>
          <li>${delivery}</li>
        </ul>
        <ul
          className="d-flex "
          style={{
            listStyle: "none",
            justifyContent: "space-between",
            marginLeft: "-15px",
          }}
        >
          <li>Tax</li>
          <li>${tax}</li>
        </ul>
        <ul
          className="d-flex "
          style={{
            listStyle: "none",
            justifyContent: "space-between",
            marginLeft: "-15px",
          }}
        >
          <li>
            <strong>Total</strong>
          </li>
          <li>
        <strong>$ </strong>
          </li>
        </ul>
        <Button variant="dark" className="ml-4">
          Proceed to checkout
        </Button>{" "}
      </div>
    </div>
  );
};

export default CartPage;
