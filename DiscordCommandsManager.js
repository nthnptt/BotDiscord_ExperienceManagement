const UserModel = require('./models/UserModel.js');
const ConfigManager = require('./ConfigManager.js')

module.exports = class DiscordCommandsManager {
  constructor() {
    this.messageObject = null
  }

  runCommand(event) {
    this.messageObject = event
    switch (this.messageObject.content.substr(1)) {
      case 'lvl':
        UserModel.findOne({
          where: {
            tag: this.messageObject.author.tag
          }
        }).then(user => {
          this.messageObject.channel.send({embed : {
            color: 445577,
            description : `Your are lvl ${user.niveau} with ${user.exp} experience`,
            title : this.messageObject.author.username,
          }})
        })
        break;
    }
  }

  reply(msg) {
    if (this.messageObject != null) {
      this.messageObject.reply(msg)
    }
  }
}
