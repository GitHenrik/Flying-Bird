class Sounds {
  static hitFloorSound = new Audio("audio-files/auts.aac")
  static hitWallSound = new Audio("audio-files/pum.aac")
  static flySound = new Audio("audio-files/sfx_wing.mp3")

  static playSoundSolidWall() {
    let osc = AUDIO_CONTEXT.createOscillator()

    let gainNode = AUDIO_CONTEXT.createGain()

    gainNode.gain.setValueAtTime(0, AUDIO_CONTEXT.currentTime)

    osc.connect(gainNode)

    gainNode.connect(AUDIO_CONTEXT.destination)

    osc.frequency.setValueAtTime(100, AUDIO_CONTEXT.currentTime)
    osc.type = "triangle"


    let duration = 1
    osc.start(AUDIO_CONTEXT.currentTime)
    osc.stop(AUDIO_CONTEXT.currentTime + duration)

    gainNode.gain.exponentialRampToValueAtTime(1, AUDIO_CONTEXT.currentTime + 0.1)
    gainNode.gain.linearRampToValueAtTime(0.2, AUDIO_CONTEXT.currentTime + 0.3)
    gainNode.gain.linearRampToValueAtTime(0.004, AUDIO_CONTEXT.currentTime + duration)

    setTimeout(function () {
      osc.disconnect()
    }, duration * 2300)
  }

  static playShootingSound() {
    let osc = AUDIO_CONTEXT.createOscillator()
    let gainNode = AUDIO_CONTEXT.createGain()
    gainNode.gain.setValueAtTime(0, AUDIO_CONTEXT.currentTime)
    osc.connect(gainNode)
    gainNode.connect(AUDIO_CONTEXT.destination)
    osc.frequency.setValueAtTime(390, AUDIO_CONTEXT.currentTime)
    osc.type = "sawtooth"
    let duration = 1
    osc.start(AUDIO_CONTEXT.currentTime)
    osc.stop(AUDIO_CONTEXT.currentTime + duration)
    gainNode.gain.linearRampToValueAtTime(0.3, AUDIO_CONTEXT.currentTime + 0.01)
    gainNode.gain.linearRampToValueAtTime(0.1, AUDIO_CONTEXT.currentTime + duration + 0.3)
    gainNode.gain.exponentialRampToValueAtTime(0.00001, AUDIO_CONTEXT.currentTime + duration)
    setTimeout(function () {
      osc.disconnect()
    }, duration * 500)
  }

  static playSoundHighScore() {
    let osc = AUDIO_CONTEXT.createOscillator()
    let gainNode = AUDIO_CONTEXT.createGain()
    gainNode.gain.setValueAtTime(0, AUDIO_CONTEXT.currentTime)
    osc.connect(gainNode)
    gainNode.connect(AUDIO_CONTEXT.destination)
    osc.frequency.setValueAtTime(390, AUDIO_CONTEXT.currentTime)
    osc.type = "triangle"
    let duration = 1
    osc.start(AUDIO_CONTEXT.currentTime)
    osc.stop(AUDIO_CONTEXT.currentTime + duration)
    gainNode.gain.linearRampToValueAtTime(1, AUDIO_CONTEXT.currentTime + 0.01)
    gainNode.gain.linearRampToValueAtTime(0.1, AUDIO_CONTEXT.currentTime + duration + 0.3)
    gainNode.gain.exponentialRampToValueAtTime(0.00001, AUDIO_CONTEXT.currentTime + duration)
    setTimeout(function () {
      osc.disconnect()
    }, duration * 500)
  }

  static playSoundFly() {
    let osc = AUDIO_CONTEXT.createOscillator()
    let gainNode = AUDIO_CONTEXT.createGain()
    gainNode.gain.setValueAtTime(0, AUDIO_CONTEXT.currentTime)
    osc.connect(gainNode)
    gainNode.connect(AUDIO_CONTEXT.destination)
    osc.frequency.setValueAtTime(190, AUDIO_CONTEXT.currentTime)
    osc.type = "sine"
    let duration = 1
    osc.start(AUDIO_CONTEXT.currentTime)
    osc.stop(AUDIO_CONTEXT.currentTime + duration)
    gainNode.gain.linearRampToValueAtTime(1, AUDIO_CONTEXT.currentTime + 0.01)
    gainNode.gain.linearRampToValueAtTime(0.1, AUDIO_CONTEXT.currentTime + duration + 0.3)
    gainNode.gain.exponentialRampToValueAtTime(0.00001, AUDIO_CONTEXT.currentTime + duration)
    setTimeout(function () {
      osc.disconnect()
    }, duration * 500)
  }
}


