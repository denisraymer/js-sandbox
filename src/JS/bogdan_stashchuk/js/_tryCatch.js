function fnWithError() {
  throw new Error("Created some error")
}

try {
  fnWithError()
} catch (error) {
  console.error(error)
  // console.log(error.message)
}

console.log("Continue...")
