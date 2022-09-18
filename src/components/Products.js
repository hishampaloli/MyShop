import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Products = ({ product }) => {
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        
      <Rating val={product.rating}  />
        <Link to={`/product/${product._id}`}>
          {" "}
          <Button variant="primary">View Product</Button>
        </Link>
      </Card.Body>
      
        
    </Card>
  );
};

export default Products;
