
import Arriere from "./Sprite/Arriere";

export let windowWidth = window.innerWidth;
export let windowHeight = window.innerHeight;


let spriteList = [];
window.addEventListener("load", () => {
    spriteList.push(new Arriere())

    Generaltick();
})

const Generaltick = () => {
    
    for(let i = 0; i < spriteList.length; i++)
        spriteList[i].tick(); 
    
    window.requestAnimationFrame(Generaltick);
}

