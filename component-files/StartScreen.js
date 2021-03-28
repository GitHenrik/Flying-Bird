class StartScreen {
    static displayStartScreen(ctx) {
        //when the game launches, start screen is drawn on top of the background
        Settings.STARTSCREEN_ON = true
        Settings.DRAW_BIRD = false
        Settings.DEATH_ON = false
        Settings.DRAW_SCORE = false
        Settings.DRAW_HIGHSCORE = false

        //transpanent background
        ctx.save()
        ctx.fillStyle = "#d9d0b0"
        ctx.globalAlpha = 0.6
        ctx.fillRect(0.1, 0.1, 0.8, 0.8)
        ctx.globalAlpha = 1
        ctx.translate(0, 0)
        ctx.globalAlpha = 1.0
        ctx.fillStyle = "black"
        ctx.font = "bold 1px Arial"
        ctx.scale(0.5, 0.10)
        ctx.fillText("FLYING BIRD", 0.69, 3.3, 0.6)
        ctx.font = "1px Arial"
        ctx.fillText("Press R to run the game", 0.55, 5.2, 0.85)
        ctx.scale(0.7, 0.7)
        ctx.fillText("Press W to fly", 0.95, 8.8, 0.85)
        ctx.scale(1.1, 1.1)
        ctx.fillText("Left-click to destroy obstacles", 0.7, 9.2, 1.15)
        ctx.fillText("Avoid obstacles to get points!", 0.7, 10.5, 1.15)
        ctx.restore()
    }
}




