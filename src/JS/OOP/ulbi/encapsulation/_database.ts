class Database {
  private readonly _url
  private readonly _port
  private readonly _username
  private readonly _password
  private _tables

  constructor(url, port, username, password) {
    this._url = url
    this._port = port
    this._username = username
    this._password = password
    this._tables = []
  }

  public createNewTable(table) {
    this._tables.push(table)
  }

  public clearTable() {
    this._tables = []
  }

  get url() {
    return this._url
  }

  get port() {
    return this._port
  }

  get username() {
    return this._username
  }

  get password() {
    return this._password
  }

  get tables() {
    return this._tables
  }
}

const UserDatabase = new Database(
  "http://localhost",
  "8080",
  "Egor",
  "123bebebe"
)

UserDatabase.createNewTable({ user: "Egor", role: "admin" })

// UserDatabase.clearTable()
