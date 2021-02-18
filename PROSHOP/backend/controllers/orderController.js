import asyncHandler from "../middleware/async.js";
import Order from "../models/orderModel.js";
import ErrorResponse from "../utils/errorResponse.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems=asyncHandler(async(req,res,next)=>{
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    }=req.body;
    if (orderItems&&orderItems.length===0){
      next(new ErrorResponse("No order items"),400);
    }else{
        const order= new Order({
            orderItems,
            user:req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        });
        const createdOrder=await order.save();
        res.status(201).json(createdOrder);
    }
});

// @desc   get order by id
// @route   GET /api/orders/:id
// @access  Private
const getOrderById=asyncHandler(async(req,res,next)=>{
   const  order=await Order.findById(req.params.id)
       .populate("user","name email");
   if (!order){
       next(new ErrorResponse("order not found ",404));
   }   else{
       res.json(order);
   }
});
export {addOrderItems,getOrderById}