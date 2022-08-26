const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
      through: 'PostCategory',
    });
  }

  return Category;
}

module.exports = Category;
