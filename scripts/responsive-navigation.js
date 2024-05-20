/* This code is responsible for hiding/revealing the navigation menu. */

let menu = document.querySelector(".menu");
let navState = 0;

function updateMenuVisibility() {
    if (window.innerHeight < window.innerWidth) {
        navState = 0;
        $(".menu").css("height", 72);
        menu.style.display = "block";
    }
    else {
        if (navState === 0) {
            menu.style.display = "none";
        }
    }
}

window.addEventListener("resize", updateMenuVisibility);

function toggleNavigation() {

    $(".menu").css("height", window.innerHeight - 72);

    if (navState === 0) {
        navState = 1;
    } else {
        navState = 0;
    }

    $(".menu").slideToggle(500);
}