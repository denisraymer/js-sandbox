function someFn(...args) {
  if (args.length === 0) {
    console.log(0)
  } else {
    const sum = args.reduce((acc, curr) => acc + curr, 0)

    function innerFn(...innerArgs) {
      if (innerArgs.length === 0) {
        console.log(`Результат сложения: ${sum}`)
      } else {
        return someFn(sum, ...innerArgs)
      }
    }

    return innerFn
  }
}

// someFn(2)(2)(3)()

function someFn2() {
  let sum = 0

  function innerFn(...args) {
    if (args.length === 0) {
      console.log(`Результат сложения: ${sum}`)
    } else {
      sum += args.reduce((acc, curr) => acc + curr, 0)
      return innerFn
    }
  }

  return innerFn(...arguments)
}

// someFn2(2)(2)(3)()

/**/

// function someFn(...args) {
//   return args.length === 0 ? 0 : (...nextArgs) => someFn(...args, ...nextArgs)
// }
