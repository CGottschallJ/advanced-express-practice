import express from "express";
import {list, show, create} from "../controllers/ProductController";

const router = express.Router();

///////* Express Route for Products */

//All Products
router.get("/products", list);

//Single Product
router.get("/products/:id", show);

//Create Product
router.post("/products", create);

export default router
