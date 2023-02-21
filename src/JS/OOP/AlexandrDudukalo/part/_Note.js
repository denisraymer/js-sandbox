import { htmlDoneButtonCSSClass } from "./_style.js"

/* list of CSS classes */
const htmlItemCSSClass = [
  "list-group-item",
  "d-flex",
  "justify-content-between",
  "align-items-center",
]
const htmlItemSuccessCSSClass = ["list-group-item-success"]

const htmlButtonGroupCSSClass = ["btn-group", "btn-group-sm"]
const htmlDeleteButtonCSSClass = ["btn", "btn-danger"]

export class _Note {
  _noteName = ""
  _done = false

  constructor(htmlContainer, name = "", done = false) {
    this.htmlContainer = htmlContainer
    this.htmlItem = document.createElement("div")
    this.htmlButtonGroup = document.createElement("div")
    this.htmlNameSpan = document.createElement("span")
    this.htmlDoneButton = document.createElement("button")
    this.htmlDeleteButton = document.createElement("button")

    this.htmlItem.classList.add(...htmlItemCSSClass)
    this.htmlButtonGroup.classList.add(...htmlButtonGroupCSSClass)
    this.htmlDoneButton.classList.add(...htmlDoneButtonCSSClass)
    this.htmlDoneButton.textContent = "Готово"
    this.htmlDoneButton.addEventListener("click", () => {
      this.setDone = !this.getDone
    })
    this.setDone = done

    this.htmlDeleteButton.classList.add(...htmlDeleteButtonCSSClass)
    this.htmlDeleteButton.textContent = "Удалить"
    this.htmlDeleteButton.addEventListener("click", () => {
      if (confirm("Вы уверены")) {
        this.delete()
      }
    })
    this.setName = name

    this.htmlButtonGroup.append(this.htmlDoneButton, this.htmlDeleteButton)
    this.htmlItem.append(this.htmlNameSpan, this.htmlButtonGroup)
    this.htmlContainer.append(this.htmlItem)
  }

  set setName(value) {
    this._noteName = value
    this.htmlNameSpan.textContent = value
  }

  get getName() {
    return this._noteName
  }

  set setDone(value) {
    this._done = value

    if (value) {
      this.htmlItem.classList.add(...htmlItemSuccessCSSClass)
    } else {
      this.htmlItem.classList.remove(...htmlItemSuccessCSSClass)
    }
  }

  get getDone() {
    return this._done
  }

  delete() {
    this.htmlItem.remove()
  }
}
