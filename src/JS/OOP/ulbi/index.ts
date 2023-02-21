class SensorCanvas {
  private readonly _canvas
  private _width
  private _height

  constructor(canvas, width, height) {
    this._canvas = canvas
    this._width = width
    this._height = height
  }

  get width() {
    return this._width
  }

  set width(value) {
    if (value <= 0) {
      this._width = 150
    } else {
      this._width = value
    }
  }

  get height() {
    return this._height
  }

  set height(value) {
    if (value <= 0) {
      this._height = 150
    } else {
      this._height = value
    }
  }

  public getContextCanvas() {
    return `${this._canvas} - ${this.width} - ${this.height}`
  }
}

const CSC = new SensorCanvas("CANVAS", 150, 150)
const CSC2 = new SensorCanvas("CANVAS 2", 250, 250)

console.log(`CSC: ${CSC.getContextCanvas()}`)
console.log(`CSC2: ${CSC2.getContextCanvas()}`)
