import React, { useState } from "react";
import "./tab1.css";
import { dataTab3 } from "../Dataas/Data";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { AddNewProduct } from "../../../actions/productsActions";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { userProfile, userProfileUpdate } from "../../../actions/userAction";

function Tab3({ histor }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImg] = useState("");
  const [password, setPassword] = useState(null);
  const [NewPassword, setNewPassword] = useState("");

  const user = useSelector((state) => state.Login);
  const userDetails = useSelector((state) => state.userProfile.user);

  useEffect(() => {
    if (!user.userInfo) {
      history.push('/')
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userProfileUpdate(user?.userInfo?._id,{
      name : name ? name : user?.userInfo?.name,
      email: email ? email : user?.userInfo?.email,
      image: image ? image :user?.userInfo?.image,
      password : password,
      newPassword: NewPassword,
    }))
  };

  return (
    <div className="right-3">
      <div className="row3a">
        <div className="aff-card1">
          <h1>EDIT PROFILE</h1>
          <p>edit your profile</p>
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
          <Form.Group
            style={{ width: "300px" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder={user?.userInfo?.name}
            />
            <Form.Text className="text-muted">
              Please enter the product Name
            </Form.Text>
          </Form.Group>

          <Form.Group
            style={{ width: "300px" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              disabled
              value={email}
              placeholder={user?.userInfo?.email}
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
          <Form.Group
            style={{ width: "300px" }}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Old password"
            />
          </Form.Group>{" "}
          <Form.Group
            style={{ width: "300px" }}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>New Password</Form.Label>
            <Form.Control
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="New Password"
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
          onChange={(e) => setImg(e.target.value)}
            placeholder={user?.userInfo?.image}
            type="text"
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Update Profile
        </Button>
      </Form>
    </div>
  );
}

export default Tab3;
