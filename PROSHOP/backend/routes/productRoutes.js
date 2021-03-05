import express from "express";
import {
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct,
    createProductReview
}
    from "../controllers/productController.js";
import {protect,admin} from "../middleware/authMiddleware.js";


const router=express.Router();
router.route("/")
    .get(getAllProducts)
    .post(protect,admin,createProduct);
router.route("/:id")
    .get(getProduct).delete(protect,admin,deleteProduct)
    .put(protect,admin,updateProduct);
router.route("/:id/reviews")
    .post(protect,createProductReview)
export default router;