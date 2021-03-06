import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/async.js";

const protect=asyncHandler(async (req,res,next)=>{
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        // Set token from Bearer token in header
        token = req.headers.authorization.split(' ')[1];
        // Set token from cookie
    }
    // else if (req.cookies.token) {
    //   token = req.cookies.token;
    // }

    // Make sure token exists
    if (!token) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id);

        next();
    } catch (err) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
});
const admin=(req,res,next)=>{
    if (req.user&&req.user.isAdmin){
        next();
    }else{
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
}
export {protect,admin}