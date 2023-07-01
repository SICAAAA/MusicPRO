const Cart = require("../models/carrito");
const Product = require("../models/productos");

const deleteAllProducts = async (req, res) => {
    try {
      // Obtener todos los productos en el carrito
      const productsInCart = await Cart.find();
      
      // Iterar sobre los productos y eliminarlos del carrito
      for (const productInCart of productsInCart) {
        const { _id, name, categoria, price, stock, img } = await Product.findOne({
          name: productInCart.name,
        });
  
        await Cart.findByIdAndDelete(productInCart._id);
        await Product.findByIdAndUpdate(
          _id,
          { inCart: false, name, categoria, price, stock, img },
          { new: true }
        );
      }
  
      res.json({
        mensaje: 'Se eliminaron todos los productos del carrito',
      });
    } catch (error) {
      res.status(500).json({ mensaje: 'Hubo un error' });
    }
  };
  
  module.exports = deleteAllProducts;
  
  
  