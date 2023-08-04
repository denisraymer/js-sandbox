function sumPositiveNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "One of the arguments is not a number"
  }

  if (a <= 0 || b <= 0) {
    return "Numbers are not positive"
  }

  return a + b
}

console.log(sumPositiveNumbers(2, 5))

const expression = "Egor"
switch (expression) {
  case "Egor":
    console.log(expression)
    break
  case "Roma":
    console.log(expression)
    break
  default:
    console.log("Is not name")
}

const value = 11

value ? console.log("TRUE") : console.log("FALSE")
console.log(value ? "TRUE" : "FALSE")
