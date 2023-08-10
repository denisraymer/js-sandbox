import { Employee } from "./_employee"

export class Manager extends Employee {
  private _project
  private _gettingStarted
  private _endWork

  constructor(
    name,
    lastName,
    age,
    inn,
    post,
    salary,
    project,
    gettingStarted,
    endWork
  ) {
    super(name, lastName, age, inn, post, salary)

    this._project = project
    this._gettingStarted = gettingStarted
    this._endWork = endWork
  }

  greeting() {
    console.log(`Привет я менеджер и меня зовут ${this.name}`)
  }

  get project() {
    return this._project
  }

  set project(value) {
    this._project = value
  }

  get gettingStarted() {
    return this._gettingStarted
  }

  set gettingStarted(value) {
    this._gettingStarted = value
  }

  get endWork() {
    return this._endWork
  }

  set endWork(value) {
    this._endWork = value
  }
}
