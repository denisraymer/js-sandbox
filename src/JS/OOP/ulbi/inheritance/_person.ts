export class Person {
  private _name
  private _lastName
  private _age

  constructor(name, lastName, age) {
    this._name = name
    this._lastName = lastName
    this._age = age
  }

  public getFullName() {
    return `Name: ${this._name} -- Lastname: ${this._lastName}`
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }

  get lastName() {
    return this._lastName
  }

  set lastName(value) {
    this._lastName = value
  }

  get age() {
    return this._age
  }

  set age(value) {
    if (value <= 0) {
      this._age = 0
    } else {
      this._age = value
    }
  }
}
