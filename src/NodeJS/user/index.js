// module.exports = exports = this
const db = require('../db');
const log = require('../logger')(module)
db.connect();

function User(name) {
  this.name = name;
}

User.prototype.hello = function (who) {
  log(`${db.getPhrases('hello')}, ${who.name}`);
}

// console.log('user.js is required');

// exports.user = User
module.exports = User;
