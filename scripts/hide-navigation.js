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
    // Check if the menu is not displayed (in portrait mode on mobile) or if in landscape mode
    if (($(".menu").css("display") === "none" && window.innerHeight > window.innerWidth) || window.innerHeight < window.innerWidth) {
        let currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos || currentScrollPos < 1) {
            // Show the navigation bar and menu when scrolling up or at the top of the page
            document.querySelector(".navbar").style.bottom = "0";
            document.querySelector(".menu").style.bottom = "0";
        } else {
            // Hide the navigation bar and menu when scrolling down
            document.querySelector(".navbar").style.bottom = "-100px";
            document.querySelector(".menu").style.bottom = "-100px";
        }

        // Update the previous scroll position to the current position
        prevScrollPos = currentScrollPos;
    }
}

// Add an event listener for the scroll event to trigger the hideNavigation function
window.addEventListener("scroll", hideNavigation);