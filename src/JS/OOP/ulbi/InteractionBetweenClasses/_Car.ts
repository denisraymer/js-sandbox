import { Engine } from "./_Engine"
import { Wheel } from "./_Wheel"
import { Freshener } from "./_Freshener"

export class Car {
  engine: Engine
  wheels: Wheel[]
  freshener: Freshener

  constructor(freshener?: any) {
    /*Агрегация*/
    this.freshener = freshener

    /*Композиция*/
    this.engine = new Engine()
    this.wheels?.push(new Wheel())
    this.wheels?.push(new Wheel())
    this.wheels?.push(new Wheel())
    this.wheels?.push(new Wheel())
  }

  drive() {
    this.engine.drive()

    console.log(this.wheels)

    // this.wheels.forEach(({ drive }) => drive())
  }
}
