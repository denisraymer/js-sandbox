class User {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(`Message: ${this.name}`)
  }
}


const myClass = new User("Иван")
const myClass2 = new User("Вика")

myClass.sayHi()
myClass2.sayHi()

console.log('----------------------')

/* Объявляем класс и возвращаем его */
const makeClass = (phrase) => {
  return class {
    sayHi() {
      console.log(`Message: ${phrase}`)
    }
  }
}

/* Создаём новый класс */
const UserMakeClass = makeClass('Привет')
new UserMakeClass().sayHi()

console.log('----------------------')

/* Геттеры/сеттеры */
class News {
  constructor(name) {
    /* вызывает сеттер */
    this.name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    if (value.length === 0) {
      console.log('Имя слишком короткое')
      return;
    }

    this._name = value
  }
}

const KSNews = new News('Новости Каджи-Сая')
console.log(KSNews.name)

const ErrorNews = new News('')
console.log(ErrorNews.name) // undefined

console.log('----------------------')

/* Свойства классов */
class Anonymous {
  prop = 'Anonymous'

  sayHy() {
    console.log(`Message ${this.prop}: 123bebebe`)
  }
}

new Anonymous().sayHy()

console.log('----------------------')

/* Пример с вычисляемым свойством в скобках */
class SayCustomName {
  ['say' + 'Hi']() {
    console.log("Привет");
  }
}

new SayCustomName().sayHi()

console.log('----------------------')

/* Переписать часы с функции в класс */
// https://plnkr.co/edit/3Ao0zGUkfAsEspGQ?p=preview&preview

class Clock {
  constructor({ template }) {
    this.template = template
  }
}
