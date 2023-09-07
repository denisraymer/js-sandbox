export const getSaveName = (): undefined | string => {
  const name = localStorage.getItem("name")

  // name -> string || null

  if (name === null) return

  // name -> string

  const parsedName = JSON.parse(name)

  // parsedName -> any

  if (typeof parsedName !== "string") return

  return parsedName
}
