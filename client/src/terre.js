let terre = document.createElement("div")
let parent = document.querySelector("body")
let image = document.querySelector("div")
let spriteList = []
let distance = 0


window.addEventListener("load", () =>{

    for(let i = 0 ; i < 3; i++){
        let choix = document.createElement(div)
        choix.classList.add("Choix")
        parent.append(choix)
    }

    Generaltick()
    
})


window.addEventListener("load", () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let valeur = document.querySelector("input")
    
    valeur.addEventListener("keyup", event => {
        
        if(event.key == "Enter"){
            nombre = valeur.value
          
            for(let i =0 ; i < nombre; i++){
            spriteList.push(new Metroid())
           }
        }
    })
})

const Generaltick = () => {
    // setTimeout(tick, 30)
    for(let i = 0; i < spriteList.length; i++)
    spriteList[i].tick(); // tick dans la classe du sprite Ball.js
    window.requestAnimationFrame(Generaltick);
 }


// onmousedown = function(event) {
    // (1) la préparer au déplacement :  réglé en absolute et en haut par z-index
    //style.position = 'absolute';
   // style.zIndex = 1000;
  
    // déplacez-le de tout parent actuel directement dans body
    // pour le placer par rapport à body
    //document.body.append();
  
    // Centrer la balle aux coordonnées (pageX, pageY)
    //function moveAt(pageX, pageY) {
    //  style.left = pageX - ball.offsetWidth / 2 + 'px';
    //  style.top = pageY - ball.offsetHeight / 2 + 'px';
    //}
  
    // déplacer notre balle en positionnement absolu sous le pointeur
    //moveAt(event.pageX, event.pageY);
  
    //function onMouseMove(event) {
    //  moveAt(event.pageX, event.pageY);
    //}
  
    // (2) déplacer la balle sur le déplacement de la souris
    //document.addEventListener('mousemove', onMouseMove);
  
    // (3) laisser tomber la balle, retirer les gestionnaires inutiles
    //ball.onmouseup = function() {
    //  document.removeEventListener('mousemove', onMouseMove);
    //  ball.onmouseup = null;
    //};
  
 // };

  //ball.ondragstart = function() {
  //  return false;
  //};
  

