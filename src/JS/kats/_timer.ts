class Timer {
  private tick = 0
  private timerId: NodeJS.Timer | null = null
  private paused = false
  private speed = 1

  constructor(private callBack: (tick: number) => void) {}

  public start() {
    if (this.timerId) {
      return console.log("Таймер уже запущен.")
    }

    this.timerId = setInterval(() => {
      if (this.paused) return

      this.callBack(this.tick)

      this.tick++
    }, 1000 / this.speed)

    return console.log("Таймер запущен.")
  }

  public stop() {
    if (!this.timerId) {
      return console.log("Таймер уже остановлен.")
    }

    clearInterval(this.timerId)

    this.timerId = null
    this.speed = 1
    this.paused = false
    this.tick = 0

    return console.log("Таймер остановлен.")
  }

  public pause(value = true) {
    if (this.timerId) {
      this.paused = value
      return console.log("Таймер на паузе.")
    }

    return console.log("Таймер не запущен.")
  }

  public setSpeed(speed = 1) {
    if (speed <= 0) {
      return console.log("Скорость таймера должна быть больше нуля.")
    }

    this.speed = speed
    return console.log(`Скорость таймера изменена на ${speed}.`)
  }
}

const timer = new Timer((value) => {
  console.log(`Тик! Время: ${value}`)
})

// timer.start()
// timer.setSpeed(2)
// timer.pause()
// timer.stop()

// class OldTimer {
//   private tick = 0
//   private intervalId: NodeJS.Timer | null = null
//
//   constructor(private callBack: (value: number) => void) {}
//
//   start() {
//     if (this.intervalId !== null) return
//
//     this.intervalId = setInterval(() => {
//       this.callBack(this.tick)
//
//       this.tick++
//     }, 1000)
//   }
//
//   stop() {
//     this.intervalId && clearInterval(this.intervalId)
//     this.intervalId = null
//     this.tick = 0
//   }
// }

// 1 -- 1000 | 2 -- 500
// const timer = new Timer((value) => console.log(value))
// timer.start()
