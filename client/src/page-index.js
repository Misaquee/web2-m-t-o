import Color from "./Sprite/Color.js";

import  TiledImage  from "../src/TiledImage.js";

let spriteList = []
window.addEventListener("load", () => {
    setInterval(() => {
        spriteList.push(new Color( Math.floor(Math.random() * 4)))
    }, 1500)

    setInterval(() => {
        spriteList.push(new Event( Math.floor(Math.random() * 3)))
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