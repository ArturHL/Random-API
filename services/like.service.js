const sequelize = require('../libs/sequalize')
class Like {
  async find () {
    const likes = await sequelize.models.Like.findAll()
    return likes
  }

  async findOne (userId, postId) {
    const like = await sequelize.models.Like.findAll({ where: { userId, postId } })
    if (like.length === 0) {
      return false
    } else {
      return true
    }
  }

  async create (data) {
    const like = await sequelize.models.Like.create(data)
    return like
  }

  async update (id, data) {
    const like = await this.findOne(id)
    const updatedlike = await like.update(data)
    return updatedlike
  }

  async delete (userId, postId) {
    const like = await sequelize.models.Like.destroy({ where: { userId, postId } })
    return like
  }
}

module.exports = Like
