/* Функция-конструктор */
function FHuman(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const chris = new FHuman("Cris", "Huis")
const tom = new FHuman("Tom", "Not tom")

// console.log(chris, tom)

/* Классы */
/* Классы являются абстракцией («синтаксическим сахаром») над функциями-конструкторами. */
/* Они облегчают задачу создания экземпляров. */
class CHuman {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const jim = new CHuman("Jim", "Perjim")
const bary = new CHuman("Bary", "Not bary")

// console.log(jim, bary)

/* Связывание объектов */
const Human = {
  init(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName

    return this
  },
}

const bil = Object.create(Human)
bil.init("Bil", "Bilbualya")

// console.log(bil)

/* Фабричная функция */
/* Фабричная функция — это функция, возвращающая объект. Можно вернуть любой объект. */
/* Можно даже вернуть экземпляр класса или связывания объектов. */
function FFHuman(firstName, lastName) {
  return {
    firstName,
    lastName,
  }
}

const ben = FFHuman("Ben", "Taker")

// console.log(ben)
