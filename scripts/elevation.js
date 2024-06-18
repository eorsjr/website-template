/**
 * Function to update the elevation level of a component.
 */
function updateElevation() {
    // Update top app bar elevation
    const topAppBar = document.querySelector('.top-app-bar');
    const navigationDrawer = document.querySelector(".navigation-drawer");

    // Check if the page has been scrolled
    const scrolled = window.scrollY > 0;

    // Toggle elevation level based on scroll position and navigation drawer visibility
    if (scrolled || (!scrolled && navigationDrawer.style.display == "flex")) {
        // If the page is scrolled or the navigation drawer is visible, set elevation level to 2
        topAppBar.style.setProperty('box-shadow', 'var(--elevation-level-1)');
    } else {
        // If neither the page is scrolled nor the navigation drawer is visible, set elevation level to 0
        topAppBar.style.setProperty('box-shadow', 'none');
    }
}

// Add event listeners to update the elevation when scroll, change, or resize events occur
window.addEventListener('scroll', updateElevation);
window.addEventListener('change', updateElevation);
window.addEventListener('resize', updateElevation);