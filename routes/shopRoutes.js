const express = require("express");

const router = express.Router();

const shopController = require('../controllers/shopController')

router.get('/product', shopController.getProduct)

router.get('/category', shopController.getCategory)

router.get('/cart', shopController.getCart)

router.get('/checkout', shopController.getCheckout)

router.get('/contact', shopController.getContact)

module.exports = router