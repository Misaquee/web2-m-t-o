import Color from "./Sprite/Color.js"

let spriteList = []
window.addEventListener("load", () => {
    setInterval(() => {
        spriteList.push(new Color( Math.floor(Math.random() * 5)))
    }, 1500)
    
   
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