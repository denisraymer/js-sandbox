// Функция для тестирования.
function expect(value) {
  return {
    toBe: (expectation) => {
      if (value === expectation) {
        console.log("Success")
      } else {
        console.error(`Value is ${value}, but expectation is ${expectation}`)
      }
    },
  }
}

// Функции которые будут тестироваться.
const sum = (a, b) => a + b

const nativeNull = () => null

expect(sum(41, 1)).toBe(42)

module.exports = { sum, nativeNull }
