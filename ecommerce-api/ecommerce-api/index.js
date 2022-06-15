const express = require("express");
require("dotenv").config();
const expressValidator = require("express-validator");
const db = require("./database/connection");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const authRoute = require("./routes/authRoute");
const orderRoute = require("./routes/orderRoute");
const paymentRoute = require("./routes/paymentRoute");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/public/uploads", express.static("public/uploads"));
app.get("/hello", (req, res) => {
  res.send(`Hello World, Welcome to Express JS and NODE`);
});
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", categoryRoute);
app.use("/api", productRoute);
app.use("/api", authRoute);
app.use("/api", orderRoute);
app.use("/api", paymentRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
