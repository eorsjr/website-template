/**
 * This code is responsible for hiding/revealing the navigation bar depending on scroll direction.
 */

let prevScrollPos = window.scrollY;

/**
 * Hides or reveals the navigation bar based on the scroll direction.
 * The navigation bar is shown when scrolling up or at the top of the page,
 * and hidden when scrolling down. Adjustments are made based on screen orientation.
 */
function hideNavigation() {

    let currentScrollPos = window.scrollY;

    // Check portrait orientation
    if (window.innerHeight > window.innerWidth) {
        if (prevScrollPos > currentScrollPos || currentScrollPos < 1) {
            // Show the navigation bar when scrolling up or at the top of the page
            document.querySelector(".navigation-bar").style.bottom = "0";
        } else {
            // Hide the navigation bar when scrolling down
            document.querySelector(".navigation-bar").style.bottom = "-150px";
        }
    } else {
        // Show the navigation bar in landscape
        document.querySelector(".navigation-bar").style.bottom = "0";
    }

    prevScrollPos = currentScrollPos;
}

// Add event listeners to trigger the hideNavigation function
window.addEventListener("scroll", hideNavigation);
window.addEventListener("resize", hideNavigation);
window.addEventListener("orientationchange", hideNavigation);