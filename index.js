const express = require("express");

const app = express();

app.use(express.json()); 

const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        stock: 25,
        rating: 4.3
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Footwear",
        price: 2499,
        stock: 40,
        rating: 4.5
    },
    {
        id: 3,
        name: "Laptop Stand",
        category: "Accessories",
        price: 999,
        stock: 30,
        rating: 4.2
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "Electronics",
        price: 4999,
        stock: 12,
        rating: 4.4
    },
    {
        id: 5,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    }
];


// Home route
app.get("/", (req, res) => {
    res.send("Express server is running");
});


// Get all products
app.get("/products", (req, res) => {
    res.status(200).json(products);
});


// Get product by id
app.get("/products/:id", (req, res) => {

    const productId = Number(req.params.id);

    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
});


// Get products by category
app.get("/products/category/:categoryName", (req, res) => {

    const category = req.params.categoryName;

    const data = products.filter(p => p.category === category);

    res.status(200).json(data);
});


// Create new product
app.post("/products", (req, res) => {

    const newProduct = {

        id: products.length + 1, 

        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Created successfully",
        product: newProduct
    });
});

app.put("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products[index] = {

        id: id,

        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating

    };

    res.status(200).json(products[index]);

});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});