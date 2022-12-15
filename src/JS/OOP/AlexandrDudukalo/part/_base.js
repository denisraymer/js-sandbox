class _sayMyName {
  _initialAge = 0
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  set age(value) {
    this._initialAge = 2022 - value
    console.log(`My year of birth ${this._initialAge}`)
  }

  get age() {
    return this._initialAge
  }

  hi() {
    console.log(`My name is ${this.name}, my age ${this.age}`)
  }
}

const sayMyName = new _sayMyName("Denis", "18")

sayMyName.hi()
sayMyName.age = 24

/* Проверка экземпляра из того ли шаблона он сделан  */
console.log(`instanceof ${sayMyName instanceof _sayMyName}`)
