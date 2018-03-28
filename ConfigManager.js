const yaml = require('js-yaml');
const fs = require('fs');

const FILECONFPATH = './config.yml'

class ConfigManager {
  constructor(path) {
    const CONF = yaml.safeLoad(fs.readFileSync(path, 'utf8'));
    for(let key in CONF){
      this[key]=CONF[key]
    }
    this.lvlscale = {}
    for (let key in CONF.lvl_scale) {
      this.lvlscale[CONF.lvl_scale[key].lvl] = CONF.lvl_scale[key].xp
    }
  }
}
module.exports = new ConfigManager(FILECONFPATH)
