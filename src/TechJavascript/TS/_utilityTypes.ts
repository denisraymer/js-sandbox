interface IUser {
  name?: string
  age?: number
}

const newUser: Readonly<IUser> = {
  name: "Egor",
  age: 19,
}

/* -------------------------------------------------------------------------- */

interface IDataLogin extends IUser {
  login: string
  password: string
}

const userSendData: Required<IDataLogin> = {
  login: "Egor1998",
  password: "123",
  name: "Egor",
  age: 19,
}

/* -------------------------------------------------------------------------- */

interface IPageInfo {
  title: string
}

type TRoute = "home" | "about" | "contact"

const example: Record<TRoute, IPageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
}

/* -------------------------------------------------------------------------- */

interface ITodo {
  title: string
  description: string
  completed: boolean
}

type TTodoPreview = Pick<ITodo, "title" | "completed">

const todo: TTodoPreview = {
  title: "Todo title",
  completed: true,
}

/* -------------------------------------------------------------------------- */

type TUserTodo = Omit<ITodo, "completed">

const userTodo: TUserTodo = {
  title: "Todo title",
  description: "Description todo",
}
