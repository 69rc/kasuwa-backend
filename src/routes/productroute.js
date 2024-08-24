const { products, getProduct } = require("../controllers/productcontrol");

module.exports = (app) => {
  app.post("/api/products", products);
  app.get("/api/get-products", getProduct);
};
