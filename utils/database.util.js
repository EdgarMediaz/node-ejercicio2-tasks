const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
	host: 'localhost',
	username: 'postgres',
	password: 'Emed1213',
	database: 'tasks',
	port: 5432,
	dialect: 'postgres',
	logging: false,
});

module.exports = { db, DataTypes };