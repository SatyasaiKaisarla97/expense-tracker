const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense-tracker', 'root', 'Satyasaik123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
