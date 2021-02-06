import User from "../models/userModel.js";
import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";


//@desc Auth user&&get token
//@route GET api/users/login
//@access public
const auth=asyncHandler(async(req,res,next)=>{
const {email,password}=req.body;
const user =await User.findOne({email:email});
    if (user&&(await user.matchPassword(password))){
       return res.send({
           _id:user._id,
           name:user.name,
           isAdmin:user.isAdmin,
           email:email,
           token:null
       })
    }else{
       next(new ErrorResponse("UnAuthorized",401));
    }
})


export {auth}