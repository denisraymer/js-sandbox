// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

function smash(words: string[]) {
  let sentence = ""

  words.forEach((word) => {
    sentence += ` ${word}`
  })

  return sentence.substring(1)
}

function smash2(words: string[]) {
  return words.join(" ")

  // return words.join(" ").trim()
}
