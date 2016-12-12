exports.up = function(knex, Promise) {
  console.log('creating characters table')
  return knex.schema.createTableIfNotExists('characters', (table) => {
    table.increments('id')
    table.string('userid')
    table.varchar('data')
    table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('characters').then(() => {
    console.log('users table dropped')
  })
};
