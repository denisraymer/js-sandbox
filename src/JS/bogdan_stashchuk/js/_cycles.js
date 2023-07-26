// lat i = 0; -- Начальная инструкция
// i <= 10; -- Условие
// i++ -- Итерационное действие
for (let i = 0; i <= 10; i++) {
  // Блок кода, выполняемый на каждой итерации
}

let i = 0 // Условие
while (i < 5) {
  // Блок кода, выполняемый на каждой итерации
  i++
}

let j = 0 // Условие
do {
  // Блок кода, выполняемый на каждой итерации
} while (j < 5)

// key - название свойства объекта
// Object - Объект
for (key in Object) {
  // Действие с каждым свойством объекта
  // Значение свойства - Object[key]
}

const myArray = [true, 10, "abc", null]
for (const key in myArray) {
  console.log(myArray[key])
}

const iterable = [10, 20, 30]
const iterable2 = "Example"
for (const value of iterable) {
  console.log(value) // 10, 20, 30 | // E, x, a, m, p, l, e
}
