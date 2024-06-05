/**
 * This code is responsible for hiding/revealing the navigation drawer.
 */

let navigationDrawer = document.querySelector(".navigation-drawer");
let navigationDrawerVisible = false;

/**
 * Toggles the text and aria-label of the menu button between "menu" and "close" based on the visibility of the navigation drawer.
 * If the navigation drawer is visible, it updates the button's text and aria-label to indicate closing the menu.
 * If the navigation drawer is not visible, it updates the button's text and aria-label to indicate opening the menu.
 */
function toggleMenuButton() {
    if (navigationDrawerVisible) {
        document.querySelector(".menu-button").ariaLabel = "Close Menu";
        document.querySelector(".menu-button md-icon").innerHTML = "menu_open<md-ripple></md-ripple>";
    } else {
        document.querySelector(".menu-button").ariaLabel = "Open Menu";
        document.querySelector(".menu-button md-icon").innerHTML = "menu<md-ripple></md-ripple>";
    }
}

/**
 * Animates and displays the navigation drawer.
 * 
 * @function showNavigationDrawer
 */
function showNavigationDrawer() {
    navigationDrawer.style.display = "flex";
    requestAnimationFrame(() => {
        navigationDrawer.classList.add('show');
    });
}

/**
 * Hides the navigation drawer with animation.
 * 
 * @function hideNavigationDrawer
 */
function hideNavigationDrawer() {
    navigationDrawer.classList.remove('show');
    setTimeout(() => {
        navigationDrawer.style.display = "none";
    }, 300);
}

/**
 * Toggles the visibility of the navigation drawer.
 * 
 * When invoked, this function toggles the visibility of the navigation drawer,
 * animating its appearance or disappearance accordingly. It also updates the
 * menu button text to reflect the current state and toggles the scrolling
 * behavior to prevent scrolling when the drawer is open.
 * 
 * @function toggleNavigation
 */
function toggleNavigation() {
    navigationDrawerVisible = !navigationDrawerVisible;

    if (navigationDrawerVisible) {
        createScrim();
        const scrim = document.getElementById("scrim");
        scrim.addEventListener("click", toggleNavigation);
        scrim.setAttribute('aria-label', 'Close Menu');
        scrim.setAttribute('tabindex', '0');
        scrim.style.cursor = "pointer";
        showNavigationDrawer();
    } else {
        hideNavigationDrawer();
        removeScrim();
    }

    toggleScrolling();
    toggleMenuButton();
}

// Event listener for menu button click to toggle the navigation drawer
document.querySelector(".menu-button").addEventListener("click", toggleNavigation);
document.querySelector(".close-menu-button").addEventListener("click", toggleNavigation);

// Event listeners for window resize to update button text
window.addEventListener("resize", toggleMenuButton);