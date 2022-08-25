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

  Category.associate = (models) => {
    Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId', as: 'blogPosts',
    });
  }

  return Category;
}

module.exports = Category;
