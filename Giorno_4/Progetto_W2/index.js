var header = document.querySelector("header")
var start = document.querySelector("#getStarted")

window.addEventListener('scroll', function() {
    if (window.scrollY > 400) { // Cambia questo valore in base a quando vuoi che avvenga il cambio di colore
        header.classList.add("nav-scroll");
        start.style.backgroundColor = "green";
    } else {
        header.classList.remove("nav-scroll");
        start.style.backgroundColor = "#191919";
       
    }
});

