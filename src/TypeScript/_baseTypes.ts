const isFetching: Boolean = true
const isLoading: Boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = "Hello TypeScript"

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const genericArray: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ["Hello", "TypeScript"]

// Tuple
// Позволяет описать массив с фиксированным или динамическим числом элементов
// в котором известен тип каждого отдельного жлемента
const contact: [string, number] = ["Denis", 123456]
const fooBaz: [string, number, ...boolean[]] = ["Type", 715, true, false]

// Any
let variable: any = 42
// ...
variable = "New String"
variable = ["New Array"]

// Function types
// Тип void означает, что функция ничего не возвращает
function sayMyName(name: string): void {
  console.log(name)
}

sayMyName("Хайзенберг")

function sun(a: number, b: number): number {
  return a + b
}

const printMessage = (message: string): void => {
  console.log(message)
}

// Never
// Тип никогда не означает, что ничего не происходит. Он используется, когда защита типа не может
// произойти или в ситуации, когда всегда возникает исключение. Есть разница между пустотой и никогда.
// Функция, имеющая явный тип возврата never, не позволяет возвращать undefined, что отличается
// от функции void, которая позволяет возвращать undefined.
// ------------------------
// Функция, которая явно не возвращает значение, неявно возвращает значение undefined в JavaScript.
// Хотя мы обычно говорим, что такая функция "ничего не возвращает", она возвращает. В таких случаях
// мы обычно игнорируем возвращаемое значение. Предполагается, что такая функция имеет возвращаемый
// тип void в TypeScript.
// Функция, имеющая тип возврата never , никогда не возвращается. Он также не возвращает undefined.
// Функция не имеет нормального завершения, что означает, что она выдает ошибку или вообще никогда
// не завершает работу.
function throwError(message: string): never {
  throw new Error(message)
}

// Type
type login = string

const login: login = "Admin"

type ID = string | number
const id_1: ID = 42
const id_2: ID = "42"

type SomeType = string | null | undefined

// Unknown
const legacyLibrary: unknown = "ЗДЕСЬ ЛЮБОЕ ЗНАЧЕНИЕ"

if (typeof legacyLibrary === "string") {
  console.log(legacyLibrary.length)
}

// Aliases
const aliases: Array<string> = ["String", "String"]
const bazFoo: Array<string | number> = ["String", 715, "String"]
const fooBar: (string | number)[] = ["String", 715, "String"]
