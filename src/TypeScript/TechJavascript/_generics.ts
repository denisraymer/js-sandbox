function userInfo<T>(args: T): T {
  console.log(args)
  return args
}

userInfo("Alex")

/* -------------------------------------------------------------------------- */

interface IUser2<T, U> {
  name: T
  age: U
}

const user22: IUser2<string, number> = {
  name: "Egor",
  age: 22,
}
