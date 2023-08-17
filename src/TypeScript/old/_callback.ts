// Типизация CallBack
function myOwnForEach<T>(array: T[], callback: (item: T) => void) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

myOwnForEach([1, 2, 3, 4], (item) => {
  console.log(item)
})
