// https://www.codewars.com/kata/515f51d438015969f7000013/solutions/javascript

function pyramid(n: number): number[][] {
  const array: number[][] = []

  if (n <= 0) return array

  for (let i = 0; i <= n; i++) {
    const innerArray = []

    for (let j = 0; j <= i; j++) {
      innerArray.push(1)
    }

    array.push(innerArray)
  }

  return array
}

pyramid(3)

// res.push([...Array(i+1)].fill(1))
