const knex = require("../database/knex")

class TagsController {
  async index(resquest, response) {
    const user_id = resquest.user.id

    const tags = await knex("movie_tags").where({ user_id })

    return response.json(tags)
  }
}

module.exports = TagsController
