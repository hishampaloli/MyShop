import React, { useState } from "react";
import "./mainTab.css";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useDispatch, useSelector } from "react-redux";

import Tab1 from "../Dash/Tab1/Tab1";
import Tab2 from "../Dash/Tab2/Tab2";
import Tab3 from "../Dash/Tab3/Tab3";
import Tab4 from "../Dash/Tab4/Tab4";
import Tab5 from "../Dash/Tab5/Tab5";

function MainTab() {
  const [right, setRight] = useState("dash");
  console.log(right);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Login);
  const { userInfo } = user;

  return (
    <div className="main">

       <div className="sub-main">
        <div className="left">
          <div className="left-profile">
            <img
              src="https://demo.activeitzone.com/ecommerce/public/uploads/all/5XVyeLGw5zRpb63bqgn2dtIOjCktLgBltNSQIPG3.png"
              alt=""
            />
            <p className="mt-2">{userInfo?.name}</p>
          </div>
          <div className="left-items">
            <ul>
              <li
                onClick={(e) => {
                  setRight("dash");
                }}
              >
                <ShoppingCartCheckoutIcon className="nav-ic" /> All Products
              </li>
              <li
                onClick={(e) => {
                  setRight("pur");
                }}
              >
                <PersonIcon className="nav-ic" />
                All Users
              </li>
              <li
                onClick={(e) => {
                  setRight("aff");
                }}
              >
                <AddShoppingCartIcon className="nav-ic" />
                Add Product
              </li>
              <li
                onClick={(e) => {
                  setRight("pay");
                }}
              >
                <PostAddIcon className="nav-ic" />
                Edit Products
              </li>
              <li
                onClick={(e) => {
                  setRight("req");
                }}
              >
                <MonetizationOnIcon className="nav-ic" />
                All orders
              </li>
            </ul>
          </div>
        </div>

        {right === "dash" ? (
          <Tab1 />
        ) : right === "pur" ? (
          <Tab2 />
        ) : right === "aff" ? (
          <Tab3 />
        ) : right === "pay" ? (
          <Tab4 />
        ) : right === "req" ? (
          <Tab5 />
        ) : (
          <h1>eee</h1>
        )}
      </div> 
    </div>
  );
}

export default MainTab;
