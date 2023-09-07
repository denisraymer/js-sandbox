let userName: string = "Egor"
let age: number = 18

let isActive: boolean = true
let isUnknown: unknown = "unknown"

// Функция ничего не возвращает
const error = (message): never => {
  throw new Error(message)
}

let personData: string | undefined | null = ""
