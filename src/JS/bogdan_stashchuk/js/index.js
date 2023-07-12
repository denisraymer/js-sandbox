const objectA = {
  a: 10,
  b: true,
}

const copyOfA = objectA

console.log(objectA)

copyOfA.a = 20
copyOfA.c = null

console.log(objectA)

function exampleFunction() {
  console.log("Hey there")
}

exampleFunction()

exampleFunction = 715

console.log(exampleFunction)

const myCity = {
  city: "Bishkek",
  delete: "DELETE",
  cityGreeting() {
    console.log("Greeting")
  },
}

console.log(myCity)

myCity.popular = true

console.log(myCity)

const nameObjectKeyDelete = "delete"

delete myCity[nameObjectKeyDelete]

console.log(myCity)

myCity.cityGreeting()
