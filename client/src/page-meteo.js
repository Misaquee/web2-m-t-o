import { fetchData } from "./meteo-api";
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';


let bonhomme = document.createElement("div")
window.addEventListener("load", async () => {
    let weatherData = await fetchData(45.5019, 73.5674);
    console.log(weatherData)

    
    bonhomme.classList.add("homme")
    console.log(bonhomme.style.offsetWidth)
    document.querySelector("body").append(bonhomme)

    $(bonhomme).draggable()({
        containment: "window"
    })

})
    