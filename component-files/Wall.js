class Wall {
  //available wall types: pipe, city, beach, icy
  constructor(x, width, holeStart, holeSize, solid = false, type = "flatlands") {
    this.x = x
    this.width = width
    this.holeStart = holeStart
    this.holeSize = holeSize
    this.solid = solid
    this.corners = new Corners(x, width, holeStart, holeSize)
    this.type = type
  }
  draw(ctx) {
    if (this.type === "flatlands") {
      if (!this.solid) {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //Decoration
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.rect(this.x - 0.02, this.holeStart - 0.03, this.width + 0.04, 0.03)
        ctx.rect(this.x - 0.02, this.holeStart + this.holeSize, this.width + 0.04, 0.03)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        ctx.restore()
      } else {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //Decoration
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.rect(this.x - 0.02, this.holeStart - 0.03, this.width + 0.04, 0.03)
        ctx.rect(this.x - 0.02, this.holeStart + this.holeSize, this.width + 0.04, 0.03)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //middle block
        ctx.beginPath()
        ctx.fillStyle = "gray"
        ctx.rect(this.x, this.holeStart + 0.01, this.width, this.holeSize - 0.02)
        ctx.fill()
        ctx.lineWidth = 0.015
        ctx.stroke()


        ctx.restore()
      }
    }
    if (this.type === "icy") {
      let yTop = this.holeStart
      let yBottom = this.holeStart + this.holeSize
      let pointSize = this.width * 2

      if (!this.solid) {

        //rectangle parts
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#99FFFF"
        ctx.rect(this.x, this.holeStart + this.holeSize + pointSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.rect(this.x, 0, this.width, this.holeStart - pointSize)
        ctx.fill()
        ctx.strokeStyle = "#99FFFF"
        ctx.lineWidth = 0.005
        ctx.stroke()
        ctx.restore()

        //upper pointy end
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(this.x, this.holeStart - pointSize)
        ctx.lineTo(this.x + (this.width / 2), this.holeStart)
        ctx.lineTo(this.x + this.width, this.holeStart - pointSize)
        ctx.strokeStyle = "#99FFFF"
        ctx.lineWidth = 0.005
        ctx.fillStyle = "#99FFFF"
        ctx.fill()
        ctx.stroke()
        ctx.restore()

        //bottom pointy end
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(this.x, this.holeStart + this.holeSize + 0.01 + pointSize)
        ctx.lineTo(this.x + (this.width / 2), this.holeStart + this.holeSize)
        ctx.lineTo(this.x + this.width, this.holeStart + this.holeSize + 0.01 + pointSize)
        ctx.strokeStyle = "#99FFFF"
        ctx.lineWidth = 0.005
        ctx.fillStyle = "#99FFFF"
        ctx.fill()
        ctx.stroke()
        ctx.restore()

      } else {
        //rectangle parts
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#99FFFF"
        ctx.rect(this.x, this.holeStart + this.holeSize + pointSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.rect(this.x, 0, this.width, this.holeStart - pointSize)
        ctx.fill()
        ctx.strokeStyle = "#99FFFF"
        ctx.lineWidth = 0.005
        ctx.stroke()
        ctx.restore()

        //upper pointy end
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(this.x, this.holeStart - pointSize)
        ctx.lineTo(this.x + (this.width / 2), this.holeStart)
        ctx.lineTo(this.x + this.width, this.holeStart - pointSize)
        ctx.strokeStyle = "#99FFFF"
        ctx.lineWidth = 0.005
        ctx.fillStyle = "#99FFFF"
        ctx.fill()
        ctx.stroke()
        ctx.restore()

        //bottom pointy end
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(this.x, this.holeStart + this.holeSize + 0.01 + pointSize)
        ctx.lineTo(this.x + (this.width / 2), this.holeStart + this.holeSize)
        ctx.lineTo(this.x + this.width, this.holeStart + this.holeSize + 0.01 + pointSize)
        ctx.strokeStyle = "#99FFFF"
        ctx.lineWidth = 0.005
        ctx.fillStyle = "#99FFFF"
        ctx.fill()
        ctx.stroke()
        ctx.restore()

        //middle block
        //variables for middle block
        let middleBlockRadius = this.width / 10
        let middleBlockY = this.holeStart + middleBlockRadius
        let middleBlockX = this.x + middleBlockRadius
        let amountOfSmallBlocks = Math.round(this.holeSize / (middleBlockRadius * 2))
        for (let i = 0; i < 5; i++) {
          for (let i = 0; i < amountOfSmallBlocks; i++) {
            ctx.save()
            ctx.beginPath()
            ctx.fillStyle = "white"

            ctx.arc(middleBlockX, middleBlockY, middleBlockRadius, 0, 2 * Math.PI)
            ctx.fill()
            ctx.lineWidth = 0.005
            ctx.stroke()
            ctx.restore()

            middleBlockY += (middleBlockRadius + middleBlockRadius)
          }
          middleBlockX += this.width / 5
          middleBlockY = this.holeStart + middleBlockRadius
        }
      }
    }
    if (this.type === "city") {
      let yTop = this.holeStart
      let yBottom = this.holeStart + this.holeSize

      if (!this.solid) {

        //Stacked traffic cones top obstacle
        for (let i = 0; i < 10; i++) {

          //bottom of the traffic cone
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#FF8000"
          ctx.rect(this.x, yTop - 0.03, this.width, 0.03)
          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()

          //Top of the traffic cone
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 8), yTop - 0.03)
          ctx.lineTo(this.x + (this.width / 2), yTop - 0.2)
          ctx.lineTo(this.x - (this.width / 8) + this.width, yTop - 0.03)
          ctx.lineWidth = 0.01
          ctx.fillStyle = "#FF8000"
          ctx.fill()
          ctx.stroke()

          //decoration white line
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 5), yTop - 0.05)
          ctx.lineTo(this.x + this.width - this.width / 5, yTop - 0.05)
          ctx.lineWidth = 0.015
          ctx.strokeStyle = "#E0E0E0"
          ctx.stroke()
          ctx.restore()

          yTop -= 0.075
        }

        //obstacle bottom traffic cone single

        //Bottom of the traffic cone
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#FF8000"
        ctx.rect(this.x, yBottom + 0.2, this.width, 0.03)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //Top of the traffic cone
        ctx.beginPath()
        ctx.moveTo(this.x + (this.width / 8), yBottom + 0.2)
        ctx.lineTo(this.x + (this.width / 2), yBottom + 0.01)
        ctx.lineTo(this.x - (this.width / 8) + this.width, yBottom + 0.2)
        ctx.lineWidth = 0.01
        ctx.fillStyle = "#FF8000"
        ctx.fill()
        ctx.stroke()

        //decoration white line
        ctx.beginPath()
        ctx.moveTo(this.x + (this.width / 5), yBottom + 0.18)
        ctx.lineTo(this.x + this.width - this.width / 5, yBottom + 0.18)
        ctx.lineWidth = 0.015
        ctx.strokeStyle = "#E0E0E0"
        ctx.stroke()
        ctx.restore()

        yBottom += 0.075

        //Stacked traffic cones bottom part
        for (let i = 0; i < 10; i++) {

          //bottom of the traffic cone
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#FF8000"
          ctx.rect(this.x, yBottom + 0.2, this.width, 0.03)
          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()

          //Top of the traffic cone stack
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 8), yBottom + 0.2)
          ctx.lineTo(this.x + (this.width / 4), yBottom + 0.16)
          ctx.lineTo(this.x - (this.width / 4) + this.width, yBottom + 0.16)
          ctx.lineTo(this.x - (this.width / 8) + this.width, yBottom + 0.2)
          ctx.lineWidth = 0.01
          ctx.fillStyle = "#FF8000"
          ctx.fill()
          ctx.stroke()

          //decoration white line
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 5), yBottom + 0.18)
          ctx.lineTo(this.x + this.width - this.width / 5, yBottom + 0.18)
          ctx.lineWidth = 0.015
          ctx.strokeStyle = "#E0E0E0"
          ctx.stroke()
          ctx.restore()

          yBottom += 0.075
        }

      } else {

        //Wall behind STOP sign

        let wallPieceLegth = this.holeSize + 0.21
        let wallPiecewidth = this.width / 4
        ctx.save()
        ctx.beginPath()
        ctx.rect(this.x, this.holeStart, wallPiecewidth, wallPieceLegth)
        ctx.rect(this.x + this.width / 4, this.holeStart, wallPiecewidth, wallPieceLegth)
        ctx.rect(this.x + 2 * this.width / 4, this.holeStart, wallPiecewidth, wallPieceLegth)
        ctx.rect(this.x + 3 * this.width / 4, this.holeStart, wallPiecewidth, wallPieceLegth)



        ctx.lineWidth = 0.005
        ctx.fillStyle = "#8a4803"
        ctx.fill()
        ctx.stroke()
        ctx.restore()


        //Stacked traffic cones top obstacle
        for (let i = 0; i < 10; i++) {

          //bottom of the traffic cone
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#FF8000"
          ctx.rect(this.x, yTop - 0.03, this.width, 0.03)
          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()

          //Top of the traffic cone
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 8), yTop - 0.03)
          ctx.lineTo(this.x + (this.width / 2), yTop - 0.2)
          ctx.lineTo(this.x - (this.width / 8) + this.width, yTop - 0.03)
          ctx.lineWidth = 0.01
          ctx.fillStyle = "#FF8000"
          ctx.fill()
          ctx.stroke()

          //decoration white line
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 5), yTop - 0.05)
          ctx.lineTo(this.x + this.width - this.width / 5, yTop - 0.05)
          ctx.lineWidth = 0.015
          ctx.strokeStyle = "#E0E0E0"
          ctx.stroke()
          ctx.restore()

          yTop -= 0.075
        }



        //Bottom of the traffic cone
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#FF8000"
        ctx.rect(this.x, yBottom + 0.2, this.width, 0.03)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //Top of the traffic cone
        ctx.beginPath()
        ctx.moveTo(this.x + (this.width / 8), yBottom + 0.2)
        ctx.lineTo(this.x + (this.width / 2), yBottom + 0.01)
        ctx.lineTo(this.x - (this.width / 8) + this.width, yBottom + 0.2)
        ctx.lineWidth = 0.01
        ctx.fillStyle = "#FF8000"
        ctx.fill()
        ctx.stroke()

        //decoration white line
        ctx.beginPath()
        ctx.moveTo(this.x + (this.width / 5), yBottom + 0.18)
        ctx.lineTo(this.x + this.width - this.width / 5, yBottom + 0.18)
        ctx.lineWidth = 0.015
        ctx.strokeStyle = "#E0E0E0"
        ctx.stroke()
        ctx.restore()

        yBottom += 0.075

        //Stacked traffic cones bottom part
        for (let i = 0; i < 10; i++) {

          //bottom of the traffic cone
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#FF8000"
          ctx.rect(this.x, yBottom + 0.2, this.width, 0.03)
          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()

          //Top of the traffic cone
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 8), yBottom + 0.2)
          ctx.lineTo(this.x + (this.width / 4), yBottom + 0.16)
          ctx.lineTo(this.x - (this.width / 4) + this.width, yBottom + 0.16)
          ctx.lineTo(this.x - (this.width / 8) + this.width, yBottom + 0.2)
          ctx.lineWidth = 0.01
          ctx.fillStyle = "#FF8000"
          ctx.fill()
          ctx.stroke()

          //decoration white line
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 5), yBottom + 0.18)
          ctx.lineTo(this.x + this.width - this.width / 5, yBottom + 0.18)
          ctx.lineWidth = 0.015
          ctx.strokeStyle = "#E0E0E0"
          ctx.stroke()
          ctx.restore()

          yBottom += 0.075
        }
        ctx.save()



        //middle block, STOP sign in this case
        let centerX = this.x + this.width / 2
        let centerY = this.holeStart + this.holeSize / 2

        ctx.beginPath()
        ctx.moveTo(centerX - 0.05, centerY - 0.1)
        ctx.lineTo(centerX + 0.05, centerY - 0.1)
        ctx.lineTo(centerX + 0.1, centerY - 0.05)
        ctx.lineTo(centerX + 0.1, centerY + 0.05)
        ctx.lineTo(centerX + 0.05, centerY + 0.1)
        ctx.lineTo(centerX - 0.05, centerY + 0.1)
        ctx.lineTo(centerX - 0.1, centerY + 0.05)
        ctx.lineTo(centerX - 0.1, centerY - 0.05)
        ctx.lineTo(centerX - 0.05, centerY - 0.1)

        ctx.fillStyle = "red"
        ctx.strokeStyle = "#E0E0E0"
        ctx.lineWidth = 0.01
        ctx.fill()
        ctx.stroke()
        ctx.restore()

        ctx.save()
        ctx.fillStyle = "white"
        ctx.font = "1px Highway Gothic"
        ctx.translate(centerX - 0.085, centerY + 0.02)
        ctx.scale(0.07, 0.07)
        ctx.fillText("STOP", 0, 0)

        ctx.restore()


        /*
        //middle block placeholder
        ctx.beginPath()
        ctx.fillStyle = "gray"
        ctx.rect(this.x, this.holeStart, this.width, this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.015
        ctx.stroke()
        */
      }
    }
    if (this.type === "beach") {
      let yTop = this.holeStart - 0.1
      let yBottom = this.holeStart + this.holeSize

      if (!this.solid) {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#896837"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()
        ctx.restore()


        for (let i = 0; i < 7; i++) {
          ctx.beginPath()
          ctx.moveTo(this.x, yTop)
          ctx.bezierCurveTo(this.x, yTop + 0.1, this.x + this.width, yTop + 0.1, this.x + this.width, yTop)
          ctx.lineWidth = 0.01
          ctx.stroke()
          ctx.restore()
          yTop -= 0.1
        }

        for (let i = 0; i < 7; i++) {
          ctx.beginPath()
          ctx.moveTo(this.x, yBottom)
          ctx.bezierCurveTo(this.x, yBottom + 0.1, this.x + this.width, yBottom + 0.1, this.x + this.width, yBottom)
          ctx.lineWidth = 0.01
          ctx.stroke()
          yBottom += 0.1
        }

      } else {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#896837"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        for (let i = 0; i < 7; i++) {
          ctx.beginPath()
          ctx.moveTo(this.x, yTop)
          ctx.bezierCurveTo(this.x, yTop + 0.1, this.x + this.width, yTop + 0.1, this.x + this.width, yTop)
          ctx.lineWidth = 0.01
          ctx.stroke()
          yTop -= 0.1
        }

        for (let i = 0; i < 7; i++) {
          ctx.beginPath()
          ctx.moveTo(this.x, yBottom)
          ctx.bezierCurveTo(this.x, yBottom + 0.1, this.x + this.width, yBottom + 0.1, this.x + this.width, yBottom)
          ctx.lineWidth = 0.01
          ctx.stroke()
          yBottom += 0.1
        }

        //middle block, coconut in this case
        ctx.beginPath()
        ctx.fillStyle = "#663300"
        ctx.moveTo(this.x + this.width / 2, this.holeStart)
        ctx.bezierCurveTo(this.x - 0.05, this.holeStart, this.x - 0.05, this.holeStart + this.holeSize, this.x + this.width / 2, this.holeStart + this.holeSize)
        ctx.moveTo(this.x + this.width / 2, this.holeStart)
        ctx.bezierCurveTo(this.x + this.width + 0.05, this.holeStart, this.x + this.width + 0.05, this.holeStart + this.holeSize, this.x + this.width / 2, this.holeStart + this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.015
        ctx.stroke()


        //Decorations for the middle block
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(this.x + this.width / 2, this.holeStart + 0.05, 0.005, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(this.x + this.width / 2 - 0.03, this.holeStart + 0.08, 0.005, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(this.x + this.width / 2 + 0.03, this.holeStart + 0.08, 0.005, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()

        ctx.restore()
      }
    }
    if (this.type === "mountainous") {
      let wallRadius = this.width / 2
      let yBottom = this.holeStart + this.holeSize + wallRadius
      let yTop = this.holeStart - wallRadius

      if (!this.solid) {
        //Upper part of rock wall
        for (let i = 0; i < 10; i++) {
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#585c5c"

          ctx.arc((this.x + wallRadius), yTop, wallRadius, 0, 2 * Math.PI)
          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()
          ctx.restore()

          yTop -= (wallRadius + wallRadius / 2)
        }

        //Bottom of rock wall
        for (let i = 0; i < 10; i++) {
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#585c5c"

          ctx.arc((this.x + wallRadius), yBottom, wallRadius, 0, 2 * Math.PI)

          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()
          ctx.restore()

          yBottom += (wallRadius + wallRadius / 2)
        }

        //if there is middle wall
      } else {

        //Upper part of rock wall
        for (let i = 0; i < 10; i++) {
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#585c5c"

          ctx.arc((this.x + wallRadius), yTop, wallRadius, 0, 2 * Math.PI)
          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()
          ctx.restore()

          yTop -= (wallRadius + wallRadius / 2)
        }

        //Bottom of rock wall
        for (let i = 0; i < 10; i++) {
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#585c5c"

          ctx.arc((this.x + wallRadius), yBottom, wallRadius, 0, 2 * Math.PI)

          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()
          ctx.restore()

          yBottom += (wallRadius + wallRadius / 2)
        }

        //variables for middle block
        let middleBlockRadius = this.width / 10
        let middleBlockY = this.holeStart + middleBlockRadius
        let middleBlockX = this.x + middleBlockRadius

        //middle block
        let amountOfSmallBlocks = Math.round(this.holeSize / (middleBlockRadius * 2))
        for (let i = 0; i < 5; i++) {
          for (let i = 0; i < amountOfSmallBlocks; i++) {
            ctx.save()
            ctx.beginPath()
            ctx.fillStyle = "#4f4843"

            ctx.arc(middleBlockX, middleBlockY, middleBlockRadius, 0, 2 * Math.PI)
            ctx.fill()
            ctx.lineWidth = 0.005
            ctx.stroke()
            ctx.restore()

            middleBlockY += (middleBlockRadius + middleBlockRadius)
          }
          middleBlockX += this.width / 5
          middleBlockY = this.holeStart + middleBlockRadius
        }

        //offset for layer 2 of middle block
        middleBlockY = this.holeStart + middleBlockRadius * 2
        middleBlockX = this.x + middleBlockRadius * 2
        amountOfSmallBlocks--
        let evenSmallerBlocks = middleBlockRadius / 2

        //middle block layer 2
        for (let i = 0; i < 4; i++) {
          for (let i = 0; i < amountOfSmallBlocks; i++) {
            ctx.save()
            ctx.beginPath()
            ctx.fillStyle = "#3d2d1c"

            ctx.arc(middleBlockX, middleBlockY, evenSmallerBlocks, 0, 2 * Math.PI)
            ctx.fill()
            ctx.lineWidth = 0.005
            ctx.stroke()
            ctx.restore()

            middleBlockY += (middleBlockRadius + middleBlockRadius)
          }
          middleBlockX += this.width / 5
          middleBlockY = this.holeStart + middleBlockRadius * 2
        }
      }
    }
  }
  static generateWall(type) {
    //Generates a wall object with randomized hole position and width
    let start = Math.random();
    if (start > 0.7) { //start of the wall cannot be at the bottom
      start -= 0.3;
    }
    let holeSize = 0.25 + Math.random() / 10;
    let holeWidth = 0.1 + Math.random() / 20;
    let solid = Math.random() < 0.5 ? true : false
    let wall = new Wall(1, holeWidth, start, holeSize, solid, type);
    return wall
  }
}



function moveWall(i) {
  GlobalVariables.walls[i].x -= Settings.WALL_SPEED
  GlobalVariables.walls[i].corners.leftUpper = [GlobalVariables.walls[i].x - Settings.WALL_SPEED, GlobalVariables.walls[i].holeStart]
  GlobalVariables.walls[i].corners.rightUpper = [GlobalVariables.walls[i].x + GlobalVariables.walls[i].width - Settings.WALL_SPEED, GlobalVariables.walls[i].holeStart]
  GlobalVariables.walls[i].corners.leftBottom = [GlobalVariables.walls[i].x - Settings.WALL_SPEED, GlobalVariables.walls[i].holeStart + GlobalVariables.walls[i].holeSize]
  GlobalVariables.walls[i].corners.rightBottom = [GlobalVariables.walls[i].x + GlobalVariables.walls[i].width - Settings.WALL_SPEED, GlobalVariables.walls[i].holeStart + GlobalVariables.walls[i].holeSize]
}

function hitWall() {

  //variables for hitting round wall
  let birdRadius = GlobalVariables.bird.radius
  let wallRadius = GlobalVariables.walls[0].width / 2
  let birdPlusWallRadius = birdRadius + wallRadius

  if (!Settings.DRAW_BIRD || !Settings.DRAW_WALLS) {
    return false
  }

  //Upper vertical wall if walls type is mountainous, it this will do two checks for the upper wall if not then one
  if (GlobalVariables.walls[0].type == "mountainous" || GlobalVariables.walls[0].type == "icy") {
    if (GlobalVariables.bird.x + GlobalVariables.bird.radius >= GlobalVariables.walls[0].x && (GlobalVariables.walls[0].holeStart - GlobalVariables.walls[0].width * 1.5) >= GlobalVariables.bird.y - GlobalVariables.bird.radius && GlobalVariables.bird.x - GlobalVariables.bird.radius <= GlobalVariables.walls[0].x + GlobalVariables.walls[0].width) {

      if (Settings.SOUND_ON)
        Sounds.hitWallSound.play()
      return true
    } else {
      if (GlobalVariables.walls[0].type == "mountainous" && distance([GlobalVariables.bird.x, GlobalVariables.bird.y], [GlobalVariables.walls[0].x + GlobalVariables.walls[0].width / 2, GlobalVariables.walls[0].holeStart - GlobalVariables.walls[0].width / 2]) < birdPlusWallRadius) {

        if (Settings.SOUND_ON)
          Sounds.hitWallSound.play()

        return true
      }
    }
  } else {
    if (GlobalVariables.bird.x + GlobalVariables.bird.radius >= GlobalVariables.walls[0].x && (GlobalVariables.walls[0].holeStart) >= GlobalVariables.bird.y - GlobalVariables.bird.radius && GlobalVariables.bird.x - GlobalVariables.bird.radius <= GlobalVariables.walls[0].x + GlobalVariables.walls[0].width) {
      if (Settings.SOUND_ON)
        Sounds.hitWallSound.play()
      return true
    }
  }

  if (GlobalVariables.walls[0].type == "icy" || GlobalVariables.walls[0].type == "city") {
    if (distance([GlobalVariables.bird.x, GlobalVariables.bird.y], [GlobalVariables.walls[0].x + GlobalVariables.walls[0].width / 4, GlobalVariables.walls[0].holeStart - GlobalVariables.walls[0].width]) < birdRadius
      || distance([GlobalVariables.bird.x, GlobalVariables.bird.y], [GlobalVariables.walls[0].x + GlobalVariables.walls[0].width * 0.75, GlobalVariables.walls[0].holeStart - GlobalVariables.walls[0].width]) < birdRadius
      || distance([GlobalVariables.bird.x, GlobalVariables.bird.y], [GlobalVariables.walls[0].x + GlobalVariables.walls[0].width / 4, GlobalVariables.walls[0].holeStart + GlobalVariables.walls[0].width + GlobalVariables.walls[0].holeSize]) < birdRadius) {

      if (Settings.SOUND_ON)
        Sounds.hitWallSound.play()
      return true
    }

  }

  // If the type of the wall is city or mountainous, the collision of bottom wall will be treated differently than other wall types
  if (GlobalVariables.walls[0].type == "city" || GlobalVariables.walls[0].type == "mountainous" || GlobalVariables.walls[0].type == "icy") {
    if (GlobalVariables.bird.x + GlobalVariables.bird.radius >= GlobalVariables.walls[0].x) {
      if (GlobalVariables.walls[0].holeStart + GlobalVariables.walls[0].holeSize + GlobalVariables.walls[0].width * 1.5 <= GlobalVariables.bird.y + GlobalVariables.bird.radius) {
        if (GlobalVariables.bird.x <= GlobalVariables.walls[0].x + GlobalVariables.walls[0].width) {

          if (Settings.SOUND_ON) {
            Sounds.hitWallSound.play()
          }
          return true
        }
      }
    }
    //For other wall types than city or mountainous
  } else {
    if (GlobalVariables.bird.x + GlobalVariables.bird.radius >= GlobalVariables.walls[0].x) {
      if (GlobalVariables.walls[0].holeStart + GlobalVariables.walls[0].holeSize <= GlobalVariables.bird.y + GlobalVariables.bird.radius) {
        if (GlobalVariables.bird.x <= GlobalVariables.walls[0].x + GlobalVariables.walls[0].width) {

          if (Settings.SOUND_ON) {
            Sounds.hitWallSound.play()
          }
          return true
        }
      }
    }
  }

  //bottom round wall check for mountainous environment
  if (GlobalVariables.walls[0].type == "mountainous") {
    if (distance([GlobalVariables.bird.x, GlobalVariables.bird.y], [GlobalVariables.walls[0].x + GlobalVariables.walls[0].width / 2, GlobalVariables.walls[0].holeStart + GlobalVariables.walls[0].holeSize + GlobalVariables.walls[0].width / 2]) < birdPlusWallRadius) {

      if (Settings.SOUND_ON)
        Sounds.hitWallSound.play()

      return true
    }
  }

  //if wall type is not mountainous or icy hit top left corner
  if (GlobalVariables.walls[0].type != "mountainous" || GlobalVariables.walls[0].type != "icy") { } else {
    if (distance([GlobalVariables.bird.x, GlobalVariables.bird.y], GlobalVariables.walls[0].corners.leftUpper) < GlobalVariables.bird.radius) {

      if (Settings.SOUND_ON)
        Sounds.hitWallSound.play()
      return true
    }
  }

  //if wall type is not mountainous or icy hit top right corner
  if (GlobalVariables.walls[0].type != "mountainous" || GlobalVariables.walls[0].type != "icy") { } else {
    if (distance([GlobalVariables.bird.x, GlobalVariables.bird.y], GlobalVariables.walls[0].corners.rightUpper) < GlobalVariables.bird.radius) {

      if (Settings.SOUND_ON)
        Sounds.hitWallSound.play()
      return true
    }
  }

  // Bottom left corner is different for wall type city
  if (distance([GlobalVariables.bird.x, GlobalVariables.bird.y], GlobalVariables.walls[0].corners.leftBottom) < GlobalVariables.bird.radius) {
    if (GlobalVariables.walls[0].type != "city" && GlobalVariables.walls[0].type != "mountainous" && GlobalVariables.walls[0].type != "icy") {

      if (Settings.SOUND_ON)
        Sounds.hitWallSound.play()
      return true
    }
  }

  // Bottom right corner is different for wall type city
  if (distance([GlobalVariables.bird.x, GlobalVariables.bird.y], GlobalVariables.walls[0].corners.rightBottom) < GlobalVariables.bird.radius) {
    if (GlobalVariables.walls[0].type != "city" && GlobalVariables.walls[0].type != "mountainous" && GlobalVariables.walls[0].type != "icy") {

      if (Settings.SOUND_ON)
        Sounds.hitWallSound.play()
      return true
    }
  }

  let midpoint = [GlobalVariables.walls[0].corners.leftUpper[0] + (GlobalVariables.walls[0].corners.rightUpper[0] - GlobalVariables.walls[0].corners.leftUpper[0]) / 2, GlobalVariables.walls[0].corners.leftUpper[1]]
  if (distance([GlobalVariables.bird.x, GlobalVariables.bird.y], midpoint) < GlobalVariables.bird.radius) {

    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }

  midpoint = [midpoint[0], GlobalVariables.walls[0].corners.leftBottom[1]]
  if (distance([GlobalVariables.bird.x, GlobalVariables.bird.y], midpoint) < GlobalVariables.bird.radius) {

    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }

  else {
    return false
  }
}

function hitSolidWall() {
  if (!Settings.DRAW_BIRD) {
    return false
  }
  if (GlobalVariables.walls[0].solid && GlobalVariables.bird.x + GlobalVariables.bird.radius >= GlobalVariables.walls[0].x) {
    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }
  return false
}
