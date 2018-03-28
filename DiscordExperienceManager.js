const Sequelize = require('sequelize');
const UserModel = require('./models/UserModel.js');
const ConfigManager = require('./ConfigManager.js')
const GAINEXP = ConfigManager.experience_gain

module.exports = class DiscordExperienceManager {
  constructor() {
    this.author = null
  }
  gainExperience(event) {
    this.author = event.author
    UserModel.findOne({
      where: {
        tag: event.author.tag
      }
    }).then(user => {
      if (user == null) {
        UserModel.create({
          tag: event.author.tag,
          exp: GAINEXP,
          niveau: 1,
          lastGainXp: Sequelize.fn('NOW')
        })
      } else {
        if ((user.exp += GAINEXP) >= ConfigManager.lvlscale[user.niveau]) {
          user.exp = 0
          user.niveau += 1
          event.author.send('Lvl up ! You are lvl ' + user.niveau)
        }
        user.lastGainXp = Sequelize.fn('NOW')
        user.save()
      }
    })
  }
}
