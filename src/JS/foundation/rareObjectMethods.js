const rareObjectMethods = function () {
  // Редкие методы объектов
  let value
  let obj1 = {
    name: "Denis",
    info: {
      skills: ["python", "ruby", "full stack"],
    },
  }
  let obj2 = {
    name: "Denis",
    age: 20,
  }

  // Создает копию объекта obj1
  value = Object.assign({}, obj1)

  // Создает копию объектов obj1, obj2 и объединяет их
  // obj2 заменяет одинаковые значения свойства в obj1.
  // !Порядок важен
  value = Object.assign({}, obj1, obj2)

  // Не копирует вложенные свойства объекта info
  value = Object.assign({}, obj1)

  value = JSON.stringify(obj1) // Преобразует в строку
  value = JSON.parse(value) // Преобразует в объект

  value = Object.keys(obj1) // Возвращает массив с ключами объекта
  value = Object.values(obj1) // Возвращает массив с значениями ключей
  value = Object.entries(obj1) // Возвращает массив массивов

  const objArray = [
    ["name", "Tom"],
    ["age", 23],
  ]
  value = Object.fromEntries(objArray) // Возвращает объект из массива массивов

  console.log(value)
  console.log(typeof value)
}

rareObjectMethods()
