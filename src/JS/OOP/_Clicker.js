class Clicker {
  constructor() {
    this.clickCount = 0
    this.rank = "Newbie"
    this.autoClicker = new AutoClicker(this)
  }

  click() {
    this.clickCount++
    this.updateStatus()
  }

  upgrade() {
    if (this.clickCount >= 10 && this.rank === "Newbie") {
      this.rank = "Pro"
      this.clickCount -= 10

      this.updateStatus()
    } else if (this.clickCount >= 100 && this.rank === "Pro") {
      this.rank = "Master Clicker"
      this.clickCount -= 100

      this.updateStatus()
    }
  }

  reset() {
    this.clickCount = 0
    this.rank = "Newbie"

    this.updateStatus()
  }

  updateStatus() {
    this.autoClicker.updateButton()
  }
}

class AutoClicker {
  constructor(clicker) {
    this.clicker = clicker
    this.intervalId = null
    this.cost = 50
  }

  start() {
    if (!this.intervalId && this.clicker.clickCount >= this.cost) {
      this.intervalId = setInterval(() => {
        this.clicker.click()
      }, 1000)

      this.clicker.clickCount -= this.cost

      this.updateButton()
    }
  }

  stop() {
    clearInterval(this.intervalId)

    this.intervalId = null

    this.updateButton()
  }

  updateButton() {}
}

const clicker = new Clicker()
