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

//@desc delete a product
//@route DELETE api/products/:id
//@access private admin
const deleteProduct=asyncHandler(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if (product){
        await  product.remove();
       return res.json({message:"Product removed"});
    }
    else{
        return  next(new ErrorResponse(`product did not find with id ${req.params.id}`),404) ;
    }
})

//@desc create a product
//@route Post api/products
//@access private/admin
const createProduct=asyncHandler(async(req,res,next)=>{
    const product=new Product({
        name:"sample name",
        description:"sample description",
        category:"sapmle category",
        price:0,
        numReviews: 0,
        user:req.user._id,
        brand:"sample brand",
        image:"/images/sample.jpg",
        countInStock: 0
    })
    const createdProduct=await product.save();
    res.status(201).json(product);
});
//@desc update a product
//@route Put api/products/:id
//@access private/admin
const updateProduct=asyncHandler(async(req,res,next)=>{
    const { name,image,description,category,price,countInStock,brand}=req.body;
   const product=await Product.findById(req.params.id);
   if (product){
    product.name=name;
    product.price=price;
    product.category=category;
    product.image=image;
    product.countInStock=countInStock;
    product.brand=brand;
    product.description=description
       const updatedProduct=await product.save();
    res.status(201).json(updatedProduct)

   }else{
       return  next(new ErrorResponse(`product did not find with id ${req.params.id}`),404) ;
   }
});
export { getProduct,getAllProducts,deleteProduct,createProduct,updateProduct}