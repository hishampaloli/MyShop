import React, { useState } from "react";
import "./userProfile.css";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useDispatch, useSelector } from "react-redux";

import Tab1 from "../userDash/Tab1/Tab1";
import Tab2 from "../userDash/Tab2/Tab2";

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
              src={user.userInfo?.image ?  user.userInfo?.image : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
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
              <PersonIcon className="nav-ic" />
                My Profile
              </li>
              <li
                onClick={(e) => {
                  setRight("pur");
                }}
              >
                <ShoppingCartCheckoutIcon className="nav-ic" />
                My orders
              </li>
              
            </ul>
          </div>
        </div>

        {right === "dash" ? (
          <Tab1 />
        ) : right === "pur" ? (
          <Tab2 />) : ''}
      </div> 
    </div>
  );
}

export default MainTab;
