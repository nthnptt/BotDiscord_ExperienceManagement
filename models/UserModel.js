const Sequelize = require('sequelize');
const DBManager = require('../DBManager.js');

const User = DBManager.define('users',{
  tag: {
    type: Sequelize.STRING
  },
  exp: {
    type: Sequelize.INTEGER
  },
  niveau: {
    type: Sequelize.INTEGER
  },
  lastGainXp: {
    type: Sequelize.DATE
  }
})

User.sync({force: true})
module.exports = User
