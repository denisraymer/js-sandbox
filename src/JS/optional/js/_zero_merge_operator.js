console.log("" ? 100 : 200)
console.log(+"c4" ? 100 : 200) //NaN

console.log("------------ Оператор нулевого слияния ------------")

const d = null ?? "problem"

const $out1 = document.querySelector(".out-1")
const $outCommon = document.querySelector(".out-common")

$out1.style.color = "blue"
$outCommon.style.color = "red"

const element = $out1 ?? $outCommon

element.innerHTML = "888"

console.log(element)

console.log("---------- Оператор опциональной последовательности ----------")
