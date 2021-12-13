const express = require('express')
const router = express.Router()

let ProductModel = require('../models/Product.Model')

router.get('/product', (req, res) => {
    console.log("heyy")
    ProductModel.find()
         .then((product) => {
              res.status(200).json(product)
         })
         .catch((err) => {
              res.status(500).json({
                   error: 'Something went wrong',
                   message: err
              })
         })         
})

// will handle all POST requests to http:localhost:5005/api/create
router.post('/create', (req, res) => {  
   const {writer, title, description, price, images, category, brand, condition} = req.body;
   console.log(req.body)
   ProductModel.create({writer, title, description, price, images, category, brand, condition})
         .then((response) => {
              res.status(200).json(response)
         })
         .catch((err) => {
              res.status(500).json({
                   error: 'Something went wrong',
                   message: err
              })
         })  
})

// will handle all GET requests to http:localhost:5005/api/product/:productId
router.get('/product/:productId', (req, res) => {
   ProductModel.findById(req.params.productId)
    .then((response) => {
         res.status(200).json(response)
    })
    .catch((err) => {
         res.status(500).json({
              error: 'Something went wrong',
              message: err
         })
    }) 
})

// will handle all DELETE requests to http:localhost:5005/api/product/:id
router.delete('/product/:id', (req, res) => {
    ProductModel.findByIdAndDelete(req.params.id)
         .then((response) => {
              res.status(200).json(response)
         })
         .catch((err) => {
              res.status(500).json({
                   error: 'Something went wrong',
                   message: err
              })
         })  
})

// will handle all PATCH requests to http:localhost:5005/api/todos/:id
router.patch('/product/:id', (req, res) => {
   let id = req.params.id
   const {writer, title, description, price, images, category, brand, condition} = req.body;
   ProductModel.findByIdAndUpdate(id, {$set: {writer: writer, title: title, description: description, price: price, images: images, category: category, brand: brand, condition: condition}}, {new: true})
         .then((response) => {
              res.status(200).json(response)
         })
         .catch((err) => {
              res.status(500).json({
                   error: 'Something went wrong',
                   message: err
              })
         }) 
})

router.post('product/getProducts', (req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    let findArgs = {};
    let term = req.body.searchTerm;

    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    console.log(findArgs)
 
    if (term) {
        ProductModel.find(findArgs)
            .find({ $text: { $search: term } })
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    } else {
        ProductModel.find(findArgs)
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    }

});






module.exports = router;