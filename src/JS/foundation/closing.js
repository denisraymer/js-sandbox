const closingFunction = function () {
  // Замыкание
  let value

  function getFullName() {
    return function (firstName, lastName) {
      return `${firstName} ${lastName}`
    }
  }

  value = getFullName()("Denis", "Raymer")

  function updateValue(val = 0) {
    let x = val
    return function (num = 0) {
      return (x += num)
    }
  }

  const updateValueOne = updateValue(2)
  value = updateValueOne(1)

  value = updateValue(2)(2)

  function checkCred() {
    const login = "test"
    const password = "123456"

    return {
      checkLogin(value) {
        return login === value
      },
      loginPassword(value) {
        return password === value
      },
    }
  }

  const checkOgj = checkCred() // return obj

  value = checkOgj.checkLogin("test")
  value = checkOgj.loginPassword("123456")

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

  value = closureExample()
  value = value[2]()

  // DZ
  function minus(value = 0) {
    return function (num = 0) {
      return value - num
    }
  }
  value = minus(10)(6)

  function multiplyMaker(val = 0) {
    let middleValue = val
    return function (num = 0) {
      return (middleValue *= num)
    }
  }

  let multiply = multiplyMaker(2)
  value = multiply(2)
  value = multiply(1)
  value = multiply(3)
  value = multiply(10)

  function creatingString() {
    let arrString = []

    return {
      getStrRevers(index = 0) {
        value = arrString[index].split("").reverse().join("")
        return this
      },
      getStrLength(index = 0) {
        value = arrString[index].length
        return this
      },
      createStr(val = "") {
        arrString.push(val.toString())
        return this
      },
      getStr(index = 0) {
        value = arrString[index]
        return this
      },
    }
  }

  creatingString().createStr(123).getStr().getStrLength().getStrRevers()

  console.log(value)
}

closingFunction()
