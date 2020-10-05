module.exports = User => {
  return class extends User {
    async setAFK(afk) {
      let update = await global.updateData(
        { userID: { $eq: this.id } },
        { $set: { afk } },
        { userID: this.id, afk },
        "afk"
      );
      this.afk = update.afk;
      this.razon = update.razon;
      this.cache.afk = true;
    }
    async getAFK() {
      let datab = await global.getData({ userID: { $eq: this.id } }, "afk");
    }
    async tieneAFK() {
      if (this.getAFK === " ") return false; 
      if (this.getAFK !== " ") return true;
    }
    async resetAFK() {
      const e = await global.updateData({ userID: { $eq: this.id }, set: ' ',},'afk')
    }
  };
};
