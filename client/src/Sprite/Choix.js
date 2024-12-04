import { windowWidth } from "../page-meteo"
import { windowHeight } from "../page-meteo"

export default class Choix{
    constructor(id){
        this.Node1 = document.querySelector(".choix1")
        this.Node2 = document.querySelector(".choix2")
        this.Node3 = document.querySelector(".choix3")

        this.velocity1 = 1
        this.velocity2 = 1
        this.velocity3 = 1

        this.rand1 = 10;
        this.rand2 = 11;
        this.rand3 = 12;

        this.valide = true


        this.style1 = getComputedStyle(this.Node1)
        this.x1 = parseInt(this.style1.left)
        this.y1 = parseInt(this.style1.top)

        this.style2 = getComputedStyle(this.Node2)
        this.x2 = parseInt(this.style2.left)
        this.y2 = parseInt(this.style2.top)

        this.style3 = getComputedStyle(this.Node3)
        this.x3 = parseInt(this.style3.left)
        this.y3 = parseInt(this.style3.top)
        
    }

    tick(){ 
        if(this.rand1 == 10 ){
            this.x1 += this.velocity1 
            this.y1 += this.velocity1
        }

        

        if(this.rand3 == 12){
            this.y3 += this.velocity3
        }



        if(this.rand2 == 11 ){
            this.x2 += this.velocity2
            this.y2 -= this.velocity2
        }
        //Node1
        // ----------------------------------------------------------------------------
       
        if(parseInt(this.Node1.style.left) > windowWidth - this.Node1.offsetWidth - 1 ){// si le node atteint la limite de l'écran a l'est
            this.rand1 = Math.floor(Math.random() * 2)
            this.velocity1 *= -1
            this.x1 = windowWidth - this.Node1.offsetWidth - 1
        }

        if(parseInt(this.Node1.style.left) < 0){ // si le node atteint la limite de l'écran a l'ouest
            this.rand1 = Math.floor(Math.random() * 2)
            this.velocity1 *= -1
            this.x1 = 0
        }
     
        if(parseInt(this.Node1.style.top)  > windowHeight - this.Node1.offsetHeight - 1 ){ // si le node atteint la limite de l'écran au sud
            this.rand1 = Math.floor(Math.random() * 2 + 2)
            this.y1 = windowHeight - this.Node1.offsetHeight - 1 ;
            this.velocity1 *= -1
        }

        if( parseInt(this.Node1.style.top) < 0){ // si le node atteint la limite de l'écran au nord
            this.rand1 = Math.floor(Math.random() * 2 + 2)
            this.y1 = 0;
            this.velocity1 *= -1
        }


        //Node2
        // ---------------------------------------------------------------------------
        if(parseInt(this.Node2.style.left) > windowWidth - this.Node2.offsetWidth - 1 ){// si le node atteint la limite de l'écran a l'est
            this.rand2 = Math.floor(Math.random() * 2)
            this.velocity2 *= -1
            this.x2 = windowWidth - this.Node2.offsetWidth - 1
        }

        if(parseInt(this.Node2.style.left) < 0){ // si le node atteint la limite de l'écran a l'ouest
            this.rand2 = Math.floor(Math.random() * 2)
            this.velocity2 *= -1
            this.x2 = 0
        }
     
        if(parseInt(this.Node2.style.top)  > windowHeight - this.Node2.offsetHeight - 1 ){ // si le node atteint la limite de l'écran au sud
            this.rand2 = Math.floor(Math.random() * 2 + 2)
            this.y2 = windowHeight - this.Node2.offsetHeight - 1 ;
            this.velocity2 *= -1
        }

        if( parseInt(this.Node2.style.top) < 0){ // si le node atteint la limite de l'écran au nord
            this.rand2 = Math.floor(Math.random() * 2 + 2)
            this.y2 = 0;
            this.velocity2 *= -1
        }


        // Node3
        // -----------------------------------
        if(parseInt(this.Node3.style.left) > windowWidth - this.Node3.offsetWidth - 1 ){// si le node atteint la limite de l'écran a l'est
            this.rand3 = Math.floor(Math.random() * 2)
            this.velocity3 *= -1
            this.x3 = windowWidth - this.Node3.offsetWidth - 1
        }

        if(parseInt(this.Node3.style.left) < 0){ // si le node atteint la limite de l'écran a l'ouest
            this.rand3 = Math.floor(Math.random() * 2)
            this.velocity3 *= -1
            this.x3 = 0
        }
     
        if(parseInt(this.Node3.style.top)  > windowHeight - this.Node3.offsetHeight - 1 ){ // si le node atteint la limite de l'écran au sud
            this.rand3 = Math.floor(Math.random() * 2 + 2)
            this.y3 = windowHeight - this.Node3.offsetHeight - 1 ;
            this.velocity3 *= -1
        }

        if( parseInt(this.Node3.style.top) < 0){ // si le node atteint la limite de l'écran au nord
            this.rand3 = Math.floor(Math.random() * 2 + 2)
            this.y3 = 0;
            this.velocity3 *= -1
        }

        // pour qu'ils rebondissent dans une direction aléatoire
        // ------------------------------------------------------
        if(this.rand1 == 0){
            this.x1 += this.velocity1 
            this.y1 += this.velocity1
        }

        if(this.rand1 == 1){
            this.x1 += this.velocity1 
            this.y1 -= this.velocity1
        }

        if(this.rand1 == 2){
            this.x1 += this.velocity1 
            this.y1 += this.velocity1
        }

        if(this.rand1 == 3){
            this.x1 -= this.velocity1 
            this.y1 += this.velocity1
        }

        // -----2-------

        if(this.rand2 == 0){
            this.x2 += this.velocity2 
            this.y2 += this.velocity2
        }

        if(this.rand2 == 1){
            this.x2 += this.velocity2
            this.y2 -= this.velocity2
        }

        if(this.rand2 == 2){
            this.x2 += this.velocity2
            this.y2 += this.velocity2
        }

        if(this.rand2 == 3){
            this.x2 -= this.velocity2
            this.y2 += this.velocity2
        }


        // -----3-------

        if(this.rand3 == 0){
            this.x3 += this.velocity3 
            this.y3 += this.velocity3
        }

        if(this.rand3 == 1){
            this.x3 += this.velocity3
            this.y3 -= this.velocity3
        }

        if(this.rand3 == 2){
            this.x3 += this.velocity3
            this.y3 += this.velocity3
        }

        if(this.rand3 == 3){
            this.x3 -= this.velocity3
            this.y3 += this.velocity3
        }


        this.Node1.style.left = this.x1 + "px";
        this.Node1.style.top = this.y1 + "px";

        this.Node2.style.left = this.x2 + "px";
        this.Node2.style.top = this.y2 + "px";

        this.Node3.style.left = this.x3 + "px";
        this.Node3.style.top = this.y3 + "px";
        
    }
}