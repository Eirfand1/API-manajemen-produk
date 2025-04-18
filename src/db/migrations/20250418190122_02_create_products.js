/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable('products', (table) => {
		table.increments('id').primary()
		table.string('name')
		table.integer('stock')
		table.boolean('is_low_stock').defaultTo(false)
		table.integer('supplier_id').references('id').inTable('suppliers').onDelete('SET NULL')
	}) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
 return knex.schema.dropTable('products') 
};
