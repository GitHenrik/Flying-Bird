class Weather {
  static drawFog(ctx) {
    ctx.save()
    ctx.beginPath()
    let fillGradient = ctx.createLinearGradient(0, 1, 0, -1)
    fillGradient.addColorStop(0, "rgba(255,255,255,0.95)")
    fillGradient.addColorStop(1, "rgba(255,255,255,0)")
    ctx.fillStyle = fillGradient
    ctx.rect(0, 0, 1, 1)
    ctx.fill()
    ctx.restore()
  }
  static drawSun(ctx) {

    ctx.save()
    ctx.beginPath()
    let radialGradient = ctx.createRadialGradient(0, 0, 0.2, 0, 0, Settings.SUN_STRENGTH)
    radialGradient.addColorStop(0, "rgba(255, 255, 0, 0.8)")
    radialGradient.addColorStop(1, "rgba(255, 230, 0, 0)")
    ctx.fillStyle = radialGradient
    ctx.fillRect(0, 0, 1, 1)
    ctx.restore()

  }
  static drawRain(ctx) {
    for (let i = 0; i < GlobalVariables.raindrops.length; i++) {
      GlobalVariables.raindrops[i].draw(ctx)
    }
  }
  static drawRandomWeather(ctx) {
    switch (Settings.randomWeather) {
      case "foggy":
        Weather.drawFog(ctx)
        break
      case "sunny":
        Weather.drawSun(ctx)
        break
      case "rainy":
        Weather.drawRain(ctx)
        break
      case "clear": //don't draw weather in this case
      default:
        break
    }
  }
  static setRandomWeather() {
    Settings.randomWeather = Settings.WEATHER_TYPES[Math.floor(Math.random() * Settings.WEATHER_TYPES.length)]
  }
  static initializeRain() {
    let raindropArray = []
    let raindropCount = 100 + Math.floor(Math.random() * 100)
    for (let i = 0; i < raindropCount; i++) {
      raindropArray.push(new Raindrop())
    }
    GlobalVariables.raindrops = raindropArray
  }
}