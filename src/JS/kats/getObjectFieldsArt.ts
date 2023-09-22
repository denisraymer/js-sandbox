type MyObject = {
  name: string
  age: number
  job: string
}

const obj: MyObject = {
  name: "123",
  age: 100,
  job: "",
}

// function getObjectFields<T extends keyof MyObject>(
//   obj: MyObject,
//   keys: T[]
// ): Partial<MyObject> {
//   const result: Partial<MyObject> = {}
//
//   keys.forEach((key) => {
//     result[key] = obj[key]
//   })
//
//   return result
// }
//
// const nameAndJob = getObjectFields(obj, ["name", "job"])
//
// function getObjectFields<T extends {}, K extends (keyof T)[]>(
//   source: T,
//   keys: K
// ): Pick<T, K[number]> {
//   const result: Partial<Pick<T, K[number]>> = {}
//
//   keys.forEach((key) => {
//     if (source.hasOwnProperty(key)) {
//       result[key] = source[key]
//     }
//   })
//
//   return result as Pick<T, K[number]>
// }
// const nameAndJob = getObjectFields(obj, ["name", "job"])
//
// console.log(nameAndJob)

function getObjectFields<T extends {}, K extends keyof T>(
  source: T,
  keys: K[]
): Pick<T, K> {
  const result: Partial<Pick<T, K>> = {}

  keys.forEach((key) => {
    //if (source.hasOwnProperty(key)) {

    if (source[key] !== undefined) {
      result[key] = source[key]
    }
  })

  return result as Pick<T, K>
}

const nameAndJob = getObjectFields(obj, ["name", "job"])

console.log(nameAndJob)
