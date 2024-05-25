/**
 * This code is responsible for hiding/revealing the navigation menu.
 */

let menu = document.querySelector(".menu");
let mobileMenuVisible = false;

/**
 * Updates the visibility of the menu based on the window's dimensions.
 * Displays the menu in landscape mode and hides it in portrait mode unless toggled.
 */
function updateMenuVisibility() {
    if (window.innerHeight < window.innerWidth) {
        menu.style.display = "block";
        mobileMenuVisible = false;
        toggleScrolling();
    } else {
        if (!mobileMenuVisible) {
            menu.style.display = "none";
        }
    }
}

/**
 * Toggles the text of the menu button between "menu" and "close" based on the visibility of the mobile menu.
 */
function toggleMenuButton() {
    let menuButton = document.querySelector(".menu-button span");
    if (mobileMenuVisible) {
        menuButton.innerText = "close";
    } else {
        menuButton.innerText = "menu";
    }
}

/**
 * Toggles the visibility of the mobile navigation menu.
 * Changes the menu's height, animates its visibility, and updates the menu button text.
 */
function toggleNavigation() {
    mobileMenuVisible = !mobileMenuVisible;
    $(".menu").slideToggle(500);
    toggleScrolling();
    toggleMenuButton();
}

// Event listener for menu button click to toggle the navigation menu
document.querySelector(".menu-button").addEventListener("click", toggleNavigation);

// Event listeners for window resize to update menu visibility, height, and button text
window.addEventListener("resize", updateMenuVisibility);
window.addEventListener("resize", toggleMenuButton);

// Event listeners for orientation change to update menu visibility, height, and button text
window.addEventListener("orientationchange", updateMenuVisibility);
window.addEventListener("orientationchange", toggleMenuButton);