const array = [
  {
    id: 12,
    data: "",
  },
  {
    id: 12,
    data: "",
  },
  {
    id: 13,
    data: "",
  },
]

type TArrayItem = {
  id: number
  data: string
}

type TResultObject = Record<string, TArrayItem[]>

function objectConvert(arr: TArrayItem[]): TResultObject {
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
