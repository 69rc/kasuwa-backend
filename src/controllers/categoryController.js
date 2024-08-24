// const db = require("../models/index"); // Adjust the path as needed

// // Create a new category
// module.exports.createCategory = async (req, res) => {
//   const {
//     query_type = 'create',
//     name = null,
//     description = null,
//   } = req.body;

//   console.log(req.body);

//   try {
//     const resp = await db.sequelize.query(
//       `CALL category(
//         :query_type,
//         :name,
//         :description
//       )`,
//       {
//         replacements: { 
//           query_type,
//           name,
//           description,
//         },
//         type: db.Sequelize.QueryTypes.RAW // Ensure the correct query type
//       }
//     );

//     res.status(200).json({ success: true, results: resp });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: 'Failed to create category' });
//   }
// };

// // Get all categories
// exports.getAllCategories = async (req, res) => {
//   try {
//     const query_type = 'read_all';

//     const categories = await db.sequelize.query(
//       `CALL product(:query_type, NULL, NULL)`,
//       {
//         replacements: { query_type },
//         type: db.Sequelize.QueryTypes.SELECT // Use SELECT for queries that return data
//       }
//     );

//     res.status(200).json(categories);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a category by ID
// exports.getCategoryById = async (req, res) => {
//   try {
//     const query_type = 'read_one';
//     const prod_id = req.params.id;

//     const category = await db.sequelize.query(
//       `CALL product(:query_type, :prod_id, NULL, NULL)`,
//       {
//         replacements: { query_type, prod_id },
//         type: db.Sequelize.QueryTypes.SELECT // Use SELECT for queries that return data
//       }
//     );

//     if (category.length > 0) {
//       res.status(200).json(category[0]); // Assuming the result is an array
//     } else {
//       res.status(404).json({ message: 'Category not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update a category
// exports.updateCategory = async (req, res) => {
//   try {
//     const query_type = 'edit';
//     const prod_id = req.params.id;
//     const { name, description } = req.body;

//     const resp = await db.sequelize.query(
//       `CALL product(:query_type, :prod_id, :name, :description)`,
//       {
//         replacements: { query_type, prod_id, name, description },
//         type: db.Sequelize.QueryTypes.RAW
//       }
//     );

//     // Assuming the stored procedure returns the updated category
//     if (resp.affectedRows > 0) {
//       res.status(200).json({ success: true, message: 'Category updated successfully' });
//     } else {
//       res.status(404).json({ message: 'Category not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete a category
// exports.deleteCategory = async (req, res) => {
//   try {
//     const query_type = 'delete';
//     const prod_id = req.params.id;

//     const resp = await db.sequelize.query(
//       `CALL product(:query_type, :prod_id, NULL, NULL)`,
//       {
//         replacements: { query_type, prod_id },
//         type: db.Sequelize.QueryTypes.RAW
//       }
//     );

//     if (resp.affectedRows > 0) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: 'Category not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
