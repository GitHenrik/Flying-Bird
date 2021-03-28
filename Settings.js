class Settings {
  //BASE SETTINGS
  static DRAW_BIRD = true
  static DRAW_WALLS = true
  static DRAW_SCORE = true
  static DRAW_BORDER = true
  static DRAW_CURSOR = true
  static DRAW_HIGHSCORE = true
  static SOUND_ON = true
  static DEATH_ON = true
  static DRAW_WEATHER = true
  static STARTSCREEN_ON = true

  //VELOCITY SETTINGS
  static GRAVITY = 0.0005

  static BG_ELEMENT_SPEED = 0.0022
  static WALL_SPEED = Settings.BG_ELEMENT_SPEED * 1.5

  //CANVAS SETTINGS
  static SIZE = 1000

  //THEME SETTINGS
  static THEMES = ["icy", "flatlands", "mountainous", "beach", "city"]
  static themeSets = []
  static themeIndex = 0
  static CHANGE_THEME_INTERVAL = 600

  //WEATHER SETTINGS
  static WEATHER_TYPES = ["clear", "rainy", "foggy", "sunny"]
  static SUN_STRENGTH = 1.2
  static randomWeather = "clear"

  //BACKGROUND SETTINGS
  static initialGroundlevel = 0.5
  static groundLevel = Settings.initialGroundlevel
  static horizonLevel = Settings.groundLevel - 0.1
  static DYNAMIC_BACKGROUND = true
  static dynamicMultiplier = -0.025

  //BACKGROUND ELEMENT SETTINGS
  static bgElementSize = 0.02

  //BIRD SETTINGS
  static birdX = 0.1
  static birdY = 0.5
  static birdWidth = 0.05
  static birdHeight = 0.05
  static birdRadius = 0.05
  static birdSpeed = -0.005
  static birdEyeColor = "white"
  static birdBodyColor = "yellow"
  static birdBeakColor = "orange"


  //COLOR SETTINGS
  static currentColors = {}
}