const express = require("express");
const productController = require("../controllers/productCrtl");

const router = express.Router();

router.post("/products", productController.createProducts);

module.exports = router;
