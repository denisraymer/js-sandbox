// type TupleToObject<T extends readonly (keyof any)[]> = {
//   [key in T[number]]: key
// }

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [key in T[number]]: key
}
