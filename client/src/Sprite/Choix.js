import { windowWidth } from "../page-meteo"
import { windowHeight } from "../page-meteo"

export default class Choix{
    constructor(id){
        this.Node1 = document.querySelector(".choix1")
        this.Node2 = document.querySelector(".choix2")
        this.Node3 = document.querySelector(".choix3")
        this.velocity1 = 0.7
        this.velocity2 = 0.7
        this.velocity3 = 0.7

        this.speedX1 = 0
        this.speedY1 = 0
        this.speedX2 = 0
        this.speedY2 = 0
        this.speedX3 = 0
        this.speedY3 = 0


        this.Node1.addEventListener("mouseover",()=>{
            console.log("yo")
        })

    }

    tick(){
        this.speedX1 += this.velocity1
        this.speedY1 += this.velocity1
        
       
        if(this.Node1.style.left > windowWidth){
            this.ran = math.floor(math.random() * 2)
            this.velocity1 *= -1
            if(this.ran == 1){
                this.speedY1 += this.velocity1
            }
            else{
                this.speedY1 -= this.velocity1
            }
        }

        if(this.Node1.style.left < 0){
            this.ran = math.floor(math.random() * 2)
            this.velocity1 *= -1
            if(this.ran == 1){
                this.speedY1 += this.velocity1
            }
            else{
                this.speedY1 -= this.velocity1
            }
        }

        if(this.Node1.style.top < 0){
            this.ran = math.floor(math.random() * 2)
            this.velocity1 *= -1
            if(this.ran == 1){
                this.speedX1 += this.velocity1
            }
            else{
                this.speedX1 -= this.velocity1
            }
        }

        if(this.Node1.style.top > windowHeight){
            this.ran = math.floor(math.random() * 2)
            this.velocity1 *= -1
            if(this.ran == 1){
                this.speedX1 += this.velocity1
            }
            else{
                this.speedX1 -= this.velocity1
            }
          
        }
        
        this.Node1.style.left = this.speedX1 + "px";
        this.Node1.style.top = this.speedY1 + "px";


        
        this.speedY2 += this.velocity2
    
        if(this.Node2.style.left > windowWidth){
            this.ran = math.floor(math.random() * 2)
            this.velocity2 *= -1
            if(this.ran == 1){
                this.speedY2 += this.velocity2
            }
            else{
                this.speedY2 -= this.velocity2
            }
        }

        if(this.Node2.style.left < 0){
            this.ran = math.floor(math.random() * 2)
            this.velocity2 *= -1
            if(this.ran == 1){
                this.speedY2 += this.velocity2
            }
            else{
                this.speedY2 -= this.velocity2
            }
        }

        if(this.Node2.style.top < 0){
            this.ran = math.floor(math.random() * 2)
            this.velocity2 *= -1
            if(this.ran == 1){
                this.speedX2 += this.velocity2
            }
            else{
                this.speedX2 -= this.velocity2
            }
        }

        if(this.Node2.style.top > windowHeight){
            this.ran = math.floor(math.random() * 2)
            this.velocity2 *= -1
            if(this.ran == 1){
                this.speedX2 += this.velocity2
            }
            else{
                this.speedX2 -= this.velocity2
            }
        }

        this.Node2.style.left = this.speedX2 + "px";
        this.Node2.style.top = this.speedY2 + "px";


        this.speedX3 -= this.velocity3
        this.speedY3 += this.velocity3
        
        if(this.Node3.style.left > windowWidth){
            this.ran = math.floor(math.random() * 2)
            this.velocity3 *= -1
            if(this.ran == 1){
                this.speedY3 += this.velocity3
            }
            else{
                this.speedY3 -= this.velocity3
            }
        }

        if(this.Node3.style.left < 0){
            this.ran = math.floor(math.random() * 2)
            this.velocity3 *= -1
            if(this.ran == 1){
                this.speedY3 += this.velocity3
            }
            else{
                this.speedY3 -= this.velocity3
            }
        }

        if(this.Node3.style.top < 0){
            this.ran = math.floor(math.random() * 2)
            this.velocity3 *= -1
            if(this.ran == 1){
                this.speedX3 += this.velocity3
            }
            else{
                this.speedX3 -= this.velocity3
            }
        }

        if(this.Node3.style.top > windowHeight){
            this.ran = math.floor(math.random() * 2)
            this.velocity3 *= -1
            if(this.ran == 1){
                this.speedX3 += this.velocity3
            }
            else{
                this.speedX3 -= this.velocity3
            }
        }

        this.Node3.style.left = this.speedX3 + "px";
        this.Node3.style.top = this.speedY3 + "px";
    }
}