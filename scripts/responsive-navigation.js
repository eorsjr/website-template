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
 * Toggles the text and aria-label of the menu button between "menu" and "close" based on the visibility of the mobile menu.
 * If the mobile menu is visible, it updates the button's text and aria-label to indicate closing the menu.
 * If the mobile menu is not visible, it updates the button's text and aria-label to indicate opening the menu.
 */
function toggleMenuButton() {
    if (mobileMenuVisible) {
        document.querySelector(".menu-button").ariaLabel = "Close Menu";
        document.querySelector(".menu-button span").innerText = "close";
    } else {
        document.querySelector(".menu-button").ariaLabel = "Open Menu";
        document.querySelector(".menu-button span").innerText = "menu";
    }
}

/**
 * Toggles the visibility of the mobile navigation menu.
 * Updates the visibility of the menu with animation and updates the menu button text accordingly.
 * It toggles the scrolling behavior to prevent scrolling when the menu is open.
 */
function toggleNavigation() {
    mobileMenuVisible = !mobileMenuVisible;
    $(".menu").slideToggle(500);
    toggleScrolling();
    toggleMenuButton();
}

// Event listener for menu button click to toggle the navigation menu
document.querySelector(".menu-button").addEventListener("click", toggleNavigation);

// Event listeners for window resize to update menu visibility and button text
window.addEventListener("resize", updateMenuVisibility);
window.addEventListener("resize", toggleMenuButton);

// Event listeners for orientation change to update menu visibility and button text
window.addEventListener("orientationchange", updateMenuVisibility);
window.addEventListener("orientationchange", toggleMenuButton);