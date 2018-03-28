const DiscordConnector = require('./DiscordConnector.js')
let bot = new DiscordConnector()
bot.activeMessagesTreatment()
bot.connect()
