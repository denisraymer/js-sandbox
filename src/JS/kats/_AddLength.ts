function addLength(str: string): string[] {
  const arrayWords = str.split(" ")

  return arrayWords.map((word) => `${word} ${word.length}`)
}

addLength("apple ban")
