const Cart = require("../models/carrito");
const Product = require("../models/productos");

const addProductCart = async(req,res)=>{
    const {name,categoria,price,img} = req.body;
    const estaEnProducts = await Product.findOne({name});
    const noEstaVacio = name !=="" && categoria !=="" && price !=="" && img !=="";
    const estaEnElCarrito = await Cart.findOne({name});
    if(!estaEnProducts){
        res.status(400).json({
            mensaje: "Este producto no se encuentra en la base de datos"
        })
    }else if (noEstaVacio && !estaEnElCarrito){
        const newProductInCart = new Cart({name,categoria,price,img,amount: 1});

        await Product.findByIdAndUpdate(
            estaEnProducts?._id,
            { inCart: true,name,categoria,price,img},
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

module.exports = addProductCart;