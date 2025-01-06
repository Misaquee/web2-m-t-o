export default class Arriere{
    constructor(id){
        this.node = document.querySelector("body")
        console.log(this.node.getBoundingClientRect())
        this.x = 0
        this.velocity = 0.5
    }

    tick(){
        this.x -= this.velocity
        this.node.style.backgroundPositionX = this.x + "px"
    }
}