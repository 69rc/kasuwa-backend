export default (sequelize, DataTypes) => {
    const Category = sequelize.define(
      'Category',
      {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        
      },
      {}
    );
  
    Category.associate = function(models) {
      // Define the association from Category's perspective
      // No need to specify associations here if using 'belongsTo' in Product model
    };
  
    return Category;
  };
  