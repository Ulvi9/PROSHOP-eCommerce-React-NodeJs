import User from "../models/userModel.js";
import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";
import generateToken from "../utils/generateToken.js";


//@desc Auth user&&get token
//@route GET api/users/login
//@access public
const auth=asyncHandler(async(req,res,next)=>{
const {emcd,password}=req.body;
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

//@desc get user profile
//@route GET api/users/profile
//@access public
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
//@desc get all users
//@route GET api/users
//@access public
const getUsers=asyncHandler(async(req,res,next)=>{
    const users=await User.find({});
    res.json(users);
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
});

//@desc get user byId
//@route GET api/users/:id
//@access public
const getUserById=asyncHandler(async(req,res,next)=>{
    const user=await User.findById(req.params.id);
    if (user){ res.json(user);}
    else{
        return next(new ErrorResponse("User not found",404));
    }
});
// @desc    Update Update User
// @route   PUT /api/users/:id
// @access  Private Admin
const updateUser = asyncHandler(async (req, res,next) => {
    const user = await User.findById(req.params.id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.isAdmin= req.body.isAdmin||user.isAdmin

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
});
//@desc delete user
//@route DELETE api/users/:id
//@access private admin
const deleteUser=asyncHandler(async(req,res,next)=>{

    const user=await User.findById(req.params.id);

    if (user){
        await user.remove();
        res.status(200).json({
            success: true,
            message:"user deleted"
        });
    }else{
        next(new ErrorResponse("User not found",404));
    }
});


export {auth,getUserProfile,register,updateUserProfile,getUsers,deleteUser,getUserById,updateUser}