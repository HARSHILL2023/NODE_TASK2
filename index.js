const experss = require("express")

const app = experss();

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

app.get("/", (req, res) => {
    res.send("Express server is running");
});


app.get("/products", (req, res) => {

    res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = products.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});


app.get("/products/category/:categoryName",(req,res)=>{
            let store = req.params.categoryName;
            let data= products.find(u=>u.category===store)

            res.status(200).json(data);
});

app.post()


app.listen(3000, () => {
    console.log("server is started hehehee in port 3000")
});