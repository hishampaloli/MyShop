import { json } from "express";
import AsyncHandler from "express-async-handler";
import Product from "../models/productModal.js";

export const getProducts = AsyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });

  res.json(products);
});

export const getProductDetails = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.json(product);
});

export const addProduct = AsyncHandler(async (req, res) => {
  const product = await Product.create(req.body);

  res.json(product);
});

export const deleteProduct = AsyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  res.json({
    message: "done",
  });
});


export const editProduct = AsyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    message: "done",
  });
});
