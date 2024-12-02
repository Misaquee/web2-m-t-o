import Color from "./Sprite/Color.js";
import Event from "./Sprite/Event.js";
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

export let windowWidth = window.innerWidth;
export let windowHeight = window.innerHeight;
let indice = 0
let spriteList = []
let text = [5];
 text [0] = "tu es un sorcier Harry" // Harry poter
 text [1] = "La vie c’est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber" // Forest Gump
 text [2] = "Plata O Plomo " // Narcos
 text [3] = "Luke, je suis ton père…" //Star Wars
 text [4] = "C’est à moi que tu parles ? C’est à moi que tu parles ??..." // Taxi Driver


window.addEventListener("load", () => {
    let hi = document.querySelector("#bonjour")

    hi.onclick = () => {
        if(indice < 5){
            console.log("hi")
            hi.innerHTML = text[indice]
            indice++
        }
    }
    //destiné au sprite dans le fichier Color.js
    setInterval(() => {
        spriteList.push(new Color( Math.floor(Math.random() * 4)))
    }, 1500)

    //destiné au sprite dans le fichier Event.js
    setInterval(() => {
        if(Math.random() <= 0.10){
            spriteList.push(new Event( Math.floor(Math.random() * 2)))
        }
    }, 3000)

    


    document.querySelector("#password-form").onsubmit = () => {
        let success = true;

        if (document.querySelector("#password").value !== "web2") {
            success = false;
            document.querySelector("#error-message").style.display = "block";
        }

        return success;
    }
    Generaltick()

})

const Generaltick = () => {
    // setTimeout(tick, 30)
    for(let i = 0; i < spriteList.length; i++)
    spriteList[i].tick(); // tick dans la classe du sprite Ball.js
    window.requestAnimationFrame(Generaltick);
 }

