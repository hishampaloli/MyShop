import React, { useState } from "react";
import "./Tab3.css";
import { dataTab3 } from "../Dataas/Data";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { AddNewProduct } from "../../../actions/productsActions";
import { useHistory } from "react-router-dom";

function Tab3({ histor }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setcategory] = useState("");
  const [price, setPrice] = useState(5);
  const [countInStock, setQty] = useState(0);
  const [image, setImg] = useState("");
  const [description, setDecription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      AddNewProduct({
        user: "6321ae212fa4675d919e9f15",
        name,
        brand,
        category,
        price,
        countInStock,
        image,
        description,
      })
    );

    history.push("/");
  };

  return (
    <div className="right-3">
      <div className="row3a">
            <div className='aff-card1'>
              
            <AddShoppingCartIcon className="nav-ic" />
              <h1>ADD PRODUCTS</h1>
              <p>Add new Products</p>
            </div>
      </div>

     

      <Form
      className="mt-4"
        onSubmit={handleSubmit}
        style={{
          width: "800px",
          padding: "30px",
          backgroundColor: "#26bc7652",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              placeholder="Product name"
            />
            <Form.Text className="text-muted">
              Please enter the product Name
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Product brand"
            />
            <Form.Text className="text-muted">
              Please enter your brand
            </Form.Text>
          </Form.Group>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form.Select
            onChange={(e) => setcategory(e.target.value)}
            style={{ height: "40px", marginRight: "20px" }}
            aria-label="Default select example"
          >
            <option>Select category of your product</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Food">Food</option>
          </Form.Select>

          <InputGroup
            style={{ height: "40px", marginRight: "20px" }}
            className="mb-3"
          >
            <InputGroup.Text>QTY</InputGroup.Text>
            <Form.Control
              onChange={(e) => setQty(e.target.value)}
              type="number"
              aria-label="Amount (to the nearest dollar)"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              aria-label="Amount (to the nearest dollar)"
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </div>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="Valid Image URL"
          />
        </Form.Group>

        <FloatingLabel
          className="text-muted"
          controlId="floatingTextarea2"
          label="Description about your product"
        >
          <Form.Control
            onChange={(e) => setDecription(e.target.value)}
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        <Button className="mt-3" variant="primary" type="submit">
          Add product
        </Button>
      </Form>
    </div>
  );
}

export default Tab3;
