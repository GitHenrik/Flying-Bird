
class Plant {
  /**
   * Everything must be drawn above the Y-coordinate.
   * Y coordinate is always the baseline, this makes the plants render correctly behind each other.
   * @param {String} color Base color for the plant
   * @param {String} type Type of plant to draw
   */
  constructor(type = "bush") {
    this.y = (Math.random() * (1 - Settings.groundLevel)) + Settings.groundLevel
    this.size = Settings.bgElementSize + Math.random() / 50  //slightly different sizes with the randomization
    this.x = Math.random()
    this.deadBranches = [
      Math.random() < 0.7 ? true : false,
      Math.random() < 0.7 ? true : false,
      Math.random() < 0.7 ? true : false,
      Math.random() < 0.7 ? true : false,
    ]
    this.branchesSlanted = arrayOfTruths(this.deadBranches.length)
    this.color = Settings.currentColors.plantColors[Math.floor(Math.random() * Settings.currentColors.plantColors.length)]
    this.type = type
    this.speed = Settings.BG_ELEMENT_SPEED * this.y
    this.angle = Math.floor(Math.random() * 20) - 10 // random angle to slant the plant on demand
  }

  drawOnlyBranches(ctx) {
    //trunk
    ctx.beginPath()
    ctx.lineCap = "round"
    ctx.lineWidth = 0.005
    ctx.moveTo(0, 0)
    ctx.lineTo(0, -this.size * 1.8)
    ctx.stroke()
    //branches, each drawn randomly or not
    ctx.beginPath()
    ctx.lineCap = "butt"
    ctx.lineWidth = 0.003

    if (this.deadBranches[0]) {
      ctx.save()
      ctx.translate(0, -this.size / 2)
      ctx.moveTo(0, 0)
      if (this.branchesSlanted[0]) {
        ctx.rotate(2 * this.angle * Math.PI / 180)
      }
      ctx.rotate(-this.angle * Math.PI / 180)
      ctx.lineTo(-this.size * 0.6, -this.size * 0.6)
      ctx.restore()
    }
    if (this.deadBranches[1]) {

      ctx.save()
      ctx.translate(0, -this.size / 2)
      ctx.moveTo(0, 0)
      if (this.branchesSlanted[1]) {
        ctx.rotate(2 * this.angle * Math.PI / 180)
      }
      ctx.rotate(this.angle * Math.PI / 180)

      ctx.lineTo(this.size * 0.6, -this.size * 0.6)
      ctx.restore()
    }
    if (this.deadBranches[2]) {
      ctx.save()
      ctx.translate(0, -this.size)
      if (this.branchesSlanted[1]) {
        ctx.rotate(2 * this.angle * Math.PI / 180)
      }
      ctx.rotate(-this.angle * Math.PI / 180)
      ctx.moveTo(0, 0)
      ctx.lineTo(-this.size * 0.4, -this.size * .6)
      ctx.restore()
    }
    if (this.deadBranches[3]) {
      ctx.save()
      ctx.translate(0, -this.size)
      if (this.branchesSlanted[1]) {
        ctx.rotate(2 * this.angle * Math.PI / 180)
      }
      ctx.rotate(this.angle * Math.PI / 180)
      ctx.moveTo(0, 0)
      ctx.lineTo(this.size * 0.4, -this.size * .6)
      ctx.restore()
    }

    ctx.stroke()
  }

  draw(ctx) {
    ctx.save()
    ctx.translate(this.x, Settings.groundLevel + this.y - Settings.initialGroundlevel)
    if (this.type === "dead") {
      ctx.rotate(this.angle * Math.PI / 180)
      this.drawOnlyBranches(ctx)
    } else if (this.type === "leafy") {
      //draw the foliage, then the branches on top
      ctx.beginPath()
      ctx.rotate(this.angle * Math.PI / 180)
      ctx.fillStyle = this.color
      // ctx.arc(0, -this.size * 1.5, this.size * 0.6, 0, 2 * Math.PI)
      // ctx.arc(0, -this.size, this.size * 0.7, 0, 2 * Math.PI)
      // ctx.arc(0, -this.size * 0.7, this.size * 0.6, 0, 2 * Math.PI)
      ctx.lineWidth = 0.002
      Polygons.drawCircle(ctx, 0, -this.size * 1.5, this.size * 0.6)
      Polygons.drawCircle(ctx, 0, -this.size, this.size * 0.7)
      Polygons.drawCircle(ctx, 0, -this.size * 0.7, this.size * 0.6)
      ctx.fill()

      this.drawOnlyBranches(ctx)
    } else if (this.type === "triangular") {
      //trunk behind the treetop
      ctx.beginPath()
      ctx.lineJoin = "round"
      ctx.lineCap = "round"
      ctx.lineWidth = 0.002
      ctx.fillStyle = "#693d1a"
      ctx.fillRect(-this.size / 5, -this.size / 2, (this.size / 5) * 2, this.size / 2)
      ctx.moveTo(-this.size / 5, 0)
      ctx.lineTo(-this.size / 5, -this.size / 2)
      ctx.moveTo(this.size / 5, -this.size / 2)
      ctx.lineTo(this.size / 5, 0)
      ctx.stroke()
      //draw the triangular top
      ctx.beginPath()
      ctx.lineWidth = 0.002
      ctx.fillStyle = this.color
      ctx.moveTo(-this.size / 2, -this.size / 2)
      ctx.lineTo(0, -2 * this.size)
      ctx.lineTo(this.size / 2, -this.size / 2)
      ctx.closePath()
      ctx.fill()
      ctx.closePath()
      ctx.stroke()
    }
    else if (this.type === "round") {
      //circular head of the tree
      ctx.beginPath()
      ctx.fillStyle = this.color
      ctx.arc(0, -1.5 * this.size, this.size, 0, 2 * Math.PI)
      ctx.fill()
      ctx.lineWidth = 0.002
      ctx.lineCap = "round"
      ctx.stroke()
      //trunk on top of the drawing. Circular top with bezier curve.
      ctx.beginPath()
      ctx.lineWidth = 0.002
      ctx.fillStyle = "#693d1a"
      ctx.moveTo(this.size / 5, 0)

      ctx.bezierCurveTo(this.size / 5, -this.size * 1.3, -this.size / 5, -this.size * 1.3, -this.size / 5, 0)
      //ctx.fillRect(-this.size / 5, this.size / 2, (this.size / 5) * 2, this.size)
      //ctx.rect(-this.size / 5, this.size / 2, (this.size / 5) * 2, this.size)
      ctx.fill()
      ctx.stroke()

    }
    else if (this.type === "bush") {
      //draw a bush by default. bushes are smaller than trees.
      ctx.beginPath()
      ctx.fillStyle = this.color
      //ctx.arc(0, 0, this.size / 2, Math.PI, 2 * Math.PI)
      ctx.moveTo(-this.size / 2, 0)
      ctx.quadraticCurveTo(-this.size / 2, -this.size / 2, -this.size / 4, -this.size / 4)
      ctx.quadraticCurveTo(-this.size / 6, -this.size / 2, 0, -this.size / 3)
      ctx.quadraticCurveTo(this.size / 6, -this.size / 2, this.size / 4, -this.size / 4)
      ctx.quadraticCurveTo(this.size / 2, -this.size / 2, this.size / 2, 0)
      ctx.fill()
      ctx.lineWidth = 0.002
      ctx.stroke()
      ctx.beginPath()
      ctx.lineWidth = 0.001
      ctx.moveTo(-this.size / 2, 0)
      ctx.lineTo(this.size / 2, 0)
      ctx.stroke()
    }
    else if (this.type === "grass") {
      //Draw blades of grass of different heights
      ctx.beginPath()
      ctx.strokeStyle = this.color
      ctx.moveTo(-this.size / 4, 0)
      ctx.lineTo(-this.size / 4, -this.size / 8)
      ctx.moveTo(-this.size / 8, 0)
      ctx.lineTo(-this.size / 8, -this.size / 4)
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -this.size / 8)
      ctx.moveTo(this.size / 8, 0)
      ctx.lineTo(this.size / 6, -this.size / 6)
      ctx.moveTo(this.size / 4, 0)
      ctx.lineTo(this.size / 4, -this.size / 8)
      ctx.lineWidth = 0.002
      ctx.stroke()
    }
    ctx.restore()
  }
}