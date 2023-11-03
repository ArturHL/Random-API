const { DataTypes, Model, Sequelize } = require('sequelize')

const COMMENT_TABLE = 'comments'

const CommentSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'posts',
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}

class Comment extends Model {
  static config (sequelize) {
    return {
      sequelize,
      tableName: COMMENT_TABLE,
      modelName: 'Comment',
      timestamps: true
    }
  }

  static associate (models) {
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    })
    this.belongsTo(models.Post, {
      as: 'post',
      foreignKey: 'postId'
    })
  }
}

module.exports = { COMMENT_TABLE, CommentSchema, Comment }
