/* This code is responsible for hiding/revealing the navigation menu. */

let menu = document.querySelector(".menu");
let mobileMenuVisible = false;

function updateMenuVisibility() {
    if (window.innerHeight < window.innerWidth) {
        menu.style.display = "block";
        mobileMenuVisible = false;
        toggleScrolling();
    }
    else {
        if (mobileMenuVisible === false) {
            menu.style.display = "none";
        }
    }
}

function updateMenuHeight() {
    if (mobileMenuVisible) {
        $(".menu").css("height", window.innerHeight - 72);
    } else {
        $(".menu").css("height", 72);
    }
}

function toggleNavigation() {
    mobileMenuVisible = !mobileMenuVisible;

    $(".menu").css("height", window.innerHeight - 72);
    $(".menu").slideToggle(500);
    toggleScrolling();
}

window.addEventListener("resize", updateMenuVisibility);
window.addEventListener("resize", updateMenuHeight);
window.addEventListener("orientationchange", updateMenuVisibility);
window.addEventListener("orientationchange", updateMenuHeight);