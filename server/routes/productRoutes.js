const express = require("express");
const productController = require("../controllers/productCrtl");

const router = express.Router();
// endpoint will be - https://localhost:5000/api/products
router.post("/products", productController.createProducts);
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getByIdProduct);

module.exports = router;
