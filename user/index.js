var db = require('db');
var log = require('../logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    //console.log(db.getPhrase("Hello") + ', ' + who.name + ' ' + db.getPhrase("from") + ' ' + this.name);

    log(db.getPhrase("Hello") + ', ' + who.name + ' ' + db.getPhrase("from") + ' ' + this.name);

};

module.exports = User;