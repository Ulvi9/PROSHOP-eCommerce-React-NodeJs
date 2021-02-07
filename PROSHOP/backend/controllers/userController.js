import User from "../models/userModel.js";
import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";
import generateToken from "../utils/generateToken.js";


//@desc Auth user&&get token
//@route GET api/users/login
//@access public
const auth=asyncHandler(async(req,res,next)=>{
const {email,password}=req.body;
const user =await User.findOne({email});
    if (user&&(await user.matchPassword(password))){
       return res.send({
           _id:user._id,
           name:user.name,
           isAdmin:user.isAdmin,
           email:email,
           token:generateToken(user._id)
       })
    }else{
       return next(new ErrorResponse("Invalid email or Password",401));
        //res.status(401)
       // throw new Error('Invalid email or password')
    }
});
// @desc      Get current logged in user
// @route     GET /api/users/profile
// @access    Private

//@desc Register user
//@route Post api/users
//@access public
const register=asyncHandler(async (req,res,next)=>{
    const {name,password,email}=req.body;
    const existUser=await User.findOne({email:email});
    if (existUser){
        return next(new ErrorResponse("User already exist",400));
    }
    const user=await User.create({
        name,
        password,
        email
    });
    if (user){
        res.status(201).json({
            success: true,
            _id:user._id,
            name:user.name,
            isAdmin:user.isAdmin,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else {
        return next(new ErrorResponse("Invalid user data",400));
    }
});
const getUserProfile=asyncHandler(async(req,res,next)=>{
    // user is already available in req due to the protect middleware
    // const user = req.user;
    const user=await User.findById(req.user.id);

    if (user){
        res.status(200).json({
            success: true,
            _id:user._id,
            name:user.name,
            isAdmin:user.isAdmin,
            email:user.email,
        });
    }else{
        next(new ErrorResponse("User not found",404));
    }
});

export {auth,getUserProfile,register}