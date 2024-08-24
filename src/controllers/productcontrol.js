import { json } from "sequelize";
import db from "../models";

export const products = (req, res) => {
  const {
    product_name = "",
    product_description = "",
    product_Category = "",
    product_type = "",
    product_price = "",
    product_quantity = "",
  } = req.body;
  console.log(JSON.stringify(req.body));

  db.sequelize
    .query(
      `insert into product(product_name, product_description, product_Category, product_type, product_price, product_quantity)
       values("${product_name}", "${product_description}", "${product_Category}", "${product_type}", "${product_price}", "${product_quantity}")`
    )
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

export const getProduct = (req, res) => {
  db.sequelize
    .query("select * from product")
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((err) => res.status(500).json({ success: false, message: err }));
};
