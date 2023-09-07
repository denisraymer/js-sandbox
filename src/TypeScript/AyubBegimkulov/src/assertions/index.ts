interface IOptions {
  a: number
  b: string
}

export function assertOptions(value: unknown): asserts value is IOptions {
  if (value === null || typeof value !== "object") {
    throw new Error("Options must me of type object")
  }

  if (!("a" in value) || typeof value.a !== "number") {
    throw new Error("Options.a must me of string")
  }

  if (!("b" in value) || typeof value.a !== "string") {
    throw new Error("Options.b must me of string")
  }
}
function doSomething(value: unknown): void {
  assertOptions(value)

  console.log(value)
}

doSomething("")
