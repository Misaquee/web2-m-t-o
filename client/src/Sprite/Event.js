import { windowWidth } from "../page-index.js"
import { windowHeight } from "../page-index.js"
import TiledImage from "../TiledImage.js"

export default class Event{
    constructor(id){
        this.parent = document.querySelector("body")
        this.node = document.createElement("div")
        this.y = Math.floor(Math.random () * windowHeight)
      
        let columnCount = 8
		let rowCount = 1
		let refreshDelay = 100
		let loopColumns = true
		let scale = 1.0

        let node = document.createElement("div")
		document.querySelector("body").append(node)

        this.tiledImage = new TiledImage(
            "./imgSprite/SpriteMario.png",
            columnCount, 
            rowCount, 
            refreshDelay, 
            loopColumns, 
            scale, 
            node
        );
          
        if (id == 1) {
        this.x = windowWidth;
        this.valide = true;
        this.tiledImage.changeRow(0)
        this.tiledImage.changeMinMaxInterval(4, 7); // Frames pour aller à gauche
        } else if (id == 2) {
        this.x = 0;
        this.valide = false;
        this.tiledImage.changeRow(0)
        this.tiledImage.changeMinMaxInterval(0, 3); // Frames pour aller à droite
        }
          
    }

    tick(){
        if(this.valide){
            this.x--
        }
        else{
            this.x++
        }

        this.tiledImage.tick(this.x, this.y)

        return true
    }
}