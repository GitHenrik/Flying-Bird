function endScreen() {


    let canvas = document.getElementById("main-canvas")
    let ctx = canvas.getContext("2d")
    ctx.save()
    ctx.fillStyle = "#8B0000"
    ctx.globalAlpha = 0.6
    ctx.fillRect(0.1, 0.1, 0.8, 0.8)
    ctx.translate(0, 0)
    ctx.globalAlpha = 1.0
    ctx.fillStyle = "black"
    ctx.font = "bold 1px Arial"
    ctx.scale(0.5, 0.10)
    ctx.fillText("GAME OVER", 0.69, 2, 0.6)
    ctx.font = "1px Arial"
    ctx.fillText("Your points:", 0.25, 3.5, 0.6)
    ctx.font = "bold 1px Arial"
    ctx.fillText(Math.floor(GlobalVariables.currentScore / 100), 0.9, 3.5, 0.11)
    ctx.font = "1px Arial"
    ctx.fillText("Highest score:", 0.25, 5, 0.74)
    ctx.font = "bold 1px Arial"
    ctx.fillText(sessionStorage.getItem("highScore"), 1, 5, 0.13)
    ctx.font = "1px Arial"
    ctx.fillText("Press R to play again", 0.35, 8.5, 1.3)
    ctx.restore()
}   
