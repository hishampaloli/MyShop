import React from "react";
import "./Tap2.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DownloadIcon from "@mui/icons-material/Download";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, deleteUsers, login } from "../../../actions/userAction";
import Loader from "../../Loader";

function Tab2() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

  }


  return (
    <div className="right-1">
      <div className="row2" style={{display: 'flex', flexDirection: 'column'}}>
      <div className="row3a">
            <div className='aff-card1'>
            
            <PersonIcon className="nav-ic"  />
              <h2>No Orders yet</h2>
              <p>In your shop</p>
            </div>
        
      </div>
        <div className="detail-card-tab2">
          <div className="card-title">
            <p>All Order</p>
            <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
              }}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Tab2;
