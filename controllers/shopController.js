const products = require('../products.json')

exports.getProduct = ("/product", (req, res, next) => {
    console.log(products);
  res.render("product", {
      path: "/product",
      products: products
  });
});

exports.getCategory = ("/category", (req, res, next) => {
  res.render("category", {
    path: "/category",
  });
});

exports.getCart = ("/cart", (req, res, next) => {
  res.render("cart", {
    path: "/cart",
  });
});

exports.getCheckout = ("/checkout", (req, res, next) => {
  res.render("checkout", {
    path: "/checkout",
  });
});

exports.getContact = ("/contact", (req, res, next) => {
  res.render("contact", {
    path: "/contact",
  });
});
