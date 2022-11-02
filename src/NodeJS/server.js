const db = require("./db")
const User = require("./user")
const log = require("./logger")(module)

function run() {
  const vasya = new User("Вася")
  const petya = new User("Петя")

  vasya.hello(petya)
  log(db.getPhrases("Run successful"))
}

if (module.parent) {
  module.exports = run
} else {
  run()
}
