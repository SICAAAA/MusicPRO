const express = require("express");
const productoSchema = require('../models/productos');

const router = express.Router();

//Create producto
router.post('/productos', (req,res) => {
    const producto = productoSchema(req.body);
    producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Buscar todos
router.get('/productos', (req,res) => {
    productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Buscar por id
router.get('/productos/:id', (req,res) => {
    const { id } = req.params;
    productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Actualizar
router.put('/productos/:id', (req,res) => {
    const { id } = req.params;
    const { name,categoria,price,stock,image} = req.body;
    productoSchema
    .updateOne({ _id:id },{ $set: {name,categoria,price,stock,image}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Borrar un producto
router.delete('/productos/:id', (req,res) => {
    const { id } = req.params;
    productoSchema
    .deleteOne( {_id:id} )
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;