class Index{
    constructor(id){
        this.pere = document.createElement("div")
        this.pere.classList.add("event" + id)
        this.pos = Math.floor(Math.random () * 2) 

        if(this.pos == 1){

        }

        if(this.pos == 2){

        }

        this.pere.addEventListener("click", ()=>{
            
        } )

    }

    tick(){

    }
}