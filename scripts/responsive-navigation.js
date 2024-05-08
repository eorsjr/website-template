let navigation = document.querySelector("nav");

function checkOrientation() {
    if (navigation.classList.contains("responsive") && window.innerHeight < window.innerWidth) {
        navigation.classList.remove("responsive");
    }
}

setInterval(checkOrientation, 500);


function toggleNavigation() {
    if (navigation.classList.contains("responsive")) {
        navigation.classList.remove("responsive");
    } else {
        navigation.classList.add("responsive");
    }
}