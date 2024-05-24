/**
 * This code is responsible for toggling scrolling depending on whether an overlay is visible.
 */

/**
 * Toggles scrolling behavior based on the visibility of overlays such as mobile menus or lightboxes.
 * If either the mobile menu or lightbox is visible, scrolling is disabled.
 * If neither overlay is visible, scrolling is enabled.
 */
function toggleScrolling() {
    if (mobileMenuVisible || lightboxVisible) {
        // If mobile menu or lightbox is visible, disable scrolling
        document.documentElement.style.overflow = "hidden"; // Disable vertical scrolling
        document.body.scroll = "no"; // Disable horizontal scrolling
    } else {
        // If neither overlay is visible, enable scrolling
        document.documentElement.style.overflow = "scroll"; // Enable vertical scrolling
        document.body.scroll = "yes"; // Enable horizontal scrolling
    }
}