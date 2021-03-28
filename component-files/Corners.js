class Corners {
  constructor(x, width, holeStart, holeSize) {
    this.leftUpper = [x, holeStart]
    this.rightUpper = [x + width, holeStart]
    this.leftBottom = [x, holeStart + holeSize]
    this.rightBottom = [x + width, holeStart + holeSize]
  }
}