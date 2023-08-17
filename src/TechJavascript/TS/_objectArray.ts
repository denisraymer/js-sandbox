// Array<number> || string[] -- две индентичные записи
const array: Array<number | string | boolean> = [1, 1, 2, 3, 5, 8]

// От type нельзя наследоваться, а от interface можно наследоваться
type TUser = {
  name: string
  age: number
}

const user: TUser = {
  name: "Egor",
  age: 25,
}
