// Стрелочные функции и включающий их контекст выполнения
const test = {
  name: "test object",
  createAnonFunction: function () {
    return function () {
      console.log(this.name)
      console.log(arguments)
    }
  },

  createArrowFunction: function () {
    return () => {
      console.log(this.name)
      console.log(arguments)
    }
  },
}

const anon = test.createAnonFunction()
const arrow = test.createArrowFunction()

// anon();
// arrow();

// Возврат объектов
const returnObj = (str) => console.log({ name: str, nameLength: str.length })
// returnObj('Toma');
