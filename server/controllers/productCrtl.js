const Product = require("../models/productModel");

const productController = {
  async createProducts(req, res) {
    try {
      const { name, price, description, images, rating, stock } = req.body;

      if (!images) {
        return res.status(400).json({ message: "No image uploaded." });
      }
      if (!description || !name) {
        return res
          .status(400)
          .json({ message: "You must enter description & name." });
      }

      if (!price) {
        return res.status(400).json({ message: "You must enter a price." });
      }

      const newProduct = new Product({
        name,
        price,
        description,
        images,
        rating,
        stock,
      });

      await newProduct.save();

      res.json({
        message: "Created a Product.",
      });
    } catch (err) {
      return res.status(500).json({ message: "Server Error." });
    }
  },
  async getAllProducts(req, res) {
    let products;
    try {
      products = await Product.find()
        .select("-updatedAt -__v")
        .sort({ _id: -1 });
    } catch (err) {
      return res.status(500).json({ message: "Server Error" });
    }

    res.json(products);
  },

  async getByIdProduct(req, res, next) {
    let product;
    try {
      product = await Product.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return res.status(500).json({ message: "Server Error" });
    }

    res.json(product);
  },
};

module.exports = productController;
