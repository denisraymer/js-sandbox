const timerPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
  console.log("Timer starts")
  const startTime = performance.now()
  await timerPromise()
  const endTime = performance.now()
  console.log("Timer ended", startTime - endTime)
}

asyncFn()

// const getSomeData = (url) =>
//   new Promise((resolve, reject) =>
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => resolve(json))
//       .catch((error) => reject(error))
//   )
//
// getSomeData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response)
//   .catch((error) => error)

/* -------- ПЕРЕПИСАЛ НА ASYNC/AWAIT -------- */

const getData = async (url) => {
  const response = await fetch(url)
  return response.json()
}

try {
  const data = await getData("https://jsonplaceholder.typicode.com/todos/1")

  console.log(data)
} catch (error) {
  console.log(error.message)
}
