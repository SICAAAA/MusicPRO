const express = require("express");
const carritoSchema = require('../models/carrito');
//const productoSchema = require ('../models/productos');

const router = express.Router();

//Mostrar productos
/*const getProductsCart = async(req,res)=>{
    const productsCart = await carritoSchema.find();
    if (productsCart){
        res.json({productsCart});
    }else{
        res.json({mensaje: "No hay productos en el carrito"});
    }
}

//Agregar producto al carrito
const addProductCart = async(req,res)=>{
    const {name,categoria,price} = req.body;
    const estaEnProducts = await productoSchema.findOne({name});
    const noEstaVacio = name !=="" && categoria !=="" && price !=="";
    const estaEnElCarrito = await carritoSchema.findOne({name});
    if(!estaEnProducts){
        res.status(400).json({
            mensaje: "Este producto no se encuentra en la base de datos"
        })
    }else if (noEstaVacio && !estaEnElCarrito){
        const newProductInCart = new carritoSchema({name,categoria,price,amount: 1});

        await productoSchema.findByIdAndUpdate(
            estaEnProducts?._id,
            { inCart: true,name,categoria,price},
            { new: true}
        )
        .then((product)=>{
            newProductInCart.save();
            res.json({
                mensaje: "Producto agregado",
                product,
            });
        })
        .catch((error)=> console.log(error));
    }else if(estaEnElCarrito){
        res.status(400).json({
            mensaje: "Producto ya en el carrito"
        });
    }
}

//Actualizar 
const putProduct = async (req,res)=>{
    const { productId } = req.params;
    const { query }= req.query;
    const body = req.body;
    const productBuscado = await carritoSchema.finById(productId);
    if(!query){
        res.status(400).json({
            mensaje: "Debes enviar una query"
        });
    }else if(productBuscado && query === "add"){
        body.amount = body.amount + 1;
        await carritoSchema.findByIdAndUpdate(productId,body,{
            new: true,
        }).then((product)=>{
            res.json({
                mensaje: 'El producto $(product.name) fue actualizado',
                product,
            });
        });
    } else if( productBuscado && query === "del"){
        body.amount = body.amount - 1;
        await carritoSchema.findByIdAndUpdate(productId,body,{
            new: true,
        }).then((product)=>{
            res.json({
                mensaje: 'El producto $(product.name) fue actualizado',
                product,
            });
        });
    }else{
        res.status(400).json({
            mensaje: "Error"
        });
    };
}

//BORRAR
const deleteProduct = async (req,res)=>{
    const { productId } = req.params;
    const productInCart = await carritoSchema.finById(productId);
    const {name,categoria,price,stock,_id} = await productoSchema.findOne({
        name: productInCart.name,
    });

    await carritoSchema.findByIdAndDelete(productId);
    await productoSchema.findByIdAndUpdate(
        _id,
        { inCart: false, name,categoria,price,stock},
        { new: true }
    ).then((product)=>{
        res.json({
            mensaje: 'El producto $(product.name) fue eliminado del carrito',
        });
    }).catch((error)=>res.json({mensaje:"Hubo un error"}));
}

module.exports = getProductsCart,addProductCart,putProduct,deleteProduct;*/

//Create producto
router.post('/carrito', async(req,res) => {
    /*const carrito = carritoSchema(req.body);
    carrito
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));*/
    const {name,categoria,price} = req.body;
    const estaEnProducts = await productoSchema.findOne({name});
    const noEstaVacio = name !=="" && categoria !=="" && price !=="";
    const estaEnElCarrito = await carritoSchema.findOne({name});
    if(!estaEnProducts){
        res.status(400).json({
            mensaje: "Este producto no se encuentra en la base de datos"
        })
    }else if (noEstaVacio && !estaEnElCarrito){
        const newProductInCart = new carritoSchema({name,categoria,price,amount: 1});

        await productoSchema.findByIdAndUpdate(
            estaEnProducts?._id,
            { inCart: true,name,categoria,price},
            { new: true}
        )
        .then((product)=>{
            newProductInCart.save();
            res.json({
                mensaje: "Producto agregado",
                product,
            });
        })
        .catch((error)=> console.log(error));
    }else if(estaEnElCarrito){
        res.status(400).json({
            mensaje: "Producto ya en el carrito"
        });
    }
});

//Buscar todos
router.get('/carrito', async(req,res) => {
    /*carritoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));*/
    const productsCart = await carritoSchema.find();
    if (productsCart){
        res.json({productsCart});
    }else{
        res.json({mensaje: "No hay productos en el carrito"});
    }
});

//Actualizar
router.put('/carrito/:id', async(req,res) => {
    /*const { id } = req.params;
    const { name,categoria,price,stock} = req.body;
    carritoSchema
    .updateOne({ _id:id },{ $set: {name,categoria,price,stock}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));*/
    const { productId } = req.params;
    const { query }= req.query;
    const body = req.body;
    const productBuscado = await carritoSchema.finById(productId);
    if(!query){
        res.status(400).json({
            mensaje: "Debes enviar una query"
        });
    }else if(productBuscado && query === "add"){
        body.amount = body.amount + 1;
        await carritoSchema.findByIdAndUpdate(productId,body,{
            new: true,
        }).then((product)=>{
            res.json({
                mensaje: 'El producto $(product.name) fue actualizado',
                product,
            });
        });
    } else if( productBuscado && query === "del"){
        body.amount = body.amount - 1;
        await carritoSchema.findByIdAndUpdate(productId,body,{
            new: true,
        }).then((product)=>{
            res.json({
                mensaje: 'El producto $(product.name) fue actualizado',
                product,
            });
        });
    }else{
        res.status(400).json({
            mensaje: "Error"
        });
    };
});

//Borrar un producto
router.delete('/carrito/:id', async(req,res) => {
    /*const { id } = req.params;
    carritoSchema
    .deleteOne( {_id:id} )
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));*/
    const { productId } = req.params;
    const productInCart = await carritoSchema.finById(productId);
    const {name,categoria,price,stock,_id} = await productoSchema.findOne({
        name: productInCart.name,
    });

    await carritoSchema.findByIdAndDelete(productId);
    await productoSchema.findByIdAndUpdate(
        _id,
        { inCart: false, name,categoria,price,stock},
        { new: true }
    ).then((product)=>{
        res.json({
            mensaje: 'El producto $(product.name) fue eliminado del carrito',
        });
    }).catch((error)=>res.json({mensaje:"Hubo un error"}));
});

module.exports = router;