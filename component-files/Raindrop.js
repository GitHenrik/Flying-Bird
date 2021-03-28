class Raindrop {
  constructor() {
    this.x = Math.random()
    this.y = -Math.random()
    this.fallSpeed = 0.01 + (Math.random() / 50) //fall speed between 1%-3%
    this.length = 0.04
    this.width = 0.003
  }
  fall() {
    this.y += this.fallSpeed
    if (this.y > 1) {
      this.y = -this.length
    }
  }
  draw(ctx) {
    ctx.save()
    ctx.beginPath()
    ctx.lineWidth = this.width
    ctx.strokeStyle = "rgba(69, 134, 255, 0.5)"
    ctx.translate(this.x, this.y)
    ctx.moveTo(0, 0)
    ctx.lineTo(0, this.length)
    ctx.stroke()
    ctx.restore()
    this.fall()
  }
}