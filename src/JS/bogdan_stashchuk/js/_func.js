// Передача значений по ссылке

const personOne = {
  name: "Bob",
  age: 22,
}

function increasePersonAge(person) {
  const updatedPerson = Object.assign({}, person)

  updatedPerson.age += 1

  return updatedPerson
}

const updatePersonOne = increasePersonAge(personOne)

console.log(updatePersonOne)
console.log(personOne)
