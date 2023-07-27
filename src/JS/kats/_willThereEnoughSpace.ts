// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

/*
 * cap -- сколько разрешено
 * on -- сколько уже есть
 * wait -- сколько ожидает
 * */
function enough(cap: number, on: number, wait: number): number {
  const allPassengers = on + wait

  if (cap >= allPassengers) return 0

  return allPassengers - cap

  // return Math.max(wait + on - cap, 0)
}
