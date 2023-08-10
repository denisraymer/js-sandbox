import { Person } from "./_person"

export class Employee extends Person {
  private _inn
  private _post
  private _salary

  constructor(name, lastName, age, inn, post, salary) {
    super(name, lastName, age)

    this._inn = inn
    this._post = post
    this._salary = salary
  }

  greeting() {
    console.log(`Привет я сотрудник и меня зовут ${this.name}`)
  }

  public getFullPosition() {
    return `INN: ${this.inn} | POST: ${this.post} | SALARY: ${this.salary}`
  }

  get inn() {
    return this._inn
  }

  set inn(value) {
    this._inn = value
  }

  get post() {
    return this._post
  }

  set post(value) {
    this._post = value
  }

  get salary() {
    return this._salary
  }

  set salary(value) {
    this._salary = value
  }
}
