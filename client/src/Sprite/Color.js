export default class Color{
    constructor(id){
        this.border = document.querySelector("input")
        this.pere = document.createElement("div")
        this.pere.classList.add("event" + id)
        this.pos = Math.floor(Math.random () * 2) 

        if(this.pos == 1){
        }

        if(this.pos == 2){
        }

        this.pere.addEventListener("click", ()=>{
        } )

        if(id == 1){
            this.border.style.boxShadow = "0px 0px 100px 10px blue";

        }
        if(id == 2){
            this.border.style.boxShadow = "0px 0px 100px 10px red";

        }
        if(id == 3){
            this.border.style.boxShadow = = "0px 0px 100px 10px green";

        }
        if(id == 4){
            this.border.style.boxShadow = = "0px 0px 100px 10px yellow";
        }


    }

    tick(){


    }
}