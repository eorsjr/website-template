/* This code is responsible for toggling scrolling depending on if an overlay is visible. */

function toggleScrolling() {
    if (mobileMenuVisible || lightboxVisible) {
        document.documentElement.style.overflow = "hidden";
        document.body.scroll = "no";
    } else {
        document.documentElement.style.overflow = "scroll";
        document.body.scroll = "yes";
    }
}