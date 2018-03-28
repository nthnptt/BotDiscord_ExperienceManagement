const ConfigManager = require('./ConfigManager.js')
const Sequelize = require('sequelize');
module.exports = new Sequelize(ConfigManager.db.database, ConfigManager.db.login, ConfigManager.db.passwd, {
  host: ConfigManager.db.hostname,
  dialect: ConfigManager.db.engine,
  operatorsAliases: false,
  logging: false,
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
