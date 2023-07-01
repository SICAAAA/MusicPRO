const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const controllers = require("./Controllers");
const axios = require('axios');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//Rutas
//GET
app.get('/',(req,res)=>{
    res.render('index')
});
app.get("/products",controllers.getProducts);
app.get("/products-cart",controllers.getProductsCart);
  

//POST
app.post("/products-cart",controllers.addProductCart);
app.post("/products",controllers.addProduct);
app.post("/transbank",controllers.payTransbank);

//PUT
app.put("/products-cart/:productId",controllers.putProduct);
app.put("/transbank/:tokenws",controllers.putTransbank);

//DELETE
app.delete("/products-cart/:productId",controllers.deleteProduct);
app.delete("/products-cart",controllers.deleteAllProducts);


//Conexion mongodb
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("Conectado a mongo"))
    .catch((error) => console.log(error));

//Servidor
app.listen(port,()=>{
    console.log("Server on port ",port);
})

module.exports = app;