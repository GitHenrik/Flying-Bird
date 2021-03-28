class Rock {
  constructor(points, size, type) {

    this.y = (Math.random() * (1 - Settings.groundLevel)) + Settings.groundLevel
    this.speed = Settings.BG_ELEMENT_SPEED * this.y
    this.color = Colors.randomGrayColor()
    this.points = points
    this.size = size
    this.x = this.size + Math.random()
    this.type = type

  }
  draw(ctx) {
    ctx.save()
    ctx.fillStyle = this.color
    if (this.type === "arced") {
      ctx.beginPath()
      ctx.translate(this.x, Settings.groundLevel + this.y - Settings.initialGroundlevel)
      ctx.arc(0, 0, this.size, Math.PI, 2 * Math.PI)
      ctx.fill()
      ctx.lineWidth = 0.003
      ctx.stroke()
    }
    else if (this.type === "pebble") {
      ctx.translate(this.x, Settings.groundLevel + this.y - Settings.initialGroundlevel)
      ctx.lineWidth = 0.001
      ctx.beginPath()
      ctx.arc(-this.size / 2, -this.size / 6, this.size / 6, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(0, -this.size / 4, this.size / 4, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(this.size / 3, -this.size / 5, this.size / 5, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(-this.size / 3, -this.size / 6, this.size / 6, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(this.size / 4, -this.size / 8, this.size / 8, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()

    }
    else if (this.type === "bumpy" || this.type === "irregular") {
      ctx.beginPath()
      Polygons.drawPolygon(ctx, this.points, this.x, Settings.groundLevel + this.y - Settings.initialGroundlevel)
      ctx.lineTo(-this.size, 0)
      ctx.fill()
      ctx.lineWidth = 0.003
      ctx.stroke()

    }
    ctx.restore()
  }
}