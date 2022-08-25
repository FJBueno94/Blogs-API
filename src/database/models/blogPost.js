const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  }

  return BlogPost;
}

module.exports = BlogPost;