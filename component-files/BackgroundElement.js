
class BackgroundElement {
  /**
   * A container component for drawing background elements and handling their reappearance on the screen
   * @param {Array} elementList List of elements to be drawn to the background
   */
  constructor(elementList) {
    this.elementList = elementList
  }
  draw(ctx) {
    for (let i = 0; i < this.elementList.length; i++) {
      this.elementList[i].draw(ctx)
      this.elementList[i].x -= this.elementList[i].speed
      if (this.elementList[i].x < 0 - this.elementList[i].size) {
        this.elementList[i].x = 1 + this.elementList[i].size
      }
    }
  }

  static createBackgroundElement(theme = "flatlands") {
    let includeRocks = true
    let includePlants = true
    let includePlanets = true
    switch (theme) {
      case "flatlands":
        break
      case "mountainous":
        includePlants = false
        break
      case "beach":
        includePlanets = false
        includePlants = false
        break
      case "city":
        includePlants = false
        includeRocks = false
        break
      case "icy":
        break
      default:
        break
    }

    let rockList = []
    let plantList = []
    let planetList = []

    if (includeRocks) {
      let rockCount = 8 + Math.ceil(Math.random() * 12) // random amount of elements, at least some
      const types = ["arced", "bumpy", "irregular", "pebble"]
      let points = []
      let edges = 5 + Math.ceil(Math.random() * 7)
      let size = Settings.bgElementSize
      for (let i = 0; i < rockCount; i++) {

        let type = types[Math.floor(Math.random() * types.length)]
        if (type === "bumpy") {
          points = Polygons.createPolygonPoints(edges, size, true)
        }
        if (type === "irregular") {
          points = Polygons.createPolygonPoints(edges, size, true, true)
        }

        rockList.push(new Rock(points, size, type))
        //randomize properties for the next rock
        edges = 5 + Math.ceil(Math.random() * 7)
        size = Settings.bgElementSize
      }
    }
    if (includePlants) {
      let plantCount = 20 + Math.ceil(Math.random() * 20) // random amount of elements, at least some
      const types = ["dead", "round", "triangular", "bush", "grass", "leafy"]
      for (let i = 0; i < plantCount; i++) {
        let type = types[Math.floor(Math.random() * types.length)]
        plantList.push(new Plant(type))
      }
    }
    if (includePlanets) {
      let planetCount = 3 + Math.ceil(Math.random() * 3)// random amount of elements, at least some
      const types = ["regular", "ringed", "orbited"]
      for (let i = 0; i < planetCount; i++) {
        let type = types[Math.floor(Math.random() * types.length)]
        planetList.push(new Planet(Colors.randomColor(), type))
      }
    }

    //combine all elements for this backgroundElement object, and sort them to render correctly "behind" each other
    let elementList = rockList.concat(plantList).concat(planetList)
    elementList.sort((current, next) => current.y - next.y)

    return new BackgroundElement(elementList)
  }
}

