/**
 * This code is responsible for hiding/revealing the navigation drawer.
 */

const navigationDrawer = document.querySelector(".navigation-drawer");
let navigationDrawerVisible = false;
let navigationDrawerOpen = false;

/**
 * Toggles the text and aria-label of the menu button based on whether the navigation drawer is open.
 * If the navigation drawer is open, it updates the button's text and aria-label to indicate closing the menu.
 * If the navigation drawer is not open, it updates the button's text and aria-label to indicate opening the menu.
 */
function toggleMenuButton() {
    if (navigationDrawerOpen) {
        document.getElementById("menu-button").ariaLabel = "Close Menu";
        document.querySelector("#menu-button .icon").innerHTML = "menu_open";
    } else {
        document.getElementById("menu-button").ariaLabel = "Open Menu";
        document.querySelector("#menu-button .icon").innerHTML = "menu";
    }
}

/**
 * Animates and displays the navigation drawer.
 * 
 * @function showNavigationDrawer
 */
function showNavigationDrawer() {
    navigationDrawerVisible = true;
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
        navigationDrawerVisible = false;
    }, 300);
}

/**
 * Toggles the navigation drawer.
 * 
 * When invoked, this function toggles the navigation drawer,
 * animating its appearance or disappearance accordingly. It also updates the
 * menu button text to reflect the current state and toggles the scrolling
 * behavior to prevent scrolling when the drawer is open.
 * 
 * @function toggleNavigation
 */
function toggleNavigation() {
    navigationDrawerOpen = !navigationDrawerOpen;

    if (navigationDrawerOpen) {
        createScrim();
        const scrim = document.getElementById("scrim");
        scrim.addEventListener("click", toggleNavigation);
        scrim.setAttribute('aria-label', 'Close Menu');
        scrim.setAttribute('tabindex', '0');
        scrim.style.cursor = "pointer";
        scrim.style.zIndex = 1;
        showNavigationDrawer();
    } else {
        hideNavigationDrawer();
        removeScrim();
    }

    toggleScrolling();
    toggleMenuButton();
    updateElevation();
}

// Event listener for menu button click to toggle the navigation drawer
document.getElementById("menu-button").addEventListener("click", toggleNavigation);

// Event listener for navigation drawer item click to toggle the navigation drawer
document.querySelectorAll(".navigation-drawer .list .list-item").forEach(item => {
    item.addEventListener("click", toggleNavigation);
});

// Event listener for window resize to update button text
window.addEventListener("resize", toggleMenuButton);

// Event listener for window load to add set transition property
window.addEventListener('load', ()=> {
    navigationDrawer.style.transition = 'width 1s ease, transform 0.3s ease-in-out';
});