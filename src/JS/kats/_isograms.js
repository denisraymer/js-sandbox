// https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript

function isIsogram(str) {
  const words = str.toLowerCase().split("")

  for (let i = 0; i < str.length; i++) {
    const deleteWord = words.shift()

    if (words.includes(deleteWord)) return false
  }

  return true

  // return !str.match(/([a-z]).*\1/i);
}

isIsogram("moOse")

// export function isIsogram(str: string): boolean {
//   const toLower = str.toLowerCase()
//
//   return toLower.length === new Set([...toLower]).size
// }
