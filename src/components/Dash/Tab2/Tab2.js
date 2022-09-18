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

  const user = useSelector((state) => state.Users);
  const { users, loading, error } = user;

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  return (
    <div className="right-1">
      <div className="row2" style={{display: 'flex', flexDirection: 'column'}}>
      <div className="row3a">
            <div className='aff-card1'>
            
            <PersonIcon className="nav-ic"  />
              <h2>Total {users?.length} users Registerd</h2>
              <p>In your shop</p>
            </div>
        
      </div>
        <div className="detail-card-tab2">
          <div className="card-title">
            <p>All Users</p>
            <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                dispatch(allUsers(e.target.value));
              }}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
          </div>

          {users ? (
            <div className="card-body-tab2">
              <ul>
                <li className="mb-5">
                  <strong>USER ID</strong>
                </li>

                {users?.map((user) => {
                  return (
                    <li
                      className="lli"
                      style={{ color: "orange", height: "40px" }}
                    >
                      {user?._id}
                    </li>
                  );
                })}
              </ul>

              <ul>
                <li className="mb-5">
                  <strong>NAME</strong>
                </li>
                {users?.map((user) => {
                  return (
                    <li className="lli" style={{ height: "40px" }}>
                      {user?.name}
                    </li>
                  );
                })}
              </ul>

              <ul>
                <li className="mb-5">
                  <strong>Email</strong>
                </li>
                {users?.map((user) => {
                  return <li className="lli" style={{ height: "40px" }} >{user?.email}</li>;
                })}
              </ul>

              <ul>
                <li className="mb-5">
                  <strong>IsAdmin</strong>
                </li>
                {users?.map((user) => {
                  return (
                    <li className="lli" style={{ height: "40px" }} >{user?.isAdmin ? "Admin" : "User"}</li>
                  );
                })}
              </ul>

              <ul>
                <li className="mb-5">
                  <strong>Options</strong>
                </li>
                {users?.map((user) => {
                  return (
                    <li className="lli" style={{ height: "40px" }}>
                      <button
                        onClick={() => {
                          dispatch(deleteUsers(user?._id));
                        }}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      >
                        <DeleteOutlineIcon className="dlt-icon icn" />
                      </button>

                      <RemoveRedEyeIcon className="rm-icon icn" />
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}

export default Tab2;
