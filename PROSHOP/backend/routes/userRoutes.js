import express from "express";
import {
    auth,
    getUserProfile}
    from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js";


const router=express.Router();
router.post("/login",auth);
router.route("/profile").get(protect,getUserProfile);
export default router;