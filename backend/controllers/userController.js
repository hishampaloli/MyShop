import { json } from "express";
import AsyncHandler from "express-async-handler";
import User from "../models/userModal.js";
import generateToken from "../utils/jsonwebtoken.js";

export const login = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

export const register = AsyncHandler(async (req, res) => {
  const { email, name, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    const newUser = await User.create({
      name,
      email,
      password,
    });

    console.log(newUser);

    if (newUser) {
      res.json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: generateToken(newUser._id),
      });
    }
  } else {
    res.status(404);
    throw new Error("Email already in use !");
  }
});

export const getUsers = AsyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const user = await User.find({ ...keyword });
  res.json(user);
});

export const getUsersProfile = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

export const UpdateUsersProfile = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(req.body)
    user.name = req.body.name;
    user.image = req.body.image;

    if (req.body.password) {
      if (await user.matchPassword(req.body.password)) {
        user.password = req.body.newPassword;
      } else {
        res.status(404);
        throw new Error("Password not correct");
      }
    }

   await user.save();
   res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    image: user.image,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  });
});

export const DeleteUsers = AsyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.json({
    message: "Deleted",
  });
});
