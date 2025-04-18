const db = require('../db/knex');

module.exports = [
  {
    method: 'GET',
    path: '/supplier',
    handler: async () => {
      const query =  await db('suppliers').select('*');
		return {
			success: true,
			data: query
		}
    },
  },
  {
    method: 'POST',
    path: '/supplier',
    handler: async (req) => {
      const { name, phone, address, email } = req.payload;
      const query = await db('suppliers').insert({ name, phone, address, email }).returning('*');
		return {
			success: true,
			message : 'Data berhasil di tambahkan',
			data : query
		}
    },
  },
];

