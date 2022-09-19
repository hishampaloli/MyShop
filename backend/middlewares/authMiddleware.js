import jwt from "jsonwebtoken";
import User from "../models/userModal.js";
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password')

        next()
    } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error('Not authorized, token fail')
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Autherized')
  }
});

const isAdmin = asyncHandler(async(req, res, next) => {

  if (req.user.isAdmin) {
    next();
  }else {
    res.status(401);
    throw new Error('Not Admin')
  }

})

export { protect, isAdmin };
