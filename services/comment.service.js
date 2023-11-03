const sequelize = require('../libs/sequalize')

class Comment {
  async find () {
    const comments = await sequelize.models.Comment.findAll()
    return comments
  }

  async findComments (id) {
    const comment = await sequelize.models.Comment.findAll({ where: { postId: id } })
    console.log(id)
    if (comment.length === 0) {
      console.log('error')
    }
    return comment
  }

  async create (data) {
    const comment = await sequelize.models.Comment.create(data)
    return comment
  }

  async update (id, data) {
    const comment = await this.findOne(id)
    const updatedcomment = await comment.update(data)
    return updatedcomment
  }

  async delete (id) {
    const comment = await this.findOne(id)
    await comment.destroy()
    return id
  }
}

module.exports = Comment
