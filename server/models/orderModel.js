const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
