const postRouter = require('./post.router')
// Mas routers que crees

function routerAPI (app) {
  app.use('/posts', postRouter)
}

module.exports = routerAPI
