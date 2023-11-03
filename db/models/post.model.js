const { Model, DataTypes, Sequelize } = require('sequelize')

const POST_TABLE = 'posts'

const PostSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  overview: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT, // Use TEXT for longer content
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
  }
}

class Post extends Model {
  static associate (models) {
    // Define any associations with other models here
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: POST_TABLE,
      modelName: 'Post',
      timestamps: false
    }
  }
}

module.exports = { POST_TABLE, PostSchema, Post }
