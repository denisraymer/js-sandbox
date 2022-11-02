function cycle(n) {
  if (n % 2 == 0 || n % 5 == 0) return -1
  let i = 0,
    val = 1
  while (++i) {
    val = (val * 10) % n
    if (val == 1) return i
  }
}

console.log(cycle(33))
