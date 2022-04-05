const express = require("express");
const productController = require("../controllers/productCrtl");

const router = express.Router();

router.post("/products", productController.createProducts);
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getByIdProduct);

module.exports = router;
