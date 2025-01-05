import { nodeDefile } from "../page-meteo";
import { top } from "../page-meteo"

export default class DefilantB{
    constructor(id){
        this.node = nodeDefile
        this.y = parseInt(this.node.getBoundingClientRect().y)
        this.velocity = id
    }

    tick(){
        this.y += this.velocity
                this.node.style.top = this.y + "px"
        
                if(this.y > 0)
                    this.velocity = 0
                if(this.y < parseInt(top))
                    this.velocity = 0
        
    }
}