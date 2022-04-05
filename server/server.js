require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const productRoutes = require("./routes/productRoutes");
const uploadRoutes = require("./routes/upload");

const path = require("path");

const app = express();

// middlewae
app.use(express.json());
app.use(cors());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

/// routes here

app.use("/api", uploadRoutes);

app.use("/api", productRoutes);

// connected to mongodb

const URL = process.env.MONGODB_URL;

mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Database connected...");
  }
);

// only for production this code

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// server running
const PORT = process.env.PORT || 5000;

//

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
