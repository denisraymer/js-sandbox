// https://learn.javascript.ru/async-await
"use strict"

const delay = (time = 1500) => {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      reject(`${500} это маленькая задержка!`)
    }

    setTimeout(() => resolve(`Задержка: ${time}`), time)
  })
}

const exampleTimerAsyncFunc = async () => {
  const result1 = await delay(3200)
  const result = await delay(6500)

  console.log(result1)
  console.log(result)
}

;(function startApp() {
  exampleTimerAsyncFunc()
})()
