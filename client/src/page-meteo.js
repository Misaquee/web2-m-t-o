import { fetchData } from "./meteo-api";
import Drag from "./Sprite/Drag.js";
import Choix from "./Sprite/Choix.js";
import Alien from "./Sprite/Alien.js";
import Meteo from "./Sprite/Meteo.js";

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

    let Montreal = await fetchData(45.508888, -73.561668)

    let NewYork = await fetchData(40.730610,  -73.935242)
    let Paris = await fetchData(48.864716, 2.349014)
    let Tokyo = await fetchData(35.652832, 139.839478)


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

    

    const Menu = (choix, index, color, ville) => {
        choix.addEventListener("contextmenu", (e) => {
            etat = !etat;
            console.log(etat);
            e.preventDefault();
    
            if (etat) {
                spriteList.push(new Meteo(index, ville))
                choix.style.width = "18vw"
                choix.style.height = "18vh"
                choix.style.backgroundSize = "0px"
                choix.style.backgroundColor = color
            } else {
                choix.style.width = "7vw"
                choix.style.height = "7vh"
                choix.style.backgroundSize = "cover"
                if(index == 1)
                    choix.innerHTML = "New York"
                if(index == 2)
                    choix.innerHTML = "Tokyo"
                if(index == 3)
                    choix.innerHTML = "Paris"
            }
        });
    };
    
    // Configuration pour chaque élément
    Menu(choix1, 1, "rgba(255, 0, 255, 0.5)", NewYork); 
    Menu(choix2, 2, "rgba(127, 255, 0, 0.5)", Tokyo); 
    Menu(choix3, 3, "rgba(0, 255, 255, 0.5)", Paris); 
    // retirer la planète si elle gène trop
    let compteur = 0
    window.addEventListener("contextmenu", e =>{
        compteur++
        if(compteur > 3)
            document.querySelector("model-viewer").style.display = "none"
    })


    
    Generaltick();
})

const Generaltick = () => {
    
    for(let i = 0; i < spriteList.length; i++)
        spriteList[i].tick(); 
    
    window.requestAnimationFrame(Generaltick);
}
    