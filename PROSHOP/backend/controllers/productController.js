import Product from "../models/productModel.js";
import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";


//@desc get all products
//@route GET api/products
//@access public
const getAllProducts=asyncHandler(async(req,res,next)=>{
    const keyword=req.query.keyword?{
        name:{
            $regex:req.query.keyword,
            $options:"i"
        }
    }:{};
    const products=await Product.find({...keyword});
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

//@desc Craete new review
//@route Post api/products/:id/reviews
//@access private
const createProductReview=asyncHandler(async(req,res,next)=>{
    const {rating,comment}=req.body;
    const product=await Product.findById(req.params.id);
    if (product){
        const allReadyReviewed=product.reviews.find(x=>x.user.toString()==req.user._id.toString());
        if (allReadyReviewed){
            return  next(new ErrorResponse(`product already reviewed`),400) ;
        }
        const review={
            name:req.user.name,
            comment,
            rating:Number(rating),
            user:req.user._id
        }
        product.reviews.push(review);
        product.numReviews=product.reviews.length;
        product.rating=product.reviews.reduce((acc,item)=>(item.rating+acc),0);
        await product.save();
        res.status(201).json({message:"Review added"})
    }else{
        return  next(new ErrorResponse(`product did not find with id ${req.params.id}`),404) ;
    }
});
export { getProduct,getAllProducts,deleteProduct,createProduct,updateProduct,createProductReview}