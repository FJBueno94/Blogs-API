const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'PostCategory',
    underscored: true,
  });
  
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: 'PostCategories',
      foreignKey: 'postId',
      otherKey: 'categoryId', 
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: 'PostCategories',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }
  
  return PostCategory;
}

module.exports = PostCategory;