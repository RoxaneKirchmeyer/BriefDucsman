let btnBurger = document.querySelector("#btn-burger");

let nav = document.querySelector(".main-nav-burger");

let classList = document.querySelector(".visible");

btnBurger.addEventListener("click", event => {
    // Code à effectuer si l'utilisateur clique sur btnBurger
    nav.classList.toggle("visible");
}
)