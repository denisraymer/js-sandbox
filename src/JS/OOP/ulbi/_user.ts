class User {
  private _username
  private _password
  private readonly _id

  constructor(username, password) {
    this._username = username
    this._password = password
    this._id = Math.random()
  }

  get username() {
    return this._username
  }

  set username(value) {
    this._username = value
  }

  get password() {
    return this._password
  }

  set password(value) {
    this._password = value
  }

  get id() {
    return this._id
  }
}

const newDataBaseUser = new User("Egor", "123bebebe")

newDataBaseUser.username = "Tom"
newDataBaseUser.password = "123bebebe"
