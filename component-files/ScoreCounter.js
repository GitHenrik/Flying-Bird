class ScoreCounter {

  static drawScorecounter(ctx) {
    ctx.save()
    ctx.fillStyle = "white"
    ctx.globalAlpha = 0.2
    ctx.fillRect(0.05, 0.04, 0.35, 0.078)
    ctx.globalAlpha = 1.0
    ctx.fillStyle = "black"
    ctx.translate(0, 0)
    ctx.font = "0.6px Arial"
    ctx.scale(0.5, 0.10)
    ctx.fillText("Score: ", 0.09, 1, 0.6)
    ctx.fillText(Math.floor(GlobalVariables.currentScore / 100), 0.65, 1.01, 0.11)
    ctx.restore()
  }
}