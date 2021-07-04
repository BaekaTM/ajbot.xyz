var canRunAds = true;
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

/*function updateServerCount() {
    let servercount = document.getElementById("b-servercount-vrm");

    let request = new XMLHttpRequest();
    request.open("GET", 'https://top.gg/api/bots/727574553576079372/stats')
    request.send()
    request.onload = () => {
        if (request.status === 200) {
            let objetJS = JSON.parse(request.response);
            let serverCount = objetJS.server_count;
            servercount.innerHTML = serverCount.toLocaleString();
        }
        else {
            servercount.innerHTML = "*something went wrong*";
        }
    }
}

updateServerCount()*/
