import { Manager } from "./_manager"
import { Person } from "./_person"
import { Employee } from "./_employee"

const person = new Person("Toma", "Tomato", "22")
const employee = new Employee(
  "Toma",
  "Tomato",
  "22",
  "123321",
  "manager",
  "3800$"
)
const managerEchoProject = new Manager(
  "Darina",
  "Lamaeva",
  "25",
  "123321",
  "manager",
  "3800$",
  "echo-power",
  "01.01.2023",
  "-"
)

// console.log(managerEchoProject.getFullPosition())
// console.log(managerEchoProject.getFullName())
const massGreeting = (persons: Person[]) => {
  persons.forEach(({ greeting }) => {
    greeting()
  })
}

massGreeting([person, employee, managerEchoProject])
