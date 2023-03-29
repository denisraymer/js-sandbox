import React, { useCallback, useMemo, useState } from "react"
import "./styles.css"

const Accounter = React.memo(function Accounter({
  employees,
  companyName,
  listStyles,
  employeeClickHandler,
}) {
  const [inputValue, setInputValue] = useState("")

  return (
    <div>
      Counting rtrthrthh:{" "}
      <input
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
      />
      <h2>{companyName}</h2>
      <ul>
        {employees?.map((item, idx) => (
          <li
            style={listStyles}
            key={idx}
            onClick={() => employeeClickHandler(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
})

const Container = () => {
  const [count, setCount] = useState(0)

  const listOfItems = useMemo(() => ["Ivan", "Egor", "Vika"], [])
  // const listOfItems = useMemo(() => new Set(["Ivan", "Egor", "Vika"]), [])
  const companyName = "DiGi"
  const listStyles = useMemo(() => ({ fontStyle: "italic" }), [])

  const employeeClickHandler = useCallback((employeeName) => {
    console.log(employeeName)
  }, [])

  return (
    <div>
      I am parent <br />
      here is my children
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      {count}
      <Accounter
        companyName={companyName}
        employees={listOfItems}
        listStyles={listStyles}
        employeeClickHandler={employeeClickHandler}
      />
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <Container />
    </div>
  )
}
