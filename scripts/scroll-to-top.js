/**
 * This function scrolls the page or a specific element to the top, depending on the viewport width.
 * If the viewport width is less than 600 pixels, the entire window is scrolled to the top.
 * If the viewport width is 600 pixels or more, an element with the class 'pane' is scrolled to the top.
 */
function scrollToTop() {
    // If the viewport width is less than 600 pixels
    if (window.innerWidth < 600) {
        // Scroll the entire window to the top
        window.scrollTo(0, 0);
    } else {
        // Scroll the '.pane' element to the top
        document.querySelector('.pane').scrollTo(0, 0);
    }
}

// Event listener
document.querySelector('.navigation-component #active-indicator').addEventListener('click', scrollToTop);