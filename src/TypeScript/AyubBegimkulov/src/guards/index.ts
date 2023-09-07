// Примеры встроенных Type Guard'ов
// import { f } from "../index"

export function test(value: unknown): void {
  if (typeof value === "string") {
    console.log(value) // value -> string
  } else {
    console.log(value) // value -> unknown
  }
}

export function typeGuardIfElse(value: unknown): void {
  if (value) {
    console.log(value) // value -> {} | Подразумевает любое значение кроме null и undefined
  } else {
    console.log(value) // value -> unknown
  }
}

export function typeGuardNullUndefined(value: unknown): void {
  if (value !== undefined && value !== null) {
    console.log(value) // value -> {} | Подразумевает любое значение кроме null и undefined
  } else {
    console.log(value)
  }
}

export function typeGuardIn(value: unknown) {
  // @ts-ignore
  if ("key" in value) {
    console.log(value) // value -> Record<"key", unknown>
  } else {
    console.log(value)
  }
}

// Примеры кастомных Type Guard'ов
export function isString(value: unknown): value is string {
  return typeof value === "string"
}

export function getName(name: unknown) {
  if (isString(name)) {
    console.log(`My name is ${name}`) // name -> string
  } else {
    console.log(name) // name -> unknown
  }
}

// Примеры Type Guard'ов для кастомных типов
// interface IErrorResponse {
//   status: number
//   statusText: string
//   message: string
// }

export function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null
}

// export function isErrorResponse(value: unknown): value is IErrorResponse {
//   if (isObject(value)) return false
//
//   return (
//     "status" in value &&
//     typeof value.status === "number" &&
//     "statusText" in value &&
//     typeof value.statusText === "string" &&
//     "message" in value &&
//     typeof value.message === "string"
//   )
// }

// export function submitForm() {
//   try {
//     // ...
//     //do some logic and make a request
//   } catch (error) {
//     if (isErrorResponse(error)) {
//     }
//     console.log(error)
//   }
// }
