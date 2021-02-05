import express from "express";
import Product from "../models/productModel.js";
// import asyncHandler from "express-async-handler";
import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";
const router=express.Router();

//@desc get all products
//@route GET api/products/courses
//@access public
router.get("/",asyncHandler(async (req, res) => {
    const products=await Product.find({});
    //throw new ErrorResponse("error",404)
    res.json(products);
}))
//@desc get  product
//@route GET api/products/product/:id
//@access public
router.get("/:id",asyncHandler(async (req, res,next) => {
    const product=await Product.findById(req.params.id);
    if (!product){
       return  next(new ErrorResponse(`product did not find with id ${req.params.id}`),404) ;
    };
     res.json(product);

}))
export default router;