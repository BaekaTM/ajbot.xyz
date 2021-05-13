function addClassMenuMobile() {
    document.getElementById("menu-mobile").classList.toggle("active")
}

function addClassMenuMobileTexte() {
    document.getElementById("nav-mobile").classList.toggle("open")
}

document.onclick = (e) => {
    if (e.target.id !== "nav-mobile" && e.target.id !== "menu-mobile") {
        document.getElementById("menu-mobile").classList.remove("active")
        document.getElementById("nav-mobile").classList.remove("open")
    }
}