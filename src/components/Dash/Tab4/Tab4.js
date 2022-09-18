import React, { useEffect, useState } from "react";
import { dataTab4 } from "../Dataas/Data";
import "./Tab4.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { AddNewProduct, editProduct, getProductsDetails } from "../../../actions/productsActions";
import { useHistory } from "react-router-dom";

function Tab4() {
  const dispatch = useDispatch();
  const history = useHistory();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  console.log(product);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setcategory] = useState("");
  const [price, setPrice] = useState(null);
  const [countInStock, setQty] = useState(null);
  const [image, setImg] = useState("");
  const [description, setDecription] = useState("");

  const [productId, setId] = useState('');
  console.log(productId);

  // useEffect(() => {
  //   setName(product?.name)
  //   setBrand(product?.brand)
  //   setcategory(product?.category)
  //   setPrice(product?.price)
  //   setQty(product?.countInStock)
  //   setImg(product?.image)
  //   setDecription(product?.description)
  // }, [dispatch]);



  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(getProductsDetails(productId))
  }

  const handleEdit = (e) => {
    e.preventDefault();

    dispatch(
      editProduct(product?._id,{
        user: "6321ae212fa4675d919e9f15",
        name : name ? name : product?.name,
        brand: brand ? brand : product?.brand,
        category: category ? category : product?.category,
        price: price ? price : product?.price,
        countInStock: countInStock ? countInStock : product?.countInStock,
        image: image ? image : product?.image,
        description : description ? description : product?.description,
      })
    );

    history.push('/')
  }
  return (
    <div className="right-3">
      <div className="row3a">
            <div className='aff-card1'>
              <h1>{error ? 'No such Product': product ? 'Product Found' : 'Search'}</h1>
              <p></p>
            </div>
      
      </div>

      <div className="detail-card-aff">
        <div className="card-title">
          <p>Edit Product</p>
        </div>

        <Form onSubmit={handleSearch} style={{display: 'flex',
            width: "800px",}} >
          <InputGroup  className="mb-3">
            <InputGroup.Text id="basic-addon3">
              Please enter your product id
            </InputGroup.Text>
            <Form.Control onChange={(e) => setId(e.target.value)}   id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <Button style={{height:'38px', marginLeft: '20px'}}  variant="primary" type="submit">
            Search
          </Button>

        </Form>

        <Form
          onSubmit={handleEdit}
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
                value={name}
                placeholder={product?.name}
              />
              <Form.Text className="text-muted">
                Please enter the product Name
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                placeholder={product?.brand}
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
              value={category}
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
                placeholder={product?.countInStock}
                value={countInStock}
                aria-label="Amount (to the nearest dollar)"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                value={price}
                placeholder={product?.price}
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
                placeholder={product?.image}
              value={image}
            />
          </Form.Group>

          <FloatingLabel className="text-muted" controlId="floatingTextarea2">
            <Form.Control
              onChange={(e) => setDecription(e.target.value)}
              as="textarea"
              
              placeholder={product?.description}
              value={description}
              style={{ height: "100px" }}
            />
          </FloatingLabel>

          <Button className="mt-3" variant="primary" type="submit">
            Add product
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Tab4;
