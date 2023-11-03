const { Model, DataTypes, Sequelize } = require('sequelize')

const USER_TABLE = 'users'

const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
    field: 'created_at'
  }
}

class User extends Model {
  static associate (models) {
    // this.hasMany(models.Post, {
    //   as: 'posts',
    //   foreignKey: 'userId'
    // })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
