const mongoose = require("mongoose");

const carritoSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Carrito',carritoSchema);