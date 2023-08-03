const countBits = function (n) {
  const base = n.toString(2).split("")

  return base.reduce(
    (accumulator, currentValue) => accumulator + +currentValue,
    0
  )

  // n.toString(2).split('0').join('').length;
}

console.log(countBits(7))
