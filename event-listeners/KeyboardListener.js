class KeyboardListener {
  static keyPressed(key) {
    if (key.code === "KeyW") {
      if (!Settings.DRAW_BIRD) {
        return null
      }
      if (Settings.SOUND_ON) {
        Sounds.playSoundFly()
      }
      GlobalVariables.bird.fly()
    }
    if (key.code === "KeyR") {
      resetGame()
    }
  }
}