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

      if (!stock) {
        return res.status(400).json({ message: "You must enter stock." });
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
  //   async deleteProducts(req, res, next) {
  //     try {
  //       try {
  //         await Product.findByIdAndDelete(req.params.id);
  //         res.json({ message: "Deleted a Product" });
  //       } catch (err) {
  //         return next(err);
  //       }
  //     } catch (err) {
  //       return next(err);
  //     }
  //   },
  //   async updateProducts(req, res, next) {
  //     try {
  //       const { title, price, description, content, images, category } = req.body;
  //       if (!images) {
  //         return next(CustomErrorHandler.badRequest("No image upload"));
  //       }

  //       await Product.findOneAndUpdate(
  //         { _id: req.params.id },
  //         {
  //           title: title.toLowerCase(),
  //           price,
  //           description,
  //           content,
  //           images,
  //           category,
  //         }
  //       );

  //       res.json({ message: "Updated a Product" });
  //     } catch (err) {
  //       return next(err);
  //     }
  //   },
};

module.exports = productController;
