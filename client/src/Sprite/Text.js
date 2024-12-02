import { windowHeight } from "../page-index";

export default class Text {
    constructor(id) {
        this.node = document.querySelector(".container");
        this.node1 = document.querySelector(".text-defil p");
        this.node.style.display = "flex";

        this.velocity = 0.5;
        this.velocityZ = -0.1; 
        this.y = 700;
        this.z = 0; 
        this.rotateX = 20; 
    }

    tick() {
        
        this.y -= this.velocity; 
        this.z += this.velocityZ; 

        
        if (this.y < -7500) this.y = -7500;
        if (this.y < -2500) this.y = -2500;

        
        this.node.style.top = this.y + "px";
        this.node1.style.transform = `translateZ(${this.z}px) rotateX(${this.rotateX}deg)`;

       
        if (this.rotateX < 40) {
            this.rotateX += 0.01; 
        }

        console.log(`y: ${this.y}, z: ${this.z}`);
    }
}
