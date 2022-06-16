exports.productValidation = (req, res, next) => {
  //Product Name Validation
  req.check("product_name", "Product name is Required").notEmpty();
  //Product Price Validation
  req
    .check("product_price", "Product Price is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Price only contains numeric value");
  //Product No. Of Stock Validation
  req
    .check("countInStock", "Number of Stock is required")
    .notEmpty()
    .isNumeric()
    .withMessage("Stock contains Numeric value only");
  //Product Description Validation
  req
    .check("product_description", "Description is Required")
    .notEmpty()
    .isLength({
      min: 20,
    })
    .withMessage("Description must be mim of 20 characters");

  req.check("category", "Please select a category").notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    const showError = errors.map((err) => err.msg)[0];
    return res.status(400).json({ error: showError });
  }
  next();
};

exports.registerValidation = (req, res, next) => {
  req
    .check("name", "Please provide name")
    .notEmpty()
    .trim()
    .isLength({
      min: 3,
    })
    .withMessage("Name must be three characters")
    .matches(/^[A-Z a-z]+$/)
    .withMessage("Name must not contain number");
  req
    .check("email", "Please provide email")
    .notEmpty()
    .isEmail()
    .withMessage("Please provide valid email address");

  const errors = req.validationErrors();
  if (errors) {
    const showError = errors.map((err) => err.msg)[0];
    return res.status(400).json({ error: showError });
  }
  next();
};
