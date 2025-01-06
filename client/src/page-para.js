import Arriere from "./Sprite/SpritePara/Arriere";
import Milieu from "./Sprite/SpritePara/Arriere";


export let windowWidth = window.innerWidth;
export let windowHeight = window.innerHeight;
export let X ;
export let Y ;
// 72 42


let spriteList = [];
window.addEventListener("load", () => {
    spriteList.push(new Arriere())
    spriteList.push(new Milieu())

    Generaltick();
})

const Generaltick = () => {
    
    for(let i = 0; i < spriteList.length; i++)
        spriteList[i].tick(); 
    
    window.requestAnimationFrame(Generaltick);
}

document.addEventListener("keydown", e => {
    if(e.key == "ArrowUp")
        Y = -2
    else if(e.key == "ArrowDown")
        Y = 2
    if(e.key == "ArrowLeft")
        X = -2
    else if(e.key == "ArrowRight")
        X = 2
})

document.addEventListener("keyup", e => {
    if(e.key == "ArrowUp" || e.key == "ArrowDown" )
        Y = 0
    if(e.key == "ArrowLeft" || e.key == "ArrowRight")
        X = 0
})

