// EventLoop/Context

// Для визуализации работы EventLoop используйте: https://github.com/latentflip/loupe
// Context - окружение, в котором производится выполнение кода.

// Пример работы EventLoop
console.log("Start")

setTimeout(function () {
  console.log("Inside setTimout")
}, 6000)

console.log("Finish")

// Пример работы контекста
function first() {
  console.log("Inside first function")
  second()
  console.log("Again inside first function")
}

function second() {
  console.log("Inside second function")
}

first()
console.log("Inside Global Execution Context")
