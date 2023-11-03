const sequelize = require('../libs/sequalize')
class Post {
  async find () {
    const posts = await sequelize.models.Post.findAll()
    return posts
  }

  async findOne (id) {
    const post = await sequelize.models.Post.findByPk(id)
    if (!post) {
      console.log('error')
    }
    return post
  }

  async create (data) {
    const post = await sequelize.models.Post.create(data)
    return post
  }

  async update (id, data) {
    const post = await this.findOne(id)
    const updatedPost = await post.update(data)
    return updatedPost
  }

  async delete (id) {
    const post = await this.findOne(id)
    await post.destroy()
    return id
  }
}

module.exports = Post
