function rot13(word) {
  // let arr_en = "abcdefgjhijklmnopqrstuvwxyz".split("")
  // let arr_EN = "ABCDEFGJHIJKLMNOPQRSTUVWXYZ".split("")

  for (const symbol of word) {
    console.log(String.fromCharCode(symbol.charCodeAt(symbol)))
  }

  // return word
}

rot13("grfg")

/*
* let enIndex = arr_en.indexOf(symbol) + 1

    if (enIndex > 13) {
      console.log(enIndex, arr_en[enIndex - 13])
    } else {
      console.log(enIndex, arr_en[enIndex + 13])
    }

    console.log(String.fromCharCode(symbol.charCodeAt(0) - 96))
* */
