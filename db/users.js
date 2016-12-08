var env = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[env]
var knex = require('knex')(config)

module.exports = {
  findAll: (table, callback) => {
    knex.raw('select * from users')
    .then(res => callback(null, res))
  },

  findByUsername: (username, callback) => {
    console.log('TRYING TO FIND USER: ', username)
    knex('users')
    .where('username', username)
    .then(res => callback(null, res[0]))
  },

  findById: (id, callback) => {
    knex('users')
    .where('id', id)
    .then(res => callback(null, res[0]))
  },

  add: (data, callback) => {
    knex('users')
    .insert({ username: data.username, password: data.password })
    .then(res => callback(null, res))
  }
}
