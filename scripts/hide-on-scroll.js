// Function to hide or show the navigation component based on scroll direction
function hideNavComponent() {
    // Select navigation component, navigation drawer, lightbox, and current scroll position
    const navigationComponent = document.querySelector(".navigation-component");
    const lightbox = document.querySelector(".lightbox");
    const currentScrollPos = window.scrollY;

    // Check if navigation drawer and lightbox are not visible
    if (!navigationDrawerVisible && getComputedStyle(lightbox).display === "none") {
        // If scrolling up or at the top of the page, show the navigation component; otherwise, hide it
        if (window.innerWidth >= 600 || prevScrollPos > currentScrollPos || currentScrollPos < 1) {
            navigationComponent.classList.remove('remove');
        } else {
            navigationComponent.classList.add('remove');
        }
    }
}

// Function to hide or show the top app bar based on scroll direction
function hideTopAppBar() {
    // Select top app bar, app bar height, navigation drawer, lightbox, and current scroll position
    const topAppBar = document.querySelector('.top-app-bar');
    const lightbox = document.querySelector(".lightbox");
    const currentScrollPos = window.scrollY;

    // Check if navigation drawer and lightbox are not visible
    if (!navigationDrawerVisible && getComputedStyle(lightbox).display === "none") {
        // If scrolling down and not at the top of the page, hide the app bar; if scrolling up, show the app bar
        if (currentScrollPos > prevScrollPos && currentScrollPos > 1 && window.innerWidth < 600) {
            topAppBar.classList.add('remove')
        } else if (currentScrollPos < prevScrollPos) {
            topAppBar.classList.remove('remove');
        }
    }
}

// Initialize previous scroll position
let prevScrollPos = window.scrollY;

// Event listeners
window.addEventListener('scroll', () => {
    hideNavComponent();
    hideTopAppBar();
    // Update previous scroll position
    prevScrollPos = window.scrollY;
});