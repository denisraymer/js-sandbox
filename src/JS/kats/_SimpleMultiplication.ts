// https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

function simpleMultiplication(number: number): number {
  if (number % 2) return number * 9

  return number * 8

  // return number * (number % 2 ? 9 : 8)
}

simpleMultiplication(8)
