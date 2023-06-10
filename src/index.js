const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productosRoutes = require('./routes/productos');
//const multer = require('multer');
const cors = require('cors');
const app = express();
//const upload = multer();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/api',productosRoutes);
app.use(express.static(__dirname + '/public'));



//Rutas
app.get('/',(req,res)=>{
    res.render('index')
});

/*

PRUEBA PARA ENVIAR IMAGENES

app.post('/api/productos', upload.single('image'), (req, res) => {
    const { name, categoria, price, stock } = req.body;
    const imageBuffer = req.file.buffer;
  
    const product = new Product({ name, categoria, price, stock, image: imageBuffer });
  
    product.save()
      .then(() => {
        res.status(201).json(product);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error al guardar el producto' });
      });
  });*/
//Conexion mongodb
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("Conectado a mongo"))
    .catch((error) => console.log(error));

//Servidor
app.listen(port,()=>{
    console.log("Server on port ",port);
})