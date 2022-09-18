import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../actions/userAction";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useEffect } from "react";

const RegisterPage = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [show, setShow] = useState(false);
  var msg = 'Password does not match';

  const dispatch = useDispatch();
  const user = useSelector((state) => state.Login);
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const { userInfo, loading, error } = user;
  console.log(user);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
    if (error) {
      setShow(true);
    }
   
  }, [user, dispatch]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(register(name, email, password));
    } else {
        setShow(true);
       var msg = "Password does'nt match"
    }

    
  };

  return (
    <div>
      <Container
        style={{
          width: "600px",
          border: "1px solid",
          borderRadius: "10px",
          padding: "15px",
          marginTop: "100px",
        }}
      >
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <Form.Text className="text-muted">
              Enter your first name and last name
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              Enter your correct email address
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {show ? (
          <Alert
            style={{ marginTop: "10px" }}
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            <p>{error ? error : msg}</p>
          </Alert>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default RegisterPage;
