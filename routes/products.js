import express from "express";
// import { isAuthenticated } from "../middlewares/auth.js";
// import { isSeller } from "../middlewares/isSeller.js";
import {
    addProducts,
    removeProducts,
    updateProducts,
    getProducts,
    searchProducts,
    getOneProduct
} from "../controllers/products.js";

const router = express.Router();

router.post("/add_product", addProducts);
router.delete("/remove_product/:id/:productId", removeProducts);
router.put("/update_product/:id/:productId", updateProducts);

// Get Request routes
router.get("/get_all_Products", getProducts);
router.get("/search/:searchString", searchProducts);
router.get("/product/:productId", getOneProduct);

export default router;