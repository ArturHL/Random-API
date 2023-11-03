'use strict'

const { COMMENT_TABLE, CommentSchema } = require('../models/comment.model')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(COMMENT_TABLE, CommentSchema)
    await queryInterface.addConstraint(COMMENT_TABLE, {
      fields: ['userId'],
      type: 'foreign key',
      name: 'comments_userId_fk',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
    await queryInterface.addConstraint(COMMENT_TABLE, {
      fields: ['postId'],
      type: 'foreign key',
      name: 'comments_postId_fk',
      references: {
        table: 'posts',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(COMMENT_TABLE)
  }
}
