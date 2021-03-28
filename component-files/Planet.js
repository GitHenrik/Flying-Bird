class Planet {
  constructor(color = "purple", type = "regular") {
    this.color = color
    this.type = type
    this.size = Settings.bgElementSize + Math.random() / 50
    this.x = Math.random()
    this.y = (0.15 * Math.random()) * Math.random() //planets are always very high up
    this.speed = 0 //planets are so far away, that they don't visibly move
    this.ringPoints = Polygons.createPolygonPoints(4, this.size)
    this.ringColor = Colors.randomColor(0.7)
    this.rotation = Math.ceil(Math.random() * 180) * Math.PI / 180
    this.orbitClockwise = Math.random() < 0.5 ? true : false
  }

  drawBasePlanet(ctx) {
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.translate(this.x, Settings.groundLevel + this.y - Settings.initialGroundlevel)
    ctx.arc(0, 0, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  draw(ctx) {
    if (this.type === "regular") {
      this.drawBasePlanet(ctx)
    }
    if (this.type === "ringed") {
      this.drawBasePlanet(ctx)
      ctx.save()
      ctx.beginPath()
      ctx.lineWidth = 0.004
      ctx.strokeStyle = this.ringColor
      ctx.translate(this.x, Settings.groundLevel + this.y - Settings.initialGroundlevel)
      ctx.rotate(this.rotation)
      ctx.moveTo(this.ringPoints[0][0], this.ringPoints[0][1])
      ctx.quadraticCurveTo(this.size * 2, this.size / 2, 0, this.ringPoints[1][1] / 2)
      ctx.quadraticCurveTo(-this.size * 2, this.size / 2, this.ringPoints[2][0], this.ringPoints[2][1])
      ctx.stroke()
      ctx.restore()
    }
    if (this.type === "orbited") {
      this.drawBasePlanet(ctx)
      ctx.save()
      ctx.beginPath()
      ctx.translate(this.x, Settings.groundLevel + this.y - Settings.initialGroundlevel)
      ctx.rotate(this.rotation)
      this.orbitClockwise ? this.rotation += Math.PI / 180 : this.rotation -= Math.PI / 180
      ctx.arc(this.size * 1.2, this.size * 1.2, this.size / 4, 0, 2 * Math.PI)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.restore()
    }
  }
}