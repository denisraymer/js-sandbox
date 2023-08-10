import { htmlDoneButtonCSSClass } from "./_style.js"

export class _Addition {
  constructor(htmlContainer) {
    this.htmlContainer = htmlContainer
    this.htmlAddButton = document.createElement("button")
    this.htmlAddButton.classList.add(...htmlDoneButtonCSSClass)
    this.htmlAddButton.textContent = "Добавить"

    this.htmlContainer.append(this.htmlAddButton)
  }

  set setAddNote(value) {}
}
