window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu")

    document.querySelector("#menuItems").classList.toggle("hidden");
}

function burgerMenu(x) {
    x.classList.toggle("change");
}
