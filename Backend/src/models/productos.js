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
    },
    img:{
        type: String,
        required: true
    },
    inCart:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Producto',productoSchema);