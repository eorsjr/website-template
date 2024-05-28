/**
 * This code is responsible for toggling scrolling depending on whether an overlay is visible.
 */

/**
 * Toggles scrolling behavior based on the visibility of overlays such as mobile menus or lightboxes.
 * If either the mobile menu or lightbox is visible, scrolling is disabled.
 * If neither overlay is visible, scrolling is enabled.
 */

let scrollPos = 0;

function toggleScrolling() {

    if (mobileMenuVisible || lightboxVisible) {
        // If mobile menu or lightbox is visible, disable scrolling
        scrollPos = window.scrollY;
        document.body.style.top = "-" + scrollPos + "px"; // Set top to current scroll position
        document.body.style.position = "fixed"; // Fix body position
        document.documentElement.style.overflow = "hidden"; // Disable vertical scrolling
        document.body.scroll = "no"; // Disable horizontal scrolling
    } else {
        // If neither overlay is visible, enable scrolling
        if (document.body.style.position == "fixed") {
            document.body.style.position = "static"; // Set body position to static
            window.scrollTo({ top: scrollPos, behavior: "instant" }); // jump to saved position
            document.body.style.top = "auto"; //reset top
            scrollPos = 0; // set scroll position to 0
            document.documentElement.style.overflow = "scroll"; // Enable vertical scrolling
            document.body.scroll = "yes"; // Enable horizontal scrolling
        }
    }
}