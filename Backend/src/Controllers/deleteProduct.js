const Cart = require("../models/carrito");
const Product = require("../models/productos");

const deleteProduct = async(req,res)=>{
    const { productId } = req.params;
    const productInCart = await Cart.findById(productId);
    const {name,categoria,price,stock,img,_id} = await Product.findOne({
        name: productInCart.name,
    });

    await Cart.findByIdAndDelete(productId);
    await Product.findByIdAndUpdate(
        _id,
        { inCart: false, name,categoria,price,stock,img},
        { new: true }
    ).then((product)=>{
        res.json({
            mensaje: 'El producto $(product.name) fue eliminado del carrito',
        });
    }).catch((error)=>res.json({mensaje:"Hubo un error"}));
};

module.exports = deleteProduct;