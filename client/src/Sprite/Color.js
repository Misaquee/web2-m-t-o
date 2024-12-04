export default class Color{
    constructor(id){
    
        this.node = document.querySelector(".bonjour")
        this.border = document.querySelector("input")
        this.opacity = 30
        this.chance = Math.random() 


        // designe la couleur de message et de l'input
        this.color = this.getColor();
        this.node.style.color = this.color;
        this.border.style.color = this.color
    }

    // choisi une couleur aléatoie en hexadecimal
    getColor(){
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    tick(){
        this.opacity += 0.4
        this.border.style.boxShadow = this.color + " 0px 0px " + this.opacity + "px 5px";
        
    }
}