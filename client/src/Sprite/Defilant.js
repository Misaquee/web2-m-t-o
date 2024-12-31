export default class Defilant{
    constructor(id){
        this.node = document.querySelector(".defile")
        this.y = parseInt(this.node.getBoundingClientRect().y)
        this.velocity  =id
    }

    tick(){
        this.y += this.velocity
        this.node.style.top = this.y + "px"

    }
}