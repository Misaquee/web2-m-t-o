import { X } from "../../page-para"
import { Y } from "../../page-para"
import TiledImage from "../../TiledImage.js"
export default class Man{
    constructor(){
        let columnCount = 8
		let rowCount = 1
		let refreshDelay = 100
		let loopColumns = true
		let scale = 1.0
        this.body = document.querySelector("body")
		let node = document.createElement("div")
		this.body.append(node)

        node.style.position = "absolute"
       
		this.tiledImage = new TiledImage (
			"../../../imgParallax/bird.png",
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
        
    }

    tick(){
        
        this.x = X
        this.y = Y

		this.tiledImage.tick(this.x, this.y)
		
		return true;


    }

   
}