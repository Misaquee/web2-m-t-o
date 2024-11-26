import Color from "./Sprite/Color.js";
import Event from "./Sprite/Event.js";


export let windowWidth = window.innerWidth;
export let windowHeight = window.innerHeight;
let spriteList = []
//destiné au sprite dans le fichier Color.js
window.addEventListener("load", () => {
    setInterval(() => {
        spriteList.push(new Color( Math.floor(Math.random() * 4)))
    }, 1500)

//destiné au sprite dans le fichier Event.js
    setInterval(() => {
        if(Math.random() <= 0.10){
            spriteList.push(new Event( Math.floor(Math.random() * 2)))
        }
    }, 3000)

//destiné au sprite dans le fichier Event.js


    
   
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