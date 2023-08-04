const getSomeData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  )

getSomeData("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response)
  .catch((error) => error)

const getData = (url) => {
  const response = {
    data: null,
    error: null,
  }

  const promise = new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  )

  promise
    .then((response) => (response.data = response))
    .catch((error) => (response.error = error))

  return response
}

const { data, error } = getData("https://jsonplaceholder.typicode.com/todos/1")
