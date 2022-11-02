// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
"use strict"

// write the function isAnagram
const isAnagram = function (test, original) {
  test = test.toLowerCase().split("")
  original = original.toLowerCase().split("")

  console.log(test)
  console.log(original)
  console.log("_._._._._._._._._._._._._._._._._")

  for (const originalLetter of original) {
    console.log("originalLetter", originalLetter)
    test.filter((testLetter) => {
      if (testLetter.localeCompare(originalLetter) === 0) {
        console.log(testLetter, originalLetter)
      }
    })
  }

  // for (const testLetter of test) {
  //   original.filter((originalLetter) => {
  //     console.log(
  //       originalLetter,
  //       testLetter,
  //       originalLetter.localeCompare(testLetter) === 0
  //     )
  //   })
  // }

  // original.filter((letter, index) => {
  //   if (!letter.localeCompare(test[index])) {
  //
  //   }
  // console.log(test[index].localeCompare(letter))
  // })

  // for (let i = 0; i < original.length; i++) {
  //   original.filter((letter) => {
  //     if (!letter.localeCompare(test[i])) {
  //       console.log(letter)
  //     }
  //   })
  // }
}

isAnagram("foefet", "Toffee")
