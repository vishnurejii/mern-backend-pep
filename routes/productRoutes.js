import express from "express"
import { addProducts, showProducts, deleteProducts, updateProducts } from "../controllers/productController.js"



const router = express.Router()

router.post("/add", addProducts)
router.get("/", showProducts)
router.delete("/:id", deleteProducts)
router.patch("/:id", updateProducts)


export default router