const express = require("express");
const orderController = require("../controllers/orderCtrl");

const router = express.Router();

router.post("/orders", orderController.createOrder);
router.get("/orders/:email", orderController.getOrderByEmail);
router.delete("/orders/:id", orderController.deleteOrder);

module.exports = router;
