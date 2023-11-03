'use strict'

const { LikeSchema, LIKE_TABLE } = require('../models/like.model.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(LIKE_TABLE, LikeSchema)

    await queryInterface.addConstraint('likes', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'likes_userId_fk',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

    await queryInterface.addConstraint('likes', {
      fields: ['postId'],
      type: 'foreign key',
      name: 'likes_postId_fk',
      references: {
        table: 'posts',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(LIKE_TABLE)
  }
}
