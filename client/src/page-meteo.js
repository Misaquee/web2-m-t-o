import { fetchData } from "./meteo-api";
import Drag from "./Sprite/Drag.js";
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

let spriteList = [];
let bonhomme = document.createElement("div")
window.addEventListener("load", async () => {
    let weatherData = await fetchData(45.5019, 73.5674);
    console.log(weatherData)


    bonhomme.classList.add("homme")
    console.log(bonhomme.style.offsetWidth)
    document.querySelector("body").append(bonhomme)

    $(bonhomme).draggable()

    spriteList.push(new Drag())


    Generaltick()

})

const Generaltick = () => {
    // setTimeout(tick, 30)
    for(let i = 0; i < spriteList.length; i++)
    spriteList[i].tick(); // tick dans la classe du sprite Ball.js
    window.requestAnimationFrame(Generaltick);
 }
    