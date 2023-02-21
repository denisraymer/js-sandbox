import { _Note } from "./_Note.js"
import { _Addition } from "./_Addition.js"
;(function startApp(content) {
  const rootContent = document.getElementById(content)

  new _Addition(rootContent)
  new _Note(rootContent, "Test name")
})("app")
