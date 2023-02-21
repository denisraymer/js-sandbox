/* Определение свойств и методов в конструкторе */
function Human(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName

  this.sayHello = function () {
    // console.log(`Hello, I'm ${firstName} ${lastName}`)
  }
}

const chris = new Human("Chris", "Chrisich")
chris.sayHello()

/* Определение методов в прототипе */
function PHuman(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

PHuman.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.firstName} ${this.lastName}`)
}

const maloun = new PHuman("Post", "Maloun")
maloun.sayHello()
