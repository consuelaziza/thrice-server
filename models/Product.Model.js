const { Schema, model } = require("mongoose")


const productSchema = new Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    category: {
        type: Number,
        default: 1
    },
    brand: {
        type: Number,
        default: 1
    },
    condition: {
        type: Number,
        default: 1
    },
    
}, { timestamps: true })


const Product = model('Product', productSchema);

module.exports =  Product 