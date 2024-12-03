import { windowWidth } from "../page-meteo"
import { windowHeight } from "../page-meteo"


export default class Alien{
    constructor(id){

        this.man = document.querySelector(".homme")
        this.parent = document.querySelector("body")
        this.node = document.createElement("div")
        this.proj = document.createElement("div")

        this.node.classList.add("alien")
        this.proj.classList.add("projectile")

        this.feu = false
        this.projX = 0
        this.side = false
        this.velocity = 2
        this.velocityP = 5
        this.y = Math.floor(Math.random () * windowHeight)
        
        if(this.y == 0 || this.y < this.node.offsetTop) // vérifie si l'alien depasse le cadre
            this.y += this.node.offsetTop
        
        if(this.y == windowHeight || this.y > windowHeight - this.node.offsetTop)
            this.y -=  this.node.offsetTop

        if(Math.random() < 0.5){
            this.node.style.left = 0 + this.node.offsetLeft + "px"
            this.node.style.top = this.y + "px"
            this.side = false
        }
        else{
            this.node.style.left = windowWidth - 125 + "px"
            this.node.style.top = this.y + "px"
            this.side = true
        }

        //this.node.getBoundingClientRect().left
        this.parent.append(this.node)
        this.style = getComputedStyle(this.node)
        this.tire()
    }

    tire(){
        setTimeout(() => {
            let posX = 0
            let posY = 0
            
            if(this.side){
                posY += this.node.offsetHeight / 2 + parseInt(this.style.top) 
                posX += parseInt(this.style.left) 
                console.log(posX)
                
                this.proj.style.left = posX + "px"
                this.proj.style.top = posY + "px"
            }
            else{
                posX += this.node.offsetWidth 
                posY += this.node.offsetHeight / 2 + parseInt(this.style.top)
                this.proj.style.left = posX + "px"
                this.proj.style.top = posY + "px"
            }
            console.log(this.style.top)
            console.log(parseInt(this.proj.style.left))
            this.parent.append(this.proj)
            this.feu = true
        }, 2500)
        
    }

    tick(){
        if(this.feu)
            this.projX += this.velocityP

        if( this.y < parseInt(this.man.style.top)){
            this.y += this.velocity
        }

        if( this.y > parseInt(this.man.style.top)){
            this.y -= this.velocity
        }

        this.proj.style.left = this.projX + "px"
       
        this.node.style.top = this.y + "px"

       

        if (this.y > 1000 ){
            this.node.remove()
        }
       
    }

    
}