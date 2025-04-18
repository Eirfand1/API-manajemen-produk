const db = require('../db/knex')
const { getAllProductsHandler, addProductHandler, updateLowStock }  = require('../handler/ProductController')

module.exports = [
	{
		method: 'GET',
		path: '/product',
		handler: getAllProductsHandler 
	},
	{
		method : 'POST',
		path: '/product',
		handler: addProductHandler,
	},
	{
		method : 'PATCH',
		path : '/product/{id}/low-stock' ,
		handler: updateLowStock,
	},

	{
		method : 'DELETE',
		path : '/product/{id}' ,
		handler: async (req) => {
			const { id } = req.params
			return await db('products').where({id}).del().returning('*')
		}
	},
]

