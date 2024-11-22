class Event{
    constructor(id){
        this.node = document.createElement("div")
        this.node.classList.add("event" + id)
        this.pos = Math.floor(Math.random () * 2) 
    }
    tick(){

    }
}