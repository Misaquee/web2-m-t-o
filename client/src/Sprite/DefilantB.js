import { nodeDefile } from "../page-meteo";
import { top } from "../page-meteo"

export default class DefilantB{
    constructor(id){
        
        this.y = parseInt(nodeDefile.getBoundingClientRect().y)
        this.velocity = id
        console.log(id)
        console.log(nodeDefile.offsetWidth)
    }

    tick(){
        this.y += this.velocity
        nodeDefile.style.top = this.y + "px"
        
        if(this.y > 0)
            this.velocity = 0
        if(this.y < parseInt(top))
            this.velocity = 0
        
    }
}