const postRouter = require('./post.router')
const userRouter = require('./users.router')
const commentRouter = require('./comment.router')
const likeRouter = require('./likes.router')
// Mas routers que crees

function routerAPI (app) {
  app.use('/posts', postRouter)
  app.use('/users', userRouter)
  app.use('/comments', commentRouter)
  app.use('/likes', likeRouter)
}

module.exports = routerAPI
