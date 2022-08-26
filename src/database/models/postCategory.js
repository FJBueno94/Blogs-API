const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'PostCategory',
    underscored: true,
  });
  
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'postCategories',
      through: 'PostCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId', 
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: 'PostCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }
  
  return PostCategory;
}

module.exports = PostCategory;