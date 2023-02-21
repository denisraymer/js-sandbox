import { Manager } from "./_manager"

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

console.log(managerEchoProject.getFullPosition())
console.log(managerEchoProject.getFullName())
