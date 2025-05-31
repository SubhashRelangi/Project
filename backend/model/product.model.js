const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    price:{
       type: String,
        require: true 
    },
    image:{
        type: String,
        require: true 
    }
}, {
    timestamps: true // createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product