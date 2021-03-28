class Border {
  static drawBorder(ctx) {
    ctx.save()
    ctx.beginPath()
    ctx.translate(0, 0)
    ctx.moveTo(0, 0)
    ctx.beginPath()
    ctx.rect(0, 0, 1, 1)
    ctx.lineWidth = 0.02
    ctx.stroke()
    ctx.restore()
  }
}