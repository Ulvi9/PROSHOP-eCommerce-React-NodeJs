import Product from "../models/productModel.js";
import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";


//@desc get all products
//@route GET api/products
//@access public
const getAllProducts=asyncHandler(async(req,res,next)=>{
    const products=await Product.find({});
    //throw new ErrorResponse("error",404)
    res.json(products);
});

//@desc get  product
//@route GET api/products/product/:id
//@access public
const getProduct=asyncHandler(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if (!product){
        return  next(new ErrorResponse(`product did not find with id ${req.params.id}`),404) ;
    };
    res.json(product);
})
export { getProduct,getAllProducts}