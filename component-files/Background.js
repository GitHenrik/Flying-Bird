class Background {
  constructor(theme = "flatlands") {
    this.skyColor = Settings.currentColors.skyColor
    this.groundColor = Settings.currentColors.groundColor
    this.largeObjectColor = Settings.currentColors.largeObjectColor
    this.effectColor = Settings.currentColors.effectColor
    this.theme = theme
  }

  static drawShip(ctx, goingLeft = false) {
    ctx.save()
    if (goingLeft) {
      ctx.scale(-1, 1)
    }
    ctx.beginPath()
    ctx.fillStyle = "#FFFFFF"
    ctx.lineWidth = 0.01

    ctx.scale(0.9, 0.9)
    //draw a sail
    ctx.moveTo(0, 0)
    ctx.lineTo(0.07, 0)
    ctx.quadraticCurveTo(0.1, -0.12, 0, -0.15)
    ctx.closePath()
    ctx.fill()
    //draw a hull
    ctx.beginPath()
    ctx.strokeStyle = "brown"
    ctx.moveTo(0.02, 0)
    ctx.lineTo(0.02, 0.02)
    ctx.stroke()
    ctx.beginPath()
    ctx.lineWidth = 0.005
    ctx.fillStyle = "brown"
    ctx.moveTo(-0.05, 0.02)
    ctx.lineTo(0.1, 0.02)
    ctx.quadraticCurveTo(0, 0.05, -0.05, 0.02)
    ctx.fill()
    ctx.restore()

  }
  draw(ctx) {
    if (this.theme === "flatlands") {
      ctx.save()
      ctx.translate(0, 0)
      //draw the sky
      ctx.beginPath()
      ctx.fillStyle = this.skyColor
      ctx.rect(0, 0, 1, Settings.horizonLevel)
      ctx.fill()
      //draw the flatlands
      ctx.beginPath()
      ctx.fillStyle = this.groundColor
      ctx.rect(0, Settings.horizonLevel, 1, 1 - Settings.horizonLevel)
      ctx.moveTo(0, Settings.horizonLevel)
      ctx.quadraticCurveTo(0.5, Settings.horizonLevel * 0.9, 1, Settings.horizonLevel)
      ctx.fill()
      ctx.restore()
    }
    else if (this.theme === "mountainous") {
      ctx.save()
      ctx.translate(0, 0)
      //draw the sky on the background
      ctx.beginPath()
      ctx.fillStyle = this.skyColor
      ctx.rect(0, 0, 1, Settings.horizonLevel)
      ctx.fill()
      //draw the ground leading up to the mountain
      ctx.beginPath()
      ctx.fillStyle = this.groundColor
      ctx.rect(0, Settings.horizonLevel, 1, 1 - Settings.horizonLevel)
      ctx.fill()
      //draw mountains from back to front
      //mountain 1
      ctx.beginPath()
      ctx.fillStyle = this.largeObjectColor
      ctx.lineWidth = 0.005
      ctx.moveTo(0, Settings.horizonLevel)
      ctx.lineTo(0.1, Settings.horizonLevel - 0.2)
      ctx.lineTo(0.3, Settings.horizonLevel - 0.15)
      ctx.lineTo(0.4, Settings.horizonLevel)
      ctx.stroke()
      ctx.fill()
      //mountain 2
      ctx.beginPath()
      ctx.moveTo(0.4, (Settings.groundLevel + Settings.horizonLevel) / 2)
      ctx.lineTo(0.6, Settings.horizonLevel - 0.1)
      ctx.lineTo(0.7, Settings.horizonLevel - 0.12)
      ctx.lineTo(0.8, Settings.horizonLevel - 0.09)
      ctx.lineTo(0.9, Settings.horizonLevel - 0.11)
      ctx.lineTo(1.2, (Settings.groundLevel + Settings.horizonLevel) / 2)
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      //mountain 3
      ctx.beginPath()
      ctx.moveTo(0, (Settings.groundLevel + Settings.horizonLevel) / 2)
      ctx.lineTo(0.2, Settings.horizonLevel - 0.12)
      ctx.lineTo(0.25, Settings.horizonLevel - 0.1)
      ctx.lineTo(0.3, Settings.horizonLevel - 0.11)
      ctx.lineTo(0.35, Settings.horizonLevel - 0.15)
      ctx.lineTo(0.4, Settings.horizonLevel - 0.115)
      ctx.lineTo(0.45, Settings.horizonLevel - 0.07)
      ctx.lineTo(0.5, (Settings.groundLevel + Settings.horizonLevel) / 2)
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      //mountain 4
      ctx.beginPath()
      ctx.moveTo(-0.1, Settings.groundLevel - (Settings.groundLevel - Settings.horizonLevel) / 3)
      ctx.lineTo(0.05, Settings.horizonLevel - 0.05)
      ctx.lineTo(0.11, Settings.horizonLevel - 0.07)
      ctx.lineTo(0.15, Settings.horizonLevel - 0.09)
      ctx.lineTo(0.18, Settings.horizonLevel - 0.06)
      ctx.lineTo(0.25, Settings.horizonLevel - 0.05)
      ctx.lineTo(0.3, Settings.horizonLevel - 0.03)
      ctx.lineTo(0.32, Settings.horizonLevel - 0.02)
      ctx.lineTo(0.39, Settings.horizonLevel - 0.02)
      ctx.lineTo(0.43, Settings.horizonLevel - 0.01)
      ctx.lineTo(0.45, Settings.groundLevel - (Settings.groundLevel - Settings.horizonLevel) / 3)
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      //mountain 5
      ctx.beginPath()
      ctx.moveTo(0.35, Settings.groundLevel - 0.02)
      ctx.lineTo(0.37, Settings.groundLevel - 0.06)
      ctx.lineTo(0.42, Settings.groundLevel - 0.08)
      ctx.lineTo(0.44, Settings.groundLevel - 0.11)
      ctx.lineTo(0.47, Settings.groundLevel - 0.08)
      ctx.lineTo(0.51, Settings.groundLevel - 0.12)
      ctx.lineTo(0.55, Settings.groundLevel - 0.05)
      ctx.lineTo(0.64, Settings.groundLevel - 0.13)
      ctx.lineTo(0.66, Settings.groundLevel - 0.02)
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      //mountain 6
      ctx.beginPath()
      ctx.moveTo(0.8, Settings.groundLevel - 0.02)
      ctx.lineTo(0.83, Settings.groundLevel - 0.05)
      ctx.lineTo(0.87, Settings.groundLevel - 0.08)
      ctx.lineTo(0.92, Settings.groundLevel - 0.06)
      ctx.lineTo(0.96, Settings.groundLevel - 0.07)
      ctx.lineTo(1.05, Settings.groundLevel - 0.02)
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      //mountain 7
      ctx.beginPath()
      ctx.moveTo(0.5, Settings.groundLevel)
      ctx.lineTo(0.55, Settings.groundLevel - 0.1)
      ctx.lineTo(0.6, Settings.groundLevel - 0.11)
      ctx.lineTo(0.65, Settings.groundLevel - 0.08)
      ctx.lineTo(0.7, Settings.groundLevel - 0.12)
      ctx.lineTo(0.75, Settings.groundLevel - 0.1)
      ctx.lineTo(0.8, Settings.groundLevel - 0.11)
      ctx.lineTo(0.85, Settings.groundLevel - 0.05)
      ctx.lineTo(0.88, Settings.groundLevel)
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }
    else if (this.theme === "beach") {
      ctx.save()
      ctx.translate(0, 0)
      //draw the sky
      ctx.beginPath()
      ctx.fillStyle = this.skyColor
      ctx.rect(0, 0, 1, Settings.horizonLevel)
      ctx.fill()
      //draw the ocean
      ctx.beginPath()
      ctx.fillStyle = this.largeObjectColor
      ctx.rect(0, Settings.horizonLevel, 1, 1 - Settings.horizonLevel)
      ctx.moveTo(0, Settings.horizonLevel)
      ctx.quadraticCurveTo(0.5, Settings.horizonLevel * 0.9, 1, Settings.horizonLevel)
      ctx.fill()
      //draw some ships: new ship
      ctx.save()
      ctx.translate(0.7, (Settings.horizonLevel + Settings.groundLevel) / 2)
      ctx.scale(0.8, 0.8)
      Background.drawShip(ctx)
      ctx.restore()
      // new ship
      ctx.save()
      ctx.translate(0.2, (Settings.horizonLevel + Settings.groundLevel) / 2 - ((Settings.groundLevel - Settings.horizonLevel) / 4))
      ctx.scale(0.55, 0.55)
      Background.drawShip(ctx)
      ctx.restore()
      // new ship
      ctx.save()
      ctx.translate(0.4, (Settings.horizonLevel + Settings.groundLevel) / 2 - ((Settings.groundLevel - Settings.horizonLevel) / 3))
      ctx.scale(0.3, 0.3)
      Background.drawShip(ctx, true)
      ctx.restore()
      // new ship
      ctx.save()
      ctx.translate(0.43, (Settings.horizonLevel + Settings.groundLevel) / 2 - ((Settings.groundLevel - Settings.horizonLevel) / 2))
      ctx.scale(0.25, 0.25)
      Background.drawShip(ctx, true)
      ctx.restore()
      // new ship
      ctx.save()
      ctx.translate(0.5, (Settings.horizonLevel + Settings.groundLevel) / 2 - ((Settings.groundLevel - Settings.horizonLevel) / 3))
      ctx.scale(0.2, 0.2)
      Background.drawShip(ctx, true)
      ctx.restore()
      //draw the beach
      ctx.beginPath()
      let fillGradient = ctx.createLinearGradient(0, Settings.groundLevel, 0, 1)
      fillGradient.addColorStop(0, this.groundColor)
      fillGradient.addColorStop(1, this.effectColor)
      ctx.fillStyle = fillGradient
      ctx.fillRect(0, Settings.groundLevel, 1, 1 - Settings.groundLevel)
      ctx.restore()
    }
    else if (this.theme === "icy") {
      ctx.save()
      ctx.translate(0, 0)
      //draw the sky
      ctx.beginPath()
      ctx.fillStyle = this.skyColor
      ctx.rect(0, 0, 1, Settings.horizonLevel)
      ctx.fill()
      //draw the flatlands
      ctx.beginPath()
      ctx.fillStyle = this.groundColor
      ctx.rect(0, Settings.horizonLevel, 1, 1 - Settings.horizonLevel)
      ctx.moveTo(0, Settings.horizonLevel)
      ctx.quadraticCurveTo(0.5, Settings.horizonLevel * 0.9, 1, Settings.horizonLevel)
      ctx.fill()
      ctx.restore()
    }
    else if (this.theme === "city") {
      ctx.save()
      ctx.translate(0, 0)
      //draw the sky
      ctx.beginPath()
      ctx.fillStyle = this.skyColor
      ctx.rect(0, 0, 1, Settings.horizonLevel)
      ctx.fill()
      //draw the ground
      ctx.beginPath()
      ctx.fillStyle = this.groundColor
      ctx.rect(0, Settings.horizonLevel, 1, 1 - Settings.horizonLevel)
      ctx.moveTo(0, Settings.horizonLevel)
      ctx.quadraticCurveTo(0.5, Settings.horizonLevel * 0.9, 1, Settings.horizonLevel)
      ctx.fill()
      //draw buildings
      ctx.beginPath()
      ctx.lineWidth = 0.002
      ctx.fillStyle = this.largeObjectColor
      ctx.strokeStyle = this.effectColor
      ctx.translate(0, Settings.groundLevel)
      //back building
      ctx.beginPath()
      ctx.rect(-0.1, 0, 0.2, -0.25)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.2, 0, 0.15, -0.2)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.37, 0, 0.1, -0.17)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.42, 0, 0.08, -0.13)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.45, 0, 0.15, -0.26)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.7, 0, 0.12, -0.21)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.87, 0, 0.11, -0.23)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.08, 0, 0.2, -0.14)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.3, 0, 0.12, -0.09)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.62, 0, 0.12, -0.1)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.55, 0, 0.14, -0.06)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.8, 0, 0.12, -0.09)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.95, 0, 0.07, -0.15)
      ctx.fill()
      ctx.stroke()
      //draw some windows 
      ctx.fillStyle = "yellow"
      ctx.fillRect(0.02, -0.18, 0.02, 0.03)
      ctx.fillRect(0.02, -0.14, 0.02, 0.03)
      ctx.fillRect(0.05, -0.22, 0.02, 0.03)
      ctx.fillRect(0.1, -0.12, 0.02, 0.03)
      ctx.fillRect(0.13, -0.12, 0.02, 0.03)
      ctx.fillRect(0.19, -0.12, 0.02, 0.03)
      ctx.fillRect(0.21, -0.19, 0.02, 0.028)
      ctx.fillRect(0.215, -0.08, 0.02, 0.03)
      ctx.fillRect(0.25, -0.19, 0.02, 0.03)
      ctx.fillRect(0.31, -0.07, 0.02, 0.03)
      ctx.fillRect(0.38, -0.07, 0.02, 0.028)
      ctx.fillRect(0.38, -0.03, 0.02, 0.015)
      ctx.fillRect(0.43, -0.146, 0.018, 0.015)
      ctx.fillRect(0.46, -0.2, 0.02, 0.03)
      ctx.fillRect(0.5, -0.2, 0.02, 0.03)
      ctx.fillRect(0.5, -0.16, 0.02, 0.03)
      ctx.fillRect(0.55, -0.25, 0.02, 0.03)
      ctx.fillRect(0.55, -0.077, 0.02, 0.016)
      ctx.fillRect(0.59, -0.05, 0.02, 0.015)
      ctx.fillRect(0.62, -0.05, 0.02, 0.015)
      ctx.fillRect(0.62, -0.03, 0.02, 0.015)
      ctx.fillRect(0.65, -0.05, 0.02, 0.015)
      ctx.fillRect(0.69, -0.09, 0.02, 0.015)
      ctx.fillRect(0.72, -0.15, 0.02, 0.03)
      ctx.fillRect(0.75, -0.1, 0.02, 0.03)
      ctx.fillRect(0.75, -0.2, 0.02, 0.03)
      ctx.fillRect(0.82, -0.07, 0.02, 0.015)
      ctx.fillRect(0.85, -0.07, 0.02, 0.015)
      ctx.fillRect(0.85, -0.03, 0.02, 0.015)
      ctx.fillRect(0.88, -0.105, 0.02, 0.015)
      ctx.fillRect(0.88, -0.2, 0.02, 0.03)
      ctx.fillRect(0.92, -0.15, 0.02, 0.03)
      ctx.fillRect(0.925, -0.22, 0.02, 0.015)
      ctx.fillRect(0.925, -0.2, 0.02, 0.03)
      ctx.fillRect(0.95, -0.20, 0.02, 0.03)
      ctx.fillRect(0.95, -0.22, 0.02, 0.015)
      ctx.fillRect(0.97, -0.1, 0.02, 0.015)
      ctx.fillRect(0.97, -0.13, 0.02, 0.015)
      ctx.restore()
    }
  }

  /**
   * Creates a background of the specified type
   * @param {String} theme
   */
  static createBackground(theme) {
    return new Background(theme)
  }
}