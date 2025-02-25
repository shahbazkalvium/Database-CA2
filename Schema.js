
const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
})

const restaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    items:{
        type:[itemsSchema],
        default: []
    }
})

module.exports = mongoose.model('Schema', restaurantSchema);
