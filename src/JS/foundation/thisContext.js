function getRandomInfo() {
  const drinks = [
    {
      name: "Coffee",
      addictive: true,
      info: function () {
        console.log(`${this.name} is${this.addictive ? "" : "not"} addictive.`)
      },
    },
    {
      name: "Celery Juice",
      addictive: false,
      info: function () {
        console.log(`${this.name} is${this.addictive ? "" : "not"} addictive.`)
      },
    },
  ]

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  pickRandom(drinks).info()
}

function getUser() {
  const registeredUsers = [
    { name: "Morty", lastName: "Smith", age: "16" },
    {
      name: "Rick",
      lastName: "Sanchez",
      age: "65",
    },
  ]
  const deletedUsers = [{ name: "Jerry", lastName: "Smith", age: "35" }]

  function getUserInfo(value = "Not specified") {
    const user = this
    user.status = value
  }

  for (let i = 0; i < registeredUsers.length; i++) {
    getUserInfo.call(deletedUsers[i], "active")
  }

  console.log(deletedUsers)
}

getRandomInfo()
getUser()
