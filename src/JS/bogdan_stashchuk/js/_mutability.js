const person = {
  name: "bob",
  age: 21,
}
// person.age = 22
person.isAdult = true

// console.log(person.age)
// console.log(person.isAdult)

// Мутирование копий

const person2 = person

// person2.age = 24
// person2.isAdult = false

// console.log(person.age)
// console.log(person.isAdult)

// Как избежать мутаций

const person3 = Object.assign({}, person)
// const person3 = { ...person }
// const person3 = JSON.parse(JSON.stringify(person))

person3.age = 24
person3.isAdult = false

console.log(person.age)
console.log(person.isAdult)
