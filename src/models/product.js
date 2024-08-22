module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    vendor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'products',
    timestamps: false
  });

  return Product;
};
