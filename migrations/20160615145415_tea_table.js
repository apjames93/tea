
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tea_table', function(table){
    table.increments();
    table.string('name');
    table.string('type');
    table.boolean('caffine');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tea_table');
};
