import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logout } from "../actions/userAction";
import { useState } from "react";
import { getProducts } from "../actions/productsActions";

function NavScrollExample() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Login.userInfo);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(user);

  return (
    <Navbar style={{minHeight: '100px'}} bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand>
          {" "}
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            MY SHOP
          </Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              display: "flex",
              alignItems: "center",
            }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              {" "}
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/cart"
              >
                Cart
              </Link>{" "}
            </Nav.Link>
            <Nav.Link href="#action2">
              {" "}
              {user ? (
                <NavDropdown title={user?.name} id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                  {user?.isAdmin ?  <Link to='/admin/dashboard' style={{ textDecoration: "none", color: "black" }}>
                      Dashboard
                    </Link> :  <Link to='/user/profile' style={{ textDecoration: "none", color: "black" }}>
                      My Profile
                    </Link> }
                   
                  </NavDropdown.Item>

                  
                  <NavDropdown.Item>
                    {" "}
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      Logout
                    </Link>{" "}
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/login"
                >
                  Login
                </Link>
              )}
            </Nav.Link>
          </Nav>
          <Form  onSubmit={handleSubmit} className="d-flex ml-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);

                dispatch(getProducts(search));
              }}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
