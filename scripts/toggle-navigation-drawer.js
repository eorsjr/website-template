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
 * Creates and displays the overlay element.
 * Applies a blur effect for visual appeal and changes the background color.
 * 
 * @function createOverlay
 */
function createOverlay() {
    const scrim = document.createElement('div');
    scrim.id = 'scrim';
    scrim.setAttribute('aria-label', 'Close Menu');
    scrim.setAttribute('tabindex', '0');
    document.body.appendChild(scrim);
    scrim.style.display = 'block';
    setTimeout(() => {
        scrim.style.backdropFilter = 'blur(20px)';
        scrim.style.webkitBackdropFilter = 'blur(20px)';
        scrim.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    }, 1);
    document.querySelector("#scrim").addEventListener("click", toggleNavigation);
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
 * Removes the overlay element from the DOM.
 * 
 * @function removeOverlay
 */
function removeOverlay() {
    const scrim = document.getElementById('scrim');
    if (scrim) {
        scrim.style.backdropFilter = 'blur(0px)';
        scrim.style.webkitBackdropFilter = 'blur(0px)';
        scrim.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        setTimeout(() => {
            scrim.remove();
        }, 300);
    }
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
        createOverlay();
        showNavigationDrawer();
    } else {
        hideNavigationDrawer();
        removeOverlay();
    }

    toggleScrolling();
    toggleMenuButton();
}

// Event listener for menu button click to toggle the navigation drawer
document.querySelector(".menu-button").addEventListener("click", toggleNavigation);
document.querySelector(".close-menu-button").addEventListener("click", toggleNavigation);

// Event listeners for window resize to update button text
window.addEventListener("resize", toggleMenuButton);