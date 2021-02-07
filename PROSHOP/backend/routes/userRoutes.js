import express from "express";
import {
    auth,
    getUserProfile,
    register,
    updateUserProfile}
    from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js";


const router=express.Router();
router.post("/login",auth);
router.route("/profile").get(protect,getUserProfile);
router.route("/register").post(register);
router.route("/update").put(protect,updateUserProfile);
export default router;