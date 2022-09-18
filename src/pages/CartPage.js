import React from "react";
import Products from "../components/Products";
import { useSelector, useDispatch } from "react-redux";
import { getProductsDetails } from "../actions/productsActions.js";
import { addToCart, deleteFromCart } from "../actions/cartAction.js";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
//   console.log(cart);

  const [qty, setQty] = useState(1);
  const [id, setId] = useState("");

//   console.log(qty);

  return (
    <div className="d-flex m-3 flex-column">
    {cart.length === 0 ? <img src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png" style={{height: '50vh', width: '50%', marginLeft: '20%'}} alt="" srcset="" /> : '' }
      {cart.map((product) => {
        return (
          <div className="d-flex m-3 ">
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

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  className="btn"
                  onClick={(e) => {
                    dispatch(deleteFromCart(product?.product))
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
  );
};

export default CartPage;
