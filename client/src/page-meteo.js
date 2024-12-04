import { fetchData } from "./meteo-api";
import Drag from "./Sprite/Drag.js";
import Choix from "./Sprite/Choix.js";
import Alien from "./Sprite/Alien.js";

import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

export let windowWidth = window.innerWidth;
export let windowHeight = window.innerHeight;

let timer
let hold = false
let actif = true
let nombre = 0
let spriteList = [];
let bonhomme = document.createElement("div")

window.addEventListener("load", async () => {
    let weatherData = await fetchData(45.5019, 73.5674);
    console.log(weatherData)

    let body = document.body
    
    bonhomme.classList.add("homme")
    body.append(bonhomme)

    // permet de bouger bonhomme 
    $(bonhomme).draggable({
        containment: "body", // restreindre a une zone 
    })

    spriteList.push(new Drag())
    spriteList.push(new Choix())

     // Quand une touche est relâchée
    window.addEventListener("keyup", e => {
        if(e.key == "ArrowUp" && nombre < 5 && actif){
            actif = false
            nombre++
            console.log(nombre)
            spriteList.push(new Alien())
            setTimeout(() =>{
                actif = true
            },3000)
        }

        if (e.key == " " && hold) {
            hold = false;
            clearTimeout(timer); 
            body.style.animation = "";
            console.log("Espace relâchée ");
        }
    })


    
    
    window.addEventListener("keydown", e => { // savoir si on appui sur la touche space  
        if (e.key == " " && !hold) { 
            console.log("appuie")
            hold = true;
            timer = setTimeout(() => {
                console.log("bravo")
                body.style.animation = "shake 10s linear 0s 1 normal forwards running";
               
            }, 3000); // 3 secondes
        }
    });
    
    Generaltick();
})

const Generaltick = () => {
    
    for(let i = 0; i < spriteList.length; i++)
        spriteList[i].tick(); 
    
    window.requestAnimationFrame(Generaltick);
}
    