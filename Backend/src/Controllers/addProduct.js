const Product = require("../models/productos");

const addProduct = async(req,res)=>{
    const producto = Product(req.body);
    producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
};

module.exports = addProduct;