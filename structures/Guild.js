const prefixdb = require("../models/prefix");
module.exports = (Guild) => {
  return class extends Guild {
    constructor(client, data) {
      super(client, data);
      this.awoo = "was here"//:^)
      this.g4 = 'was here'//*<[:-)
      this.prefix = process.env.PREFIX
      this.queue = null;
      this.cache = {
        prefix: false
      }
    }
    
    async setPrefix(prefix) {
      let doc = await global.updateData({ guildID: { $eq: this.id } }, { $set: { prefix } }, { guildID: this.id, prefix }, 'prefix');
      this.prefix = doc.prefix;
      this.cache.prefix = true;
      return this.prefix
    }
    
    async getPrefix(){
      let doc = await global.getData({ guildID: { $eq: this.id } }, "prefix")
      if (doc) this.prefix = doc.prefix;
      else this.prefix = process.env.PREFIX;
      this.cache.prefix = true;
      return this.prefix;
    }
    

    }
  };
