const express = require('express');
const routes = express.Router();

const ProductController = require('./Controllers/ProductController')

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

module.exports = routes;