/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable('suppliers', (table) => {
		table.increments('id').primary();
		table.string('name')
		table.string('phone')
		table.string('address')
		table.string('email')
	})   
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTable('suppliers') 
};
