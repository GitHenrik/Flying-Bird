//source: w3Schools.com
const AUDIO_CONTEXT = new (AudioContext || window.webkitAudioContext)();
class Audio {
  constructor(src) {
    this.Audio = document.createElement("audio")
    this.Audio.src = src
    this.Audio.setAttribute("preload", "auto")
    this.Audio.setAttribute("controls", "none")
    this.Audio.style.display = "none"
    document.body.appendChild(this.Audio)
    this.play = function () {
      this.Audio.play()
    }
    this.stop = function () {
      this.Audio.pause()
    }
  }
}