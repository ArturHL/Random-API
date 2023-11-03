const { User, UserSchema } = require('./user.model')
const { Post, PostSchema } = require('./post.model')
const { Like, LikeSchema } = require('./like.model')
const { Comment, CommentSchema } = require('./comment.model')

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Post.init(PostSchema, Post.config(sequelize))
  Like.init(LikeSchema, Like.config(sequelize))
  Comment.init(CommentSchema, Comment.config(sequelize))
}

module.exports = setupModels
