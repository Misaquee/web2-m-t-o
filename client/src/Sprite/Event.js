import { windowWidth } from "../page-index.js"
import { windowHeight } from "../page-index.js"
import  TiledImage  from "../TiledImage.js";

export default class Event{
    constructor(id){
        this.parent = document.querySelector("body")
        this.node = document.createElement("div")
        this.y = Math.floor(Math.random () * windowHeight)
      
        let columnCount = 1
		let rowCount = 1
		let refreshDelay = 100
		let loopColumns = true
		let scale = 1.0

        let node = document.createElement("div")
		document.querySelector("body").append(node)

        if(id == 1){
            this.x = windowWidth
            this.valide = true  // savoir si le sprite commence a la fin par rapport a l'axe x 
            this.tiledImage = new TiledImage (
                "../img/SpriteMario.png",
                columnCount = 1,
                rowCount = 1,
                refreshDelay = 100,
                loopColumns = true,
                scale = 1,
                node
            );
        }

        if(id == 2){
            this.x = 0
            this.valide = false // savoir si le sprite commence au debut de la page par rapport a l'axe x 
            this.tiledImage = new TiledImage (
                "../img/SpriteMario.png",
                columnCount = 1,
                rowCount = 1,
                refreshDelay = 100,
                loopColumns = true,
                scale = 1,
                node
            );
        }

        this.tiledImage.changeRow(1) // commence a 0
		this.tiledImage.changeMinMaxInterval(0, 8) // 

    }

    tick(){
        if(this.valide){
            this.x--
        }
        else{
            this.x++
        }
        this.tiledImage.tick(this.x, this.y)
    }
}