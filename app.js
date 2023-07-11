const express = require('express')

const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));


const products = require("./products.json");

const shopRoutes = require('./routes/shopRoutes')


app.use(shopRoutes)

app.use('/', (req, res, next) => {
    products['latest'].forEach((item) => {
        console.log(item);
    });
    res.render('index', {
        path: '/',
        products: products
    })
});

app.listen('3000', () => {
    console.log('connected port 3000');
})