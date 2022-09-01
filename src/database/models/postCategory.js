const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'BlogPosts',
        key: 'id'
      },
    },
    categoryId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Categories',
        key: 'id'
      },
    }, 
  },
  {
    timestamps: false,
  });
  
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: 'PostCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId', 
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: 'PostCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  }
  
  return PostCategory;
}

module.exports = PostCategory;