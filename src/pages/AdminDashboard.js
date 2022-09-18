import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainTab from "../components/mainTab/mainTab";


const AdminDashboard = ({history, location}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.Login);
    const {userInfo} = user

    useEffect(() => {
        if (!userInfo?.isAdmin) {
            history.push('/')
        }
    }, [user])
  return <div>
  <MainTab />
  </div>;
};




// export default AdminDashboard;

export default AdminDashboard
