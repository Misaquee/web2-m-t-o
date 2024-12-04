import { fetchData } from "./meteo-api";
import Drag from "./Sprite/Drag.js";
import Choix from "./Sprite/Choix.js";
import Alien from "./Sprite/Alien.js";
import Boss from "./Sprite/Boss.js";

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

    let choix1 = document.querySelector(".choix1")
    let choix2 = document.querySelector(".choix2")
    let choix3 = document.querySelector(".choix3")
    let etat = false
    choix1.addEventListener("contextmenu", e =>{
        etat = !etat
        console.log(etat)
        e.preventDefault();
        if(etat){
            choix1.style.width =  "8vw"
            choix1.style.height =  "8vh"
            choix1.style.backgroundSize = "0px";
            choix1.style.opacity = "0.5px"
        }
        else{
            choix1.style.width =  "10vw"
            choix1.style.height =  "10vh"
            choix1.style.backgroundSize = "cover";
            choix1.style.opacity = "0px"
        }

    })
    let compteur = 0
    window.addEventListener("contextmenu", e =>{
        compteur++
        if(compteur > 3){
            document.querySelector("")
        }

    })


    
    Generaltick();
})

const Generaltick = () => {
    
    for(let i = 0; i < spriteList.length; i++)
        spriteList[i].tick(); 
    
    window.requestAnimationFrame(Generaltick);
}
    