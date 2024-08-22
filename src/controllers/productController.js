// productController.js
const db = require('../models');

// Add a new product
module.exports.addProduct = (req, res) => {
  const {query_type = 'add',title = null, description =null, price = null, category_id = null, weight = null, vendor =null, status =null } =req.body;
   try {
    const resp = await db.sequelize.query(
      `call ManageProduct(
      :query_type,
      :id,
      :title.
      :description,
      price,
     category_id,
     weight,
     vendor,
     status
      )`,
      {
        replacement
      }
    );
   }
}
