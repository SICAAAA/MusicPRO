const getProducts = require("./getProducts");
const addProduct = require("./addProduct");
const getProductsCart = require("./getProductsCart");
const addProductCart = require("./addProductCart");
const putProduct = require("./putProduct");
const deleteProduct = require("./deleteProduct");
const payTransbank = require("./payTransbank");
const putTransbank = require("./putTransbank");
const deleteAllProducts = require("./deleteAllProducts");

module.exports = {
    getProducts,
    addProduct,
    getProductsCart,
    addProductCart,
    putProduct,
    deleteProduct,
    payTransbank,
    putTransbank,
    deleteAllProducts
};