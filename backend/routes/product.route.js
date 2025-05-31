const express = require('express');
const { getAllProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product');
const router = express.Router();


router.get("/", getAllProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


module.exports = router 