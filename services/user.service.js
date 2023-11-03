const sequelize = require('../libs/sequalize')

class Users {
  async find () {
    const users = await sequelize.models.User.findAll()
    return users
  }

  async findOne (id) {
    const user = await sequelize.models.User.findByPk(id)
    if (!user) {
      console.log('error')
    }
    return user
  }

  async findByEmail (emailTofind) {
    const user = await sequelize.models.User.findOne({ where: { email: emailTofind } })
    return user || null
  }

  async create (data) {
    const user = await sequelize.models.User.create(data)
    return user
  }

  async update (id, data) {
    const user = await this.findOne(id)
    const updatedUser = await user.update(data)
    return updatedUser
  }

  async delete (id) {
    const user = await this.findOne(id)
    await user.destroy()
    return id
  }
}

module.exports = Users
