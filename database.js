const mongoose = require("mongoose");
mongoose.set("returnOriginal", false);
mongoose.set("useFindAndModify", false);

module.exports = mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: process.env.MONGOUSER,
    pass: process.env.MONGOPASS,
    dbName: process.env.DBNAME
});