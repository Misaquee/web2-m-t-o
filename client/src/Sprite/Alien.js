import { windowWidth } from "../page-meteo"
import { windowHeight } from "../page-meteo"
import $ from 'jquery';


export default class Alien{
    constructor(id){

        this.man = document.querySelector(".homme")
        this.parent = document.querySelector("body")
        this.node = document.createElement("div")
        this.proj = document.createElement("div")

        this.node.classList.add("alien")
        this.proj.classList.add("projectile")

        this.posX = 0
        this.posY = 0
        this.projx = 0


        this.return = false
        this.feu = false
        this.side = false
        this.track = false
        this.collision = false

       
        this.velocity = 5
        this.velocityP = 8
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
       
        this.tire()
        this.wait()
        
        
        console.log(parseInt(this.proj.style.left))
    }

    tire(){
        setTimeout(() => {
            // Calcule la position verticale (y)
            this.posY = this.node.offsetHeight / 2 + this.node.getBoundingClientRect().top;

            // Calcule la position horizontale (x)
            if (this.side){
                this.posX = this.node.getBoundingClientRect().right - this.node.offsetWidth ;
                this.velocityP *= -1
            }
            else {
                this.posX = this.node.getBoundingClientRect().left + this.node.offsetWidth / 2 ;
            }
            this.projx = this.posX;   
            this.proj.style.left = this.posX + "px";
            this.proj.style.top = this.posY + "px";
            this.parent.append(this.proj); 
            this.feu = true;
        }, 2500)
    }

    wait(){
            setTimeout(()=>{
                this.node.remove()
                console.log("yo")
                this.velocityP = 0
                this.proj.style.backgroundColor = "red"
                this.proj.style.filter = " drop-shadow(0 0 10px red)"
                this.proj.style.width = "4vw"
                this.return = true
            },6000)
    }

    verifCollision() {
        const projectile = this.proj.getBoundingClientRect()
        const homme = this.man.getBoundingClientRect()
        if (
            projectile.left < homme.right &&
            projectile.right > homme.left &&
            projectile.top < homme.bottom &&
            projectile.bottom > homme.top
        ) {
            console.log("Collision detected!");
            this.collision = true
            if (!this.freeze) {
                this.freeze = true;

                // Désactive le déplacement de l'homme
               
                $(this.man).draggable("disable")

                setTimeout(() => {
                    // Réactive le déplacement après 3 secondes
                    $(this.man).draggable("enable")
                    this.freeze = false
                }, 3000) // 3 secondes
            }
        }
    }

    tick(){
        this.verifCollision()
        if (this.return) {
            if(this.side)
                this.velocityP = 13.5
            else
                this.velocityP = -13.5
            this.return = false
            this.track = true
        }
        
        if(this.feu)
           this.projx += this.velocityP

        // pour que l'alien suive l'homme
        if( this.y < parseInt(this.man.style.top))
            this.y += this.velocity
        if( this.y > parseInt(this.man.style.top))
            this.y -= this.velocity
        
        // pour que le projectile suive l'homme
        if(this.track){
            if( this.posY < parseInt(this.man.style.top) + parseInt(this.man.offsetWidth) / 2)
                this.posY += Math.abs(this.velocityP)
            if( this.posY > parseInt(this.man.style.top) + parseInt(this.man.offsetWidth) / 2)
                this.posY -= Math.abs(this.velocityP)
        }
       

        this.node.style.top = this.y + "px"
        this.proj.style.left = this.projx + "px"
        this.proj.style.top = this.posY + "px"
       

        if (this.y > 1000 ){
            
        }
       
    }

    
}