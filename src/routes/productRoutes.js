const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Adjust the path as needed

router.post('/products', productController.addProduct);
router.get('/products/:product_id', productController.getProduct);
router.put('/products/:product_id', productController.updateProduct);
router.delete('/products/:product_id', productController.deleteProduct);
module.exports = router;
