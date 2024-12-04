import { windowHeight } from "../page-meteo";

export default class Meteo {
    constructor(id, town) {
        this.meteo = town
        this.parent = document.querySelector(".choix" + id)
        this.temp = this.parent.querySelector(".temp")
        this.velocityPluie = 7
        this.velocityNeige = 3

        // Tableaux qui contiennent la pluie
        this.gouttes = []
        // Tableaux qui contiennent la neige
        this.neiges = []

        if (!this.temp) { // Vérifiez si temp est vide, null ou nan
            this.temp = document.createElement("div")
            this.temp.classList.add("temp")
            this.parent.append(this.temp)
        }

        this.temp.innerHTML = this.meteo.temperature + "°C" // Ajouter la température au HTML

        // Si il pleut
        if (this.meteo.rain > 0) {
            for (let i = 0; i < 50; i++) {
                this.goutte = document.createElement("div")
                this.goutte.classList.add("pluie")

                this.goutte.style.left = Math.floor(Math.random() * this.parent.offsetWidth) + "px"
                this.goutte.style.top = Math.floor(Math.random() * -25) + "px"

                this.gouttes.append(this.goutte)
                this.parent.append(this.goutte)
            }
        }
        // Si il neige
        else if (this.meteo.snowfall > 0) {
            for (let i = 0; i < 50; i++) {
                this.flocon = document.createElement("div")
                this.flocon.classList.add("neige")

                this.flocon.style.left = Math.floor(Math.random() * this.parent.offsetWidth) + "px"
                this.flocon.style.top = Math.floor(Math.random() * -25 + -10) + "px" // Les faire apparaître hors de l'écran
                this.neiges.push(this.flocon)
                this.parent.append(this.flocon)
            }
        }
    }

    tick() {
        // Mise à jour des gouttes de pluie
        console.log(this.gouttes)
        this.gouttes.forEach(goutte => {
            let y = parseInt(goutte.style.top)
            y += this.velocityPluie; // Vitesse de la pluie
            goutte.style.top = y + "px";

            // Si la goutte sort de l'écran, on la réinitialise
            if (y > windowHeight) {
                goutte.style.top = Math.floor(Math.random() * -25) + "px"
                goutte.style.left = Math.floor(Math.random() * this.parent.offsetWidth) + "px"
            }
        });

        // Mise à jour des flocons de neige
        this.neiges.forEach(flocon => {
            let y = parseInt(flocon.style.top)
            let x = parseInt(flocon.style.left)

            y += this.velocityNeige; // Vitesse de la neige
            
            flocon.style.top = y + "px"
           

            // Si le flocon sort de l'écran, on le réinitialise
            if (y > windowHeight) {
                flocon.style.top = Math.floor(Math.random() * -25) + "px"
                flocon.style.left = Math.floor(Math.random() * this.parent.offsetWidth) + "px"
            }
        });
    }
}
