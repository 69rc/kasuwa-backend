import db from "../models";

// Fetch all categories
export const categories = (req, res) => {
  db.sequelize
    .query("select name from category")
    .then((results) => res.status(200).json({ success: true, results }))
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

export const typesByCategory = (req, res) => {
  const {category} = req.query;
  // console.log(category)

  db.sequelize
    .query(
      `SELECT t.type_name FROM types_of_category t JOIN category c ON t.category_id = c.id WHERE c.name = "${category}"`
    )
    .then((results) => res.status(200).json({ success: true, results }))
    .catch((err) => res.status(500).json({ success: false, message: err }));
};
