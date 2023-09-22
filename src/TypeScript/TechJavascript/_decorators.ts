function Decorator(target: Function) {
  target.prototype.name = "Egor"
}

// @Decorator
// class User {
//   name: string
//
//   printName() {
//     console.log(this.name)
//   }
// }
//
// const user = new User()
//
// console.log(user.name)
// console.log(typeof User)

/* -------------------------------------------------------------------------- */

function Decorator2(option: { name: string }) {
  return (target: Function) => {
    target.prototype.name = option.name
  }
}

// @Decorator({
//   name: "Egor",
// })
//
// class User2 {
//   name: string
//
//   printName() {
//     console.log(this.name)
//   }
// }
//
// const user2 = new User2()
//
// console.log(user2.name)
// console.log(typeof User)
