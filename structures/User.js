module.exports = User => {
  return class extends User {
    async setAFK(afk, razon) {
      let update = await global.updateData({
        userID: { $eq: this.id }, 
        afK: {$set: true  },
        razon: {$set: { razon },}
      }, 'afk')
      this.cache.afk = await update.afk;
      this.cahce.afkrazon = await update.razon;
    }
    async getAFK() {
      let datab = await global.getData({ userID: { $eq: this.id } }, "afk");
      if(datab) { const xd = datab.afk
      return xd; } 
    }
    async resetAFK() {
      const e = await global.updateData({ userID: { $eq: this.id }, afk: {$set: false}, razon: {$set: ''}},'afk')
    }
  };
};
