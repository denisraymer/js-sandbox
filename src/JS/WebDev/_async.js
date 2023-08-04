// https://www.youtube.com/watch?v=xXBTwb7cc88
"use strict"

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users"
const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts"

const $API = async (urlApi, message, params = "") => {
  const response = await fetch(`${urlApi}/${params}`)
  return console.log(message, response.json())
}

const getUsers = async (urlApi, message) => {
  await $API(urlApi, message)
}

const getPosts = async (urlApi, message, params = "") => {
  await $API(urlApi, message, params)
}

const start = async () => {
  await getUsers(USERS_API_URL, "USERS: ")
  await getPosts(POSTS_API_URL, "POSTS 1: ", "2")
  await getPosts(POSTS_API_URL, "POSTS 2: ", "4")
}

start()
