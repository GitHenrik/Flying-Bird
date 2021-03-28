class Polygons {
  static createPolygonPoints(edges = 3, radius = 0.1, isHalved = false, irregular = false) {
    if (edges < 3) {
      return null
    }
    let points = []
    let nextX = radius
    let nextY = 0
    for (let i = 1; i <= edges; i++) {
      points.push([nextX, nextY])
      nextX = radius * Math.cos(i * 2 * Math.PI / edges)
      nextY = radius * Math.sin(i * 2 * Math.PI / edges)
    }
    if (isHalved) {
      for (let i = 0; i < points.length; i++) {
        if (points[i][1] < 0) {
          points.splice(i)
          break;
        }
      }
      if (irregular) {
        for (let i = 0; i < points.length - 1; i++) {
          //multiply each cordinate by 0.5 < multiplier < 1
          points[i][0] *= Math.random() / 2 + 0.5
          points[i][1] *= Math.random() / 2 + 0.5
        }
      }
    }

    return points
  }
  static drawPolygon(ctx, points, x, y) {
    ctx.translate(x, y)
    ctx.moveTo(points[0][0], points[0][1])
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], -points[i][1])
    }
  }

  static drawCircle(ctx, x, y, radius) {
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.stroke()
  }
}