import express from "express";
import {
    auth,
    getUserProfile,
    register,
    updateUserProfile,
    getUsers}
    from "../controllers/userController.js";
import {protect,admin} from "../middleware/authMiddleware.js";


const router=express.Router();
router.get("/",protect,admin,getUsers);
router.post("/login",auth);
router.route("/profile").get(protect,getUserProfile);
router.route("/register").post(register);
router.route("/update").put(protect,updateUserProfile);
export default router;