'use strict'

const Hapi = require('@hapi/hapi')
const helloworld = require('./routes/helloworld')
const products = require('./routes/products')
const suppliers = require('./routes/suppliers')


const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	})

	server.route(helloworld)
	server.route(products)
	server.route(suppliers)
	await server.start()

	console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
	console.log(err)
	process.exit(1)
})

init()
