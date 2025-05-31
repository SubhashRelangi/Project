const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const productRoutes = require('./routes/product.route');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // allows us to access JSON data in the req.body

app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at port ${PORT}`);
}); 