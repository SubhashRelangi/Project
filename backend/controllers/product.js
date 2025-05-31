const Product = require('../model/product.model');
const mongoose = require('mongoose');

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (err) {
        console.log("error in fetching products:", err.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const createProduct = async (req, res) => {
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, nessage: "Please provide all fields" });
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (err) {
        console.log("Error in Create Product:", err.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("invalid product id");
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("invalid product id");
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product Deleted" });
    } catch (err) {
        console.log("Error in deleting product", err.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct
}