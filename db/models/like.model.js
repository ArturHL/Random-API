const { DataTypes, Model, Sequelize } = require('sequelize') // Asegúrate de importar tu instancia de Sequelize

const LIKE_TABLE = 'likes'

const LikeSchema = {
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
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}
class Like extends Model {
  static config (sequelize) {
    return {
      sequelize,
      tableName: LIKE_TABLE,
      modelName: 'Like',
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
  } // End of associate function.
}
module.exports = { LIKE_TABLE, LikeSchema, Like }
