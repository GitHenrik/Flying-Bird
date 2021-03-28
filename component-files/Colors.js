class Colors {
  static createColorPalette(theme) {
    //instantiate color palette with flatlands colors
    let colorPalette = {
      skyColor: "#A2D6F9",
      groundColor: "#7DD181",
      plantColors: ["#4B7F52", "#96E8BC"],
      largeObjectColor: "gray",
      effectColor: "#FFFFFF"
    }
    switch (theme) {
      case "icy":
        colorPalette = {
          skyColor: "#575757",
          groundColor: "#FFFFFF",
          plantColors: ["#52d7ff", "#b0fffc"],
          largeObjectColor: "gray",
          effectColor: "#FFFFFF"
        }
        return colorPalette
      case "flatlands":
        return colorPalette
      case "mountainous":
        colorPalette = {
          skyColor: "#C4B7CB",
          groundColor: "#BBC7CE",
          plantColors: ["#BFEDEF", "#98E2C6"],
          largeObjectColor: "#545C52",
          effectColor: "#FFFFFF"
        }
        return colorPalette
      case "beach":
        colorPalette = {
          skyColor: "#1E96FC",
          groundColor: "#FCFC00",
          plantColors: ["#FFC600"],
          largeObjectColor: "#072AC8",
          effectColor: "#FFC600"
        }
        return colorPalette
      case "city":
        colorPalette = {
          skyColor: "#0c132e",
          groundColor: "#080b12",
          plantColors: ["#5d807f"],
          largeObjectColor: "#273c50",
          effectColor: "#5d807f"
        }
        return colorPalette
      default:
        return colorPalette
    }
  }

  static randomColor(opacity = 1) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return ("rgba(" + r + "," + g + "," + b + "," + opacity + ")")
  }

  static randomGrayColor() {
    /**
   * Returns a random grayscale color between RGB values of 50-150
   */
    let grayLevel = 50 + Math.random() * 100
    return ("rgba(" + grayLevel + "," + grayLevel + "," + grayLevel + ",1)")
  }

  static getRGBColor(r, g, b) {
    return ("rgba(" + r + "," + g + "," + b + ",1)")
  }
}