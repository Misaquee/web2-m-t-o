import { fetchData } from "./meteo-api";
import Drag from "./Sprite/Drag.js";
import Choix from "./Sprite/Choix.js";
import Alien from "./Sprite/Alien.js";
import Meteo from "./Sprite/Meteo.js";
import Defilant from "./Sprite/Defilant.js";
import defileMode from "./Sprite/DefileMode.js";

import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

export let windowWidth = window.innerWidth;
export let windowHeight = window.innerHeight;
export let top;

let timer
let hold = false 
let actif = true
let visible = false;

let node = null;
let nombre = 0
let spriteList = [];
let bonhomme = document.createElement("div")


// genere des couleurs aléatoire
const getColor = () => { 
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

window.addEventListener("load", async () => {
    top = document.querySelector(".defile").getBoundingClientRect().y;

    localStorage.clear();  // videz le localStorage

    let weatherData = await fetchData(45.5019, 73.5674);
    console.log(weatherData)

    //let Montreal = await fetchData(45.508888, -73.561668)
    // avoir la météo de NewYork Paris Tokyo
    let NewYork = await fetchData(40.730610,  -73.935242)
    let Paris = await fetchData(48.864716, 2.349014)
    let Tokyo = await fetchData(35.652832, 139.839478)


    let body = document.body
    //rajoute bonhomme dans le body
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
        //Savoir si on appuie sur Arrowup
        if(e.key == "ArrowUp" && nombre < 5 && actif){
            actif = false
            nombre++
            console.log(nombre)
            spriteList.push(new Alien())
            setTimeout(() =>{
                actif = true
            },2500)
        }
        // Savoir si space est maintenue enfoncé pendant 5 secondes
        if (e.key == " " && hold) {
            hold = false;
            clearTimeout(timer); 
            body.style.animation = "";
            console.log("Espace relâchée ");
        }

        // faire apparaitre et disparaitre quitter
        if (e.key == "q" || e.key == "Q") {
            console.log("yo")
            if (!node) {
                node = document.createElement("a")
                node.classList.add("quitter")
                node.href = "index.html"
                node.innerHTML = "Quitter"
    
                body.append(node)
            }
            if (visible) {
                node.style.display = "none"
            } else {
                // Afficher et placer à une position aléatoire
                node.style.display = "flex"
                node.style.justifyContent = "center"
                node.style.alignItems = "center"
                node.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + "px"
                node.style.top = Math.floor(Math.random() * (window.innerHeight - 50)) + "px"
                node.style.color = getColor()
            }
            visible = !visible
        }
    })

    window.addEventListener("keydown", e => { // savoir si on maintient enfoncé  la touche space  
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

    let etat = []
    etat[0] = false
    etat[1] = false
    etat[2] = false 

    

    const compteurChoix = (id) => {
        let nbClick = parseInt(localStorage.getItem(id)) || 0; // recupere le nbClick dans le local storage pour cette element
        nbClick++;
        localStorage.setItem(id, nbClick); // Mettre à jour le compteur 
    };

    // 
    const Menu = (choix, index, color, ville,etat ) => {
        choix.addEventListener("contextmenu", (e) => {
            etat = !etat;
            console.log(etat);
            e.preventDefault();
    
            if (etat) {
                for(let i = 0; i < 25; i++)
                    spriteList.push(new Meteo(index, ville)) // envoie le choix et la météo de la ville

                compteurChoix(choix.classList[0]) // regarde la premiere classe du choix 

                //modifie l'apparence du choix
                choix.style.width = "18vw"
                choix.style.height = "18vh"
                choix.style.backgroundSize = "0px"
                choix.style.backgroundColor = color

                let temp = document.createElement("div")
                temp.classList.add("temp")
                choix.append(temp)
                if(ville.temperature > 20 )
                    temp.innerHTML =  ville.windSpeed10m + " km/H     " + ville.temperature + "°C       🔥"
                if(ville.temperature < 20 && ville.temperature > 9)
                    temp.innerHTML =  ville.windSpeed10m + " km/H     " + ville.temperature + "°C       😎"
                if(ville.temperature < 9 && ville.temperature > 0)
                    temp.innerHTML =  ville.windSpeed10m + " km/H     " + ville.temperature + "°C       😓"
                if(ville.temperature < 0)
                    temp.innerHTML =  ville.windSpeed10m + " km/H     " + ville.temperature + "°C       ❄️"

            } else {
                //retablie certaines caractéristiques et en modifie certaines
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
    Menu(choix1, 1, "rgba(255, 0, 255, 0.5)", NewYork,etat[0] ); 
    Menu(choix2, 2, "rgba(127, 255, 0, 0.5)", Tokyo,etat[1] ); 
    Menu(choix3, 3, "rgba(0, 255, 255, 0.5)", Paris,etat[2] ); 

    // retirer la planète si elle gène trop
    let compteur = 0
    window.addEventListener("contextmenu", e =>{
        compteur++
        if(compteur > 3){
            document.querySelector("model-viewer").style.display = "none"
            compteur = 0
        }
    })
  

    
    let menu = document.querySelector("#menu")
    let retrct = document.querySelector("#retract")
    let clear = document.querySelector("#clear")
    let reset = document.querySelector("#reset")
    let changerMode = document.querySelector("#change")
   
    let menuChoix = 1
    let menuChoix2 = 1

    // faire descendre le menu
    menu.addEventListener("click", () => {
        spriteList.push(new Defilant(menuChoix))
        menuChoix *= -1
    })
    // faire remonter le menu
    retrct.addEventListener("click", () => {
        spriteList.push(new Defilant(menuChoix))
        menuChoix *= -1
    })

    // faire disparaitre tous les éléments
    clear.addEventListener("click", () => {
        choix1.style.display = "none"
        choix2.style.display = "none"
        choix3.style.display = "none"
        bonhomme.style.display = "none"
        document.querySelector("model-viewer").style.display = "none"
    })

    reset.addEventListener("click", () => {
        choix1.style.display = "flex"
        choix2.style.display = "flex"
        choix3.style.display = "flex"
        bonhomme.style.display = "block"
          document.querySelector("model-viewer").style.display = "block"
    })

    // la bande defilante
    let nodeDefile = document.createElement("div")

    // changer les propriétés css
    nodeDefile.style.marginLeft = 0 + "px"
    nodeDefile.style.right = "100%"

    // les boutons permettant de changer de mode
    let button1 = document.createElement("button")
    let button2 = document.createElement("button")
    let button3 = document.createElement("button")


    changerMode.addEventListener("click", () => {
        console.log("here")
    })



    
    Generaltick();

})

const Generaltick = () => {
    
    for(let i = 0; i < spriteList.length; i++)
        spriteList[i].tick(); 
    
    window.requestAnimationFrame(Generaltick);
}
    