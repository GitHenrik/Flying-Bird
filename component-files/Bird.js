
class Bird {
  constructor(x, y, speed, width, height, radius, eyeColor, bodyColor, beakColor) {
    this.x = x
    this.y = y
    this.speed = speed
    this.width = width
    this.radius = radius // used in collision checks
    this.height = height
    this.rotation = 0
    this.rotationSpeed = (2 * Math.PI / 360) * 2000
    this.shapeSpeed = 0.007
    this.eyeColor = eyeColor
    this.bodyColor = bodyColor
    this.beakColor = beakColor


  }

  static createBird() {
    return new Bird(
      Settings.birdX,
      Settings.birdY,
      Settings.birdSpeed,
      Settings.birdWidth,
      Settings.birdHeight,
      Settings.birdRadius,
      Settings.birdEyeColor,
      Settings.birdBodyColor,
      Settings.birdBeakColor)
  }

  changeColor() {
    this.bodyColor = Colors.randomColor()
  }

  squish() {
    this.width -= this.shapeSpeed * 0.15
    this.height += this.shapeSpeed * 0.15
    if (this.width <= 0) {
      this.width = 0
    }
  }

  changeShape() {
    this.height -= this.shapeSpeed
    this.width += this.shapeSpeed
  }

  resetShape() {
    this.width = Settings.birdWidth
    this.height = Settings.birdHeight
  }

  fly() {
    this.speed = -0.01
  }

  draw(ctx) {
    ctx.save()
    //draw body
    ctx.beginPath()
    ctx.fillStyle = this.bodyColor
    ctx.translate(this.x, this.y)
    //ctx.arc(0, 0, this.radius, 0, 2 * Math.PI)
    this.rotation = this.speed * this.rotationSpeed
    ctx.rotate(this.rotation)
    ctx.ellipse(0, 0, this.width, this.height, 0, 0, Math.PI * 2);
    ctx.fill()
    ctx.lineWidth = 0.005
    ctx.stroke()

    //draw beak
    ctx.beginPath()
    ctx.fillStyle = this.beakColor
    ctx.moveTo(0.03, -0.01);
    ctx.lineTo(0.08, 0.0);
    ctx.lineTo(0.03, 0.01);
    ctx.closePath();
    ctx.fill()
    ctx.stroke()

    //draw eye
    ctx.beginPath()
    ctx.arc(0, -this.width / 2, this.width / 3, 0, 2 * Math.PI)
    ctx.fillStyle = this.eyeColor
    ctx.fill()
    ctx.stroke()


    //draw wing
    ctx.beginPath();
    //rotate wing 
    ctx.rotate(this.rotation * -1.8)
    ctx.moveTo(-0.02, 0.01);
    ctx.bezierCurveTo(-0.01, 0.06, 0.01, 0.03, 0.01, 0.01);
    //almost transparent, so the wing looks like its almost same color as the birds body
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fill()
    ctx.lineWidth = 0.002
    ctx.stroke();
    //1 line
    ctx.beginPath();
    ctx.moveTo(-0.013, 0.01);
    ctx.lineTo(-0.01, 0.035);
    ctx.stroke()
    //2 line
    ctx.beginPath();
    ctx.moveTo(-0.005, 0.01);
    ctx.lineTo(-0.005, 0.037);
    ctx.stroke()
    //3 line
    ctx.beginPath();
    ctx.moveTo(0.003, 0.01);
    ctx.lineTo(0.0007, 0.035);
    ctx.stroke()

    ctx.restore()
  }
}











