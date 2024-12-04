import { windowHeight } from "../page-meteo";

export default class Meteo {
    constructor(id, town) {
        this.meteo = town
        console.log(this.meteo)
        this.parent = document.querySelector(".choix" + id)
        this.temp = this.parent.querySelector(".temp")

        this.velocityPluie = Math.floor(Math.random() * 16 + 10) // pour avoir des vitesses différantes entre chaque goutte et flocon
        this.velocityNeigeY = Math.floor(Math.random() * 10 + 2)
        this.velocityNeigeX = 2

        this.goutte = document.createElement("div")
        this.goutte.classList.add("pluie")
        

        if(this.meteo.rain > 0){ // s'il pleut 
            this.goutte.style.left = Math.floor(Math.random() * this.parent.offsetWidth) + "px"
            this.goutte.style.top = (this.parent.getBoundingClientRect().top ) + "px"
            this.parent.append(this.goutte)
        }

        this.flocon = document.createElement("div")
        this.flocon.classList.add("neige")

        if(this.meteo.snowfall){
            this.flocon.style.left = Math.floor(Math.random() * this.parent.offsetWidth) + "px"
            this.flocon.style.top = (this.parent.getBoundingClientRect().top ) + "px" 
            this.parent.append(this.flocon)
        }
    }

    tick() {
       
        let parent = this.parent.getBoundingClientRect() // pour avoir la position en continue

        if(this.meteo.rain > 0){
            let y = parseInt(this.goutte.style.top) // avoir le top de goutte en continue
            y += this.velocityPluie; 
            this.goutte.style.top = y + "px";

            
            if (y > parent.height) { // si la goute depasse le bottom 
                this.goutte.style.top =  -1 + "px";
                this.goutte.style.left = Math.floor(Math.random() * this.parent.offsetWidth) + "px";
            }
        }

        
        if(this.meteo.snowfall > 0){
            let y = parseInt(this.flocon.style.top)
            let x = parseInt(this.flocon.style.left)

            y += this.velocityNeigeY;
            //if(Math.random() < 0.5)
            //    this.velocityNeige
            //else
            //    -this.velocityNeige
            x += Math.random() < 0.5 ? this.velocityNeigeX : -this.velocityNeigeX

            this.flocon.style.top = y + "px"
            this.flocon.style.left = x + "px"

            
            if (y > parent.height) {
                this.flocon.style.top =  -1 + "px"
                this.flocon.style.left = Math.floor(Math.random() * this.parent.offsetWidth) + "px"
            }
        }
        
    }
}
