// Variables
const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");
const indexHeader = document.querySelector(".header");
const imagesTable = 
[
    {image : "../../img/rooms/5.jpg"},
    {image : "../../img/rooms/7.jpg"},
    {image : "../../img/slider/2.jpg"}
]
let slides = 0;

// Fonctions
function nextSlide (){
    indexHeader.style.backgroundImage = "url(" + imagesTable[slides].image + ")"; 
    if (slides == imagesTable.length-1) {
    slides = 0
    }
    
    else {
        slides++
    }
}

function previousSlide (){
    indexHeader.style.backgroundImage = "url(" + imagesTable[slides].image + ")"; 
    if (slides == 0) {
    slides = imagesTable.length-1
    }
    
    else {
        slides--
    }
}


// Evenements
autoPlay = setInterval(nextSlide,5000)

rightButton.addEventListener("click", () =>
    {
        nextSlide();
        // clearInterval(autoPlay);
    }
)

leftButton.addEventListener("click", () =>
    {
        previousSlide();
        // clearInterval(autoPlay);
    }
) 