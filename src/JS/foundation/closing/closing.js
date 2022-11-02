const description = "Осуществляет поиск в по значениям объектов"

const closingFunction = function () {
  // Контекст уникален для каждого вызова
  function getFullName(firstName, lastName) {
    return function () {
      return `${firstName} ${lastName}`
    }
  }

  let fullNameUser = getFullName("Denis", "Raymer")
  let fullNameAdmin = getFullName("Tom", "Hanson")

  fullNameUser()
  fullNameAdmin()

  // X сохраняет изменение после первого вызова
  function updateValue(value = 0) {
    let x = value
    return function (number = 0) {
      return (x += number)
    }
  }

  let firstGetUpdateValue = updateValue(2)
  firstGetUpdateValue(1)
  firstGetUpdateValue(0)

  // Переменные login и password изолированы
  // и доступ к ним можно получить только через методы checkLogin, checkPassword
  function checkCred() {
    const login = "test"
    const password = "somePassword"

    return {
      checkLogin(value) {
        return login === value
      },
      checkPassword(value) {
        return password === value
      },
    }
  }

  let check = checkCred()

  check.checkLogin("test")
  check.checkPassword("somePassword")

  function closureExample() {
    const arrOfFunc = []
    let value = ""

    for (let i = 0; i < 10; i++) {
      value += i
      arrOfFunc.push(function () {
        return `${value} ${i}`
      })
    }

    return arrOfFunc
  }

  const res = closureExample()

  res[6]()

  function numberGenerator() {
    let num = 1
    function checkNumber() {
      return ++num
    }
    num++
    return checkNumber
  }

  let number = numberGenerator()
  number()
}

console.log(description)
closingFunction()

// getFullName - Вернет объект с соответствующим значением
