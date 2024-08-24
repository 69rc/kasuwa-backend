const {
  categories,
  typesByCategory,
} = require("../controllers/categoriescontrol");

module.exports = (app) => {
  app.get("/api/categories", categories);
  app.get("/api/categories/types", typesByCategory);
};
