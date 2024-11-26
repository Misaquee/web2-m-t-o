export default class Color{
    constructor(id){
    
        this.node = document.querySelector(".bonjour")
        this.border = document.querySelector("input")
        this.opacity = 70
        this.chance = Math.random() 

        this.node.addEventListener("click", () => {
           console.log("yy")
        })

        // designe la couleur de message et de l'input
         if(id == 1){
            this.node.style.color = "rgba(255, 0, 0, 1)"
            this.color= "rgba(255, 0, 0, 1)"
        }
        if(id == 2){
            this.node.style.color = "rgba(0, 0, 255, 1)"
            this.color =  "rgba(0, 0, 255, 1)"
        }
        if(id == 3){
            this.node.style.color = "rgba(0, 255, 0, 1)"
            this.color = "rgba(0, 255, 0, 1)"
        }
        if(id == 4){
            this.node.style.color = "rgba(255, 255, 0, 1)"
            this.color = "rgba(255, 255, 0, 1)"
        }
    }

    tick(){
        this.opacity += 0.4
        this.border.style.boxShadow =  this.color + " 0px 0px " + this.opacity + "px 5px" ;
        
    }
}