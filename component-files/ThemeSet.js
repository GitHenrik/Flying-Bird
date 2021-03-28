/**
 * Wrapper class for everything drawn in the game's background
 */
class ThemeSet {
  constructor(background, backgroundElements) {
    this.background = background
    this.backgroundElements = backgroundElements
  }
  draw(ctx) {
    this.background.draw(ctx)
    this.backgroundElements.draw(ctx)
  }
}