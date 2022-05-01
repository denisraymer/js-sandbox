const Lodash = require("./sync")
let _ = new Lodash()

describe("Lodash: compact", () => {
  let array

  beforeEach(() => {
    array = [false, 42, 0, "", true, null, "Hello"]
  })

  test("Должно быть определено", () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test("Должен ли рабочий массив быть редактируемым", () => {
    array.push(...["one", "two"])
    expect(array).toContain("one")
    expect(array).toContain("two")
  })

  test("Следует удалить ложные значения из массива", () => {
    const result = [42, true, "Hello"]

    expect(_.compact(array)).toEqual(result)
  })

  test("Не должно содержать ложных значений", () => {
    expect(_.compact(array)).not.toContain(false)
    expect(_.compact(array)).not.toContain(0)
    expect(_.compact(array)).not.toContain("")
    expect(_.compact(array)).not.toContain(null)
  })
})

describe("Lodash: groupBy", () => {
  test("Должно быть определено", () => {
    expect(_.groupBy).toBeDefined()
    expect(_.groupBy).not.toBeUndefined()
  })

  test("Должен группировать элементы массива по Math.floor.", () => {
    const array = [2.2, 2.4, 4.2, 3.1]
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    }

    expect(_.groupBy(array, Math.floor)).toEqual(result)
  })

  test("Должен группировать элементы массива по длине.", () => {
    const array = ["one", "two", "three"]
    const result = {
      3: ["one", "two"],
      5: ["three"],
    }

    expect(_.groupBy(array, "length")).toEqual(result)
  })

  test("Не должен быть экземпляром класса массива", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })
})
