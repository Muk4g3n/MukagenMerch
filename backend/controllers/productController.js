import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Add product
// @route POST /api/products/add
// @access private
const addProduct = asyncHandler(async (req, res) => {
  const { name, color } = req.body;

  const user = req.user._id;

  const product = await Product.create({
    name,
    color,
    user,
  });

  if (product) {
    res.status(201).json({ message: "Product has been saved" });
  } else {
    res.status(400);
    throw new Error("Could not save the product");
  }
});

// @desc delete product
// @route DELETE /api/products/delete
// @access private
const deleteProduct = asyncHandler(async (req, res) => {
  const { productid } = req.body;
  console.log("product id", productid);
  const product = await Product.findByIdAndDelete(productid);

  // console.log(product);

  if (product) {
    res.status(201).json({ data: "Product has been deleted" });
  } else {
    res.status(400);
    throw new Error("Could not delete the product");
  }
});

// @desc get products
// @route GET /api/products/getproducts
// @access private

const getproducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ user: req.user._id });

  if (products) {
    res.status(201).json({ data: products });
  } else {
    res.status(400);
    throw new Error("Could not get the products");
  }
});

export { addProduct, deleteProduct, getproducts };
