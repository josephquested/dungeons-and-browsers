var env = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[env]
var knex = require('knex')(config)

module.exports = {

  findById: (id, callback) => {
    knex('characters')
    .where('id', id)
    .then(res => callback(null, res[0]))
  },

  findByUserId: (userid, callback) => {
    knex('characters')
    .where('userid', userid)
    .then(res => callback(null, res))
  },

  add: (character, callback) => {
    character.data = JSON.stringify(character.data)
    knex('characters')
    .insert({ userid: character.userid, data: character.data })
    .then(res => callback(null, res))
  }
}
