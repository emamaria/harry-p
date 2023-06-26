

export const getCharacterColor = (house) => {

    let color = ""

    switch(house){

      case "gryffindor":
        color = "red"
        break;
      case "ravenclaw":
        color = "green"
        break;
      case "hufflepuff":
        color = "yellow"
        break;
      case "slytherin":
        color = "blue"
        break;
      default:
        color = "black"
        break
    }

    return color

}