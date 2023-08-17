// function someFn(...args) {
//   if (args.length === 0) {
//     console.log(0)
//   } else {
//     const sum = args.reduce((acc, curr) => acc + curr, 0)
//
//     function innerFn(...innerArgs) {
//       if (innerArgs.length === 0) {
//         console.log(`Результат сложения: ${sum}`)
//       } else {
//         return someFn(sum, ...innerArgs)
//       }
//     }
//
//     return innerFn
//   }
// }

// someFn(2)(2)(3)()

// function someFn2() {
//   let sum = 0
//
//   function innerFn(...args) {
//     if (args.length === 0) {
//       return sum
//     } else {
//       sum += args.reduce((acc, curr) => acc + curr, 0)
//       return innerFn
//     }
//   }
//
//   return innerFn(...arguments)
// }

// const res = someFn2("123123")("asdasd")(["asdasd", "asdasd"])({ asd: 123 })()
//
// console.log(`Результат сложения: ${res}`)

/**/

// function someFn(...args) {
//   return args.length === 0 ? 0 : (...nextArgs) => someFn(...args, ...nextArgs)
// }

type InnerFn = {
  (...args: number[]): InnerFn
  (): number
}

// function someFn2(...outerArgs: number[]): InnerFn {
//   let sum = 0
//
//   function innerFn(...args: number[]) {
//     if (args.length === 0) {
//       return sum
//     } else {
//       sum += args.reduce((acc, curr) => acc + curr, 0)
//       return innerFn
//     }
//   }
//
//   return innerFn(...outerArgs)
// }

function someFn3(...outerArgs: number[]): InnerFn {
  let sum = 0

  function innerFn(...args: number[]): InnerFn {
    if (args.length === 0) {
      return innerFn as InnerFn
    } else {
      sum += args.reduce((acc, curr) => acc + curr, 0)
      return innerFn as InnerFn
    }
  }

  if (outerArgs.length > 0) {
    sum += outerArgs.reduce((acc, curr) => acc + curr, 0)
  }

  return innerFn as InnerFn
}

const result = someFn3(1, 2, 3)(4, 5)(6)(7, 8)()
console.log(result) // Output: 36
