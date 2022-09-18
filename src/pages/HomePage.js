import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '../actions/productsActions'
import Products from "../components/Products";

const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const {loading, error, products} = productList



  useEffect(() => {
    dispatch(getProducts());
  },[dispatch]);

  return (
    <div  style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-around' }}>
    {products?.map(product => <Products key={product._id} product={product} />    )}
    
    </div>
  );
};

export default HomePage;
