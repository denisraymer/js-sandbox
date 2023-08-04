// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/solutions/javascript

/*
 * Есть буква ")"
 * Нет буквы "("
 * */

function duplicateEncode(word: string): string {
  const letters = word.toLowerCase().split("")
  let result: string[] = []

  result = letters.map((element, index, array): string => {
    return array.indexOf(element) === array.lastIndexOf(element) ? "(" : ")"
  })

  return result.join("")
}

duplicateEncode("din")

// return array[index] === array[-index] ? ")" : "("
