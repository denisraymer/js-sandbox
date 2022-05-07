// Служебные типы

interface ITodo {
  title: string
  description: string
}

// Partial * делает все свойства необязательными
function updateTodo(todo: ITodo, fieldsToUpdate: Partial<ITodo>) {
  return { ...todo, ...fieldsToUpdate }
}

const fullTodo: ITodo = {
  title: "TITLE",
  description: "DESCRIPTION",
}

const updatedTodo = updateTodo(fullTodo, {
  description: "News DESCRIPTION",
})

interface IProps {
  a?: number
  b?: number
}

// Required * Создает тип, состоящий из всех свойств Typeset to required.
// Противоположность Partial.
const object: IProps = { a: 6 }
// const objectUseRequired: Required<IProps> = { a: 6 }
// Error: TS2741: Property 'b' is missing in type '{ a: number; }' but required
// in type 'Required<IProps>'

// Readonly * Создает тип со всеми свойствами, Type установленными на readonly,
// что означает, что свойства созданного типа нельзя переназначить.
const todo: Readonly<ITodo> = {
  title: "TITLE",
  description: "DESCRIPTION",
}

// todo.title = "New TITLE"
// Error: TS2540: Cannot assign to 'title' because it is a read-only property.

// Эта утилита полезна для представления выражений присваивания,
// которые не будут работать во время выполнения
// (например, при попытке переназначить свойства замороженного объекта ).
function freeze<Type>(obj: Type): Readonly<Type> {
  return Object.freeze(obj)
}

// Record<Keys, Type>
// Создает тип объекта, ключами свойств которого являются Keys,
// а значениями свойств являются Type. Эту утилиту можно использовать
// для отображения свойств одного типа на другой тип.

interface ICatInfo {
  age: number
  description: string
}

type ICatName = "CAT1" | "CAT2"

const cats: Record<ICatName, ICatInfo> = {
  CAT1: { age: 12, description: "DESCRIPTION" },
  CAT2: { age: 6, description: "DESCRIPTION" },
}

interface IPickTodo {
  title: string
  description: string
  completed: boolean
}

type ITodoPreview = Pick<IPickTodo, "title" | "completed">

// Pick<Type, Keys>
// Создает тип, выбирая набор свойств Keys(строковый литерал
// или объединение строковых литералов) из Type.
const completeTodo: ITodoPreview = {
  title: "TITLE",
  completed: true,
}

// Omit<Type, Keys>
// Создает тип, выбирая все свойства Type
// и затем удаляя Keys(строковый литерал или объединение строковых литералов).

interface IOmitTodo {
  title: string
  description: string
  completed: boolean
  createdAt: number
}

type IOmitTodoPreview = Omit<IOmitTodo, "description">
const omitTodo: IOmitTodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
}

type IOmitTodoInfo = Omit<IOmitTodo, "completed" | "createdAt">
const omitTodoInfo: IOmitTodoInfo = {
  title: "New TITLE",
  description: "New DESCRIPTION",
}

// Exclude<UnionType, ExcludedMembers>
// Создает тип, исключая из него UnionTypeвсе члены объединения,
// которые можно присвоить ExcludedMembers.

type T0 = Exclude<"a" | "b" | "c", "a">
type T1 = Exclude<"a" | "b" | "c", "a" | "b">
type T2 = Exclude<string | number | (() => void), Function>

// Копирование типа свойство из другого интерфейса

type ICopyTypeTodo = {
  text: ITodo["title"]
}

const copyTypeTodo: ICopyTypeTodo = {
  text: "Copy type of ITodo",
}
