import TiledImage from "../../TiledImage";
import { X } from "../../page-para";
import { Y } from "../../page-para";
export default class Milieu{
    constructor(){
		this.node = document.querySelector(".cas")
        console.log(this.node.getBoundingClientRect())
        this.x = 0
        this.velocity = 1
    }
	tick(){
        this.x -= this.velocity
        this.node.style.backgroundPositionX = this.x + "px"
    }
}