
function main() {
	let canvas = document.getElementById("main-canvas")
	let ctx = canvas.getContext("2d")
	canvas.width = Settings.SIZE
	canvas.height = Settings.SIZE
	ctx.scale(Settings.SIZE, Settings.SIZE)
	canvas.onmousemove = event => mouseMoved(event)
	canvas.onclick = event => clicked(event)
	document.addEventListener('keydown', KeyboardListener.keyPressed)
	initializeElements()
	StartScreen.displayStartScreen(ctx)
	animate()
}

function resetGame() {
	window.cancelAnimationFrame(GlobalVariables.animationId)
	//destroy all existing objects, initialize them and start over
	while (Settings.themeSets.length > 0) {
		Settings.themeSets.pop()
	}
	while (GlobalVariables.walls.length > 0) {
		GlobalVariables.walls.pop()
	}

	GlobalVariables.bird = {}

	initializeElements()
	animate()
}

function initializeElements() {
	Settings.DRAW_SCORE = true
	Settings.DRAW_HIGHSCORE = true
	Settings.DRAW_BIRD = true
	Settings.DEATH_ON = true
	Settings.STARTSCREEN_ON = false
	Settings.DRAW_HIGHSCORE = true
	Settings.DRAW_SCORE = true
	Settings.groundLevel = Settings.initialGroundlevel
	Settings.horizonLevel = Settings.groundLevel - 0.1
	Settings.themeIndex = Math.floor(Math.random() * Settings.THEMES.length)
	Weather.setRandomWeather()
	Weather.initializeRain()

	//initialize themed background sets
	for (let i = 0; i < Settings.THEMES.length; i++) {
		Settings.currentColors = Colors.createColorPalette(Settings.THEMES[i])
		let background = Background.createBackground(Settings.THEMES[i])
		let backgroundElements = BackgroundElement.createBackgroundElement(Settings.THEMES[i])
		Settings.themeSets.push(new ThemeSet(background, backgroundElements))
	}

	//initialize bird
	if (Settings.DRAW_BIRD) {
		GlobalVariables.bird = Bird.createBird()
	}

	//initialize walls
	if (Settings.DRAW_WALLS) {
		GlobalVariables.walls.push(Wall.generateWall(Settings.THEMES[Settings.themeIndex]))
	}


	GlobalVariables.currentScore = 1


}

/**
 * Returns an array of random Boolean values
 * @param {Number} length Length of the desired array
 */
function arrayOfTruths(length) {
	let array = []
	for (let i = 0; i < length; i++) {
		array.push(Math.random() < 0.5 ? true : false)
	}
	return array
}

function animate() {

	drawGame()

	if (GlobalVariables.currentScore % 175 === 0 && Settings.DRAW_WALLS) {
		GlobalVariables.walls.push(Wall.generateWall(Settings.THEMES[Settings.themeIndex]))
	}

	//bird falls relative to gravity
	if (Settings.DRAW_BIRD) {
		GlobalVariables.bird.speed += Settings.GRAVITY
		if (GlobalVariables.bird.speed > 0.02) {
			GlobalVariables.bird.speed = 0.02
		}
		GlobalVariables.bird.y += GlobalVariables.bird.speed
	}

	if (Settings.DRAW_WALLS) {
		for (let i = 0; i < GlobalVariables.walls.length; i++) {
			moveWall(i)
			if (GlobalVariables.walls[i].x + GlobalVariables.walls[i].width < 0) {
				GlobalVariables.walls.shift()
			}
		}
	}

	if (Settings.DEATH_ON && (checkDeath() || hitWall() || hitSolidWall())) {
		squishBird()

		setTimeout(function () {
			endGame()
		}, 300)

	}
	else {
		GlobalVariables.currentScore++
		if (Settings.DRAW_HIGHSCORE) {
			//update high score
			sessionStorage.setItem("finalScore", Math.floor(GlobalVariables.currentScore / 100))
			var final = sessionStorage.getItem("finalScore")
			var finalScore = Number(final)
			var previousHighScore = sessionStorage.getItem("highScore")
			var highScore = Number(previousHighScore)
			if (finalScore >= highScore) {
				sessionStorage.setItem("highScore", sessionStorage.getItem("finalScore"))

			}
			if (GlobalVariables.currentScore / 100 == highScore) {
				Sounds.playSoundHighScore()

			}
		}
		GlobalVariables.animationId = window.requestAnimationFrame(animate)

	}
}

function squishBird() {
	Settings.DRAW_HIGHSCORE = false
	Settings.DRAW_SCORE = false
	drawGame()
	GlobalVariables.bird.changeColor()
	GlobalVariables.bird.squish()
	GlobalVariables.animationId = window.requestAnimationFrame(squishBird)
}


function endGame() {
	endScreen()
	window.cancelAnimationFrame(GlobalVariables.animationId)

}


// source https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas
function distance(location1, location2) {
	let a = location1[0] - location2[0]
	let b = location1[1] - location2[1]
	let c = Math.sqrt(a * a + b * b)
	return c
}

function checkDeath() {
	if (!Settings.DRAW_BIRD || !Settings.DEATH_ON) {
		return false
	}
	if (GlobalVariables.bird.y > 1 - GlobalVariables.bird.height || GlobalVariables.bird.y < GlobalVariables.bird.height) {
		if (Settings.SOUND_ON)
			Sounds.hitFloorSound.play()
		return true
	}
	return false
}

function drawGame() {
	/*
Drawing order:
1. background
2. background elements
3. bird and obstacles
3.5. weather
4. border
5. score board
6. cursor
7. (start screen) 
*/
	let canvas = document.getElementById("main-canvas")
	let ctx = canvas.getContext("2d")

	Settings.themeSets[Settings.themeIndex].draw(ctx)
	//change theme and selected randomised weather every now and then
	if (GlobalVariables.currentScore % Settings.CHANGE_THEME_INTERVAL === 0) {
		Weather.setRandomWeather()
		if (Settings.themeIndex + 1 >= Settings.THEMES.length) {
			Settings.themeIndex = 0
		} else {
			Settings.themeIndex++
		}
	}

	if (Settings.DRAW_BIRD) {
		GlobalVariables.bird.draw(ctx)
		if (Settings.DYNAMIC_BACKGROUND) {
			let groundModifier = Settings.dynamicMultiplier * (-0.5 + GlobalVariables.bird.y) // -0.5 ... 0.5
			Settings.groundLevel = 0.5 + groundModifier
			Settings.horizonLevel = Settings.groundLevel - 0.1
		}

	}
	if (Settings.DRAW_WALLS) {
		for (let i = 0; i < GlobalVariables.walls.length; i++) {
			GlobalVariables.walls[i].draw(ctx)
		}
	}

	if (Settings.DRAW_WEATHER) {
		switch (Settings.THEMES[Settings.themeIndex]) {
			case "city":
				Weather.drawRain(ctx)
				break
			case "flatlands":
				Weather.drawRandomWeather(ctx)
				break
			case "mountainous":
				Weather.drawFog(ctx)
				break
			case "beach":
				Weather.drawSun(ctx)
				break
			case "icy": //default, clear weather
			default: //clear weather
				break
		}
	}

	if (Settings.DRAW_BORDER) {
		Border.drawBorder(ctx)
	}
	if (Settings.DRAW_SCORE) {
		ScoreCounter.drawScorecounter(ctx)
	}
	if (Settings.DRAW_HIGHSCORE) {
		HighScoreCounter.drawHighScore(ctx)
	}
	if (Settings.DRAW_CURSOR) {
		drawCursor(ctx)
	}
	if (Settings.STARTSCREEN_ON) {
		StartScreen.displayStartScreen(ctx)
	}

}

function fillCanvas(color = "#43c499") {
	//fills the entire canvas with a single color
	let canvas = document.getElementById("main-canvas")
	let ctx = canvas.getContext("2d")
	ctx.save()
	ctx.fillStyle = color
	ctx.fillRect(0, 0, 1, 1)
	ctx.restore()
}
