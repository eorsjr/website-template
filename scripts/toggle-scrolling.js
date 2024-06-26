/**
 * Manages scrolling behavior based on the presence of overlays.
 * This function disables scrolling when overlays are visible and re-enables scrolling when no overlays are present.
 */

// Variable to store the scroll position when scrolling is disabled
let scrollPos = 0;

/**
 * Toggles scrolling behavior depending on the presence of overlays.
 */
function toggleScrolling() {
    if (navigationDrawerOpen || lightboxVisible) {
        // If any overlay is visible, disable scrolling
        scrollPos = window.scrollY; // Store the current scroll position
        document.body.style.top = "-" + scrollPos + "px"; // Offset the body to maintain current scroll position
        document.body.style.position = "fixed"; // Fix body position
        document.body.style.overflow = "hidden"; // Disable vertical scrolling
        document.body.scroll = "no"; // Disable horizontal scrolling
    } else {
        // If no overlay is visible, re-enable scrolling
        if (document.body.style.position == "fixed") {
            // Restore the original scroll position
            document.body.style.position = "static"; // Reset body position to default
            window.scrollTo({ top: scrollPos, behavior: "instant" }); // Jump to saved scroll position
            document.body.style.top = "auto"; // Reset body offset
            scrollPos = 0; // Reset scroll position
            document.body.style.overflow = "scroll"; // Enable vertical scrolling
            document.body.scroll = "yes"; // Enable horizontal scrolling
        }
        if (window.innerWidth < 600) {
            document.body.style.overflow = "scroll"; // Enable vertical scrolling
        } else {
            document.body.style.overflow = "hidden"; // Disable vertical scrolling
        }
    }
}

// Event listener
window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
        document.body.style.overflow = "scroll"; // Enable vertical scrolling
    } else {
        document.body.style.overflow = "hidden"; // Disable vertical scrolling
    }
});

/**
 * Prevents the browser from automatically restoring the scroll position when the page is refreshed.
 * 
 * This function checks if the 'scrollRestoration' property is supported in the browser's history object.
 * If supported, it sets 'scrollRestoration' to 'manual' to prevent the default scroll restoration behavior.
 */
function preventScrollRestoration() {
    // Check if the 'scrollRestoration' property is available in the history object
    if ('scrollRestoration' in history) {
        // Set 'scrollRestoration' to 'manual' to disable automatic scroll restoration
        history.scrollRestoration = 'manual';
    }
}

// Call the function to prevent scroll restoration
preventScrollRestoration();