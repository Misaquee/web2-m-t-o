export default class Drag{
    constructor(id){
        this.Node = document.querySelector(".homme")
        this.posActuel;
        setInterval(() => {
            this.posActuel = this.Node.style.left
        },20)
    }


    tick(){
        this.x = this.Node.style.left
        if(this.posActuel > this.x){ // l'objet drag va vers la gauche 
            this.Node.style.backgroundImage = " url('./img/astro.png')";
            console.log("hey")
        } 

        if(this.posActuel < this.x){ // l'objet drag va vers la droite 
            this.Node.style.backgroundImage = " url('./img/astro-reverse.png')";
            console.log("Hey")
        } 

        if(this.posActuel == this.x){ // l'objet drag va vers la droite 
            
        }
    }
}