const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
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
    stock:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Producto',productoSchema);