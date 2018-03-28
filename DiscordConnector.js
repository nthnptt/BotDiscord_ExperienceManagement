const Discord = require('discord.js')
const DiscordCommandsManager = require('./DiscordCommandsManager.js')
const DiscordExperienceManager = require('./DiscordExperienceManager.js')
const ConfigManager = require('./ConfigManager.js')
module.exports = class DiscordConnector {
  constructor() {
    this.token = ConfigManager.token
    this.client = new Discord.Client()
    this.commandManager = new DiscordCommandsManager()
    this.experienceManager = new DiscordExperienceManager()
  }

  activeMessagesTreatment() {
    this.client.on('message', msg => {
      let regex_test = '^' + ConfigManager.cmd_char + '.*';
      if (msg.content.match(regex_test) !== null) {
        this.commandManager.runCommand(msg)
      } else {
        this.experienceManager.gainExperience(msg)
      }
    })
  }
  connect() {
    this.client.on('ready', () => {
      console.log(`Logged in as ${this.client.user.tag}!`);
    });

    this.client.login(this.token)
  }
}
