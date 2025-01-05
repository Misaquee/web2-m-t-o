import Color from "./Sprite/Color.js";
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

export let windowWidth = window.innerWidth;
export let windowHeight = window.innerHeight;
let indice = 0
let spriteList = []
let valide 

// les phrases différentes qui peuvent apparaitre
let text = [5];
 text [0] = "tu es un sorcier Harry" // Harry poter
 text [1] = "La vie c’est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber" // Forest Gump
 text [2] = "Plata O Plomo " // Narcos
 text [3] = "Luke, je suis ton père…" //Star Wars
 text [4] = "C’est à moi que tu parles ? C’est à moi que tu parles ??..." // Taxi Driver

 window.addEventListener("load", () => {
    let hi = document.querySelector("#bonjour");
    let contain = document.querySelector(".container");
    let bd = document.body;

    hi.onclick = () => { // Change le texte en haut de l'écran
        if (indice < 5) {
            valide = false
            hi.innerHTML = text[indice];
            indice++;
        } else { 
            indice = 0
            bd.style.backgroundSize = "0px";
            bd.style.backgroundColor = "black";
            contain.style.display = "flex";
            contain.style.zIndex = 1;
            console.log(contain.style.zIndex);
            valide = true; // Change `valide` à true
        }
    };

    // Ajout d'un écouteur  "keyup"
    window.addEventListener("keyup", e => {
        if (valide && e.key == " ") { 
            document.querySelector(".container").style.display = "none";
            document.querySelector("body").style.backgroundSize = "cover";
        }
    });

    // Animation liée au fichier Color.js
    setInterval(() => {
        spriteList.push(new Color(Math.floor(Math.random() * 4)));
    }, 1500);

    document.querySelector("#password-form").onsubmit = () => {
        let success = true;

        if (document.querySelector("#password").value !== "web2") {
            success = false;
            document.querySelector("#error-message").style.display = "none";
            alert("mot de passe erroné : Erreur d'authentification")
            alerte++
        }
        return success;
    };

    Generaltick();
});

const Generaltick = () => {
    for (let i = 0; i < spriteList.length; i++) {
        spriteList[i].tick(); // Appelle la méthode tick() pour chaque sprite
    }
    window.requestAnimationFrame(Generaltick);
};


