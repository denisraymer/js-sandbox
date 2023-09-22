const array = [
  {
    id: 12,
    data: "",
  },
  {
    id: 12,
    example: "",
  },
  {
    id: 13,
    test: "",
  },
  {
    id: 14,
    data: {
      id: 13,
      data: "",
    },
  },
  {
    id: 14,
    text: {
      id: 13,
      data: "",
    },
  },
]

type TArrayItem = {
  id: string | number
  data?: Record<string, any> | string
}

type TResultObject = Record<string, TArrayItem[]>

function objectConvert<T extends TArrayItem>(arr: T[]): TResultObject {
  const obj: TResultObject = {}

  arr.forEach((element): void => {
    const id = element.id

    if (!obj[id]) {
      obj[id] = []
    }

    obj[id].push(element)
  })

  return obj
}

objectConvert(array)

function objectConvertById<T extends { id: string | number }>(
  objects: T[]
): Record<string, T[]> {
  const grouped: Record<string, T[]> = {}

  for (const obj of objects) {
    const id = obj.id
    if (grouped[id]) {
      grouped[id].push(obj)
    } else {
      grouped[id] = [obj]
    }
  }

  return grouped
}

objectConvertById(array)

const obj = {
  name: "123",
  age: 100,
  job: "",
}

/*
 * Массив любых интерфейсов, главное что бы у объекта было поле ID
 * */

// for (let i = 0; i < arr.length; i++) {
//   const id = arr[i].id
//
//   if (!obj[id]) {
//     obj[id] = []
//   }
//
//   obj[id].push(arr[i])
//
//   // if (obj.hasOwnProperty(id)) {
//   //   obj[id].push(arr[i])
//   // } else {
//   //   obj[id] = [arr[i]]
//   // }
// }

// const a = 22

// function f() {
//   const a = 21
//   return function f1() {
//     const a = 23
//     console.log(a)
//   }
// }

// f()()

// {
//  "12": [{12}, {12}]
//  "13": [{13}, {13}]
// }

// {
// Record<string, IObj[]>
//   "12": [{}]
// }
