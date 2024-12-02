import { windowHeight } from "../page-index"


export default class Text{
    constructor(id){
        this.node = document.querySelector(".text-defil")
        this.node.style.top = windowHeight
        this.velocity = 1 
        this.y = windowHeight
    }


    tick(){
        this.y += this.velocity
        this.node.style.top = this.y + "px"
    }
}