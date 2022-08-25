const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Categories',
      underscored: true,
    });

  return Category;
}

module.exports = Category;
