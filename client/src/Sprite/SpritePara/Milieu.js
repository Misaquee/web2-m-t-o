import TiledImage from "../../TiledImage";
import { X } from "../../page-para";
import { Y } from "../../page-para";
class Milieu{
    constructor(){
        let columnCount = 9
		let rowCount = 4
		let refreshDelay = 100
		let loopColumns = true
		let scale = 1.0

		let node = document.createElement("div")
		document.querySelector("#game").append(node)

		this.tiledImage = new TiledImage (
			//"../images/skeleton-walk.png",
			columnCount,
			rowCount,
			refreshDelay,
			loopColumns,
			scale,
			node
		);

		this.tiledImage.changeRow(1) // commence a 0
		this.tiledImage.changeMinMaxInterval(0, 8) // boucle de 

		//this.tiledImage.addImage("../images/item-hood-walk.png")
		//this.tiledImage.addImage("../images/item-shield-walk.png")


		this.x = 300;
		this.y = 300;

    }

    tick(){
        if(leftArrowOn){
			this.tiledImage.changeRow(1)
			this.x--
		}
		if(rightArrowOn){
			this.tiledImage.changeRow(3)
			this.x++
		}

		this.tiledImage.setPaused(!leftArrowOn && !rightArrowOn) // utile pour arrêter l'animation si elle ne se déplace pas
		this.tiledImage.tick(this.x, this.y)
		
		return true;

    }
}