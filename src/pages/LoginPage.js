import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";

const LoginPage = ({ location, history }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.Login);
  // const redirect = location.search ? location.search.split("=")[1] : "/";
  const { userInfo, loading, error } = user;
  console.log(userInfo);
  console.log(loading);
  console.log(error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
    if(error){
        setShow(true)
    }
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              Enter your correct email address
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <Form.Text className="text-muted">
              Make sure you enter a strong password !
            </Form.Text>
          </Form.Group>

          <div style={{display:'flex', flexDirection: 'column'}}>

          <Button style={{width: '200px'}} variant="primary" type="submit">
            Login
          </Button>

          <p className="mt-3" >New User ? <Link to='/register' >Register</Link></p>
          
          </div>
        </Form>



        {show ? <Alert style={{marginTop: '10px'}} variant="danger" onClose={() => setShow(false)} dismissible>
        <p>Email or Password does not match !</p>
      
      </Alert> : ''}

        
      </Container>
    </div>
  );
};

export default LoginPage;
