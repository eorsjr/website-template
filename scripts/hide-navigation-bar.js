let prevScrollPos = window.scrollY;

/**
 * Hides or reveals the navigation bar based on the scroll direction.
 * The navigation bar is shown when scrolling up or at the top of the page,
 * and hidden when scrolling down. Adjustments are made based on screen orientation.
 */
function hideNavigationBar() {
    let currentScrollPos = window.scrollY;

    // Check portrait orientation
    if (window.innerHeight > window.innerWidth) {
        // Check if navigation drawer and lightbox are not visible
        if ($(".navigation-drawer").css("display") === "none" && $(".lightbox").css("display") === "none") {
            if (prevScrollPos > currentScrollPos || currentScrollPos < 1) {
                // Show the navigation bar when scrolling up or at the top of the page
                document.querySelector(".navigation-bar").style.bottom = "0";
            } else {
                // Hide the navigation bar when scrolling down
                document.querySelector(".navigation-bar").style.bottom = "-150px"; // Adjust as necessary
            }
        }
    }

    prevScrollPos = currentScrollPos;
}

/**
 * Ensures the navigation bar is visible in landscape mode.
 */
function handleOrientationOrResize() {
    if (window.innerHeight < window.innerWidth) {
        document.querySelector(".navigation-bar").style.bottom = "0";
    }
}

// Add event listeners to trigger the hideNavigation function
window.addEventListener("scroll", hideNavigationBar);
window.addEventListener("resize", handleOrientationOrResize);
window.addEventListener("orientationchange", handleOrientationOrResize);