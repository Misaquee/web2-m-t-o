export default class Drag{
    constructor(id) {
        this.Node = document.querySelector(".homme");
        this.posActuel = parseInt(this.Node.style.left); 
        this.previousPos = this.posActuel; 

        // verifi la position de l'homme a chaque 50 milisec
        setInterval(() => {
            this.posActuel = parseInt(this.Node.style.left)
        }, 50); 
    }

    tick() {
        let currentPos = this.posActuel;

        if (this.previousPos > currentPos) { // Déplacement vers la gauche
            this.Node.style.backgroundImage = "url('./img/astro.png')";
        } else if (this.previousPos < currentPos) { // Déplacement vers la droite
            this.Node.style.backgroundImage = "url('./img/astro-reverse.png')";
        }

        // Mettre à jour la position précédente
        this.previousPos = currentPos;
}
}
