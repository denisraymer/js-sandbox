// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

const quarterOf = (month: number): number => {
  return Math.ceil(month / 3)
}

// if (month <= 3) {
//   return 1
// } else if (month <= 6) {
//   return 2
// } else if (month <= 9) {
//   return 3
// } else if (month <= 12) {
//   return 4
// }
