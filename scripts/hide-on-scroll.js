// Function to hide or show the navigation component based on scroll direction
function hideNavComponent() {
    // Select navigation component, navigation drawer, lightbox, and current scroll position
    const navigationComponent = document.querySelector(".navigation-component");
    const navigationDrawer = $(".navigation-drawer");
    const lightbox = $(".lightbox");
    const currentScrollPos = window.scrollY;

    // Check if the window size is within the compact window class and navigation drawer and lightbox are not visible
    if (window.innerWidth < 600 && navigationDrawer.css("display") === "none" && lightbox.css("display") === "none") {
        // If scrolling up or at the top of the page, show the navigation component; otherwise, hide it
        if (prevScrollPos > currentScrollPos || currentScrollPos < 1) {
            navigationComponent.style.bottom = "0";
        } else {
            navigationComponent.style.bottom = "-150px";
        }
    }
}

// Function to hide or show the top app bar based on scroll direction
function hideTopAppBar() {
    // Select top app bar, app bar height, navigation drawer, lightbox, and current scroll position
    const topAppBar = document.querySelector('.top-app-bar');
    const appBarHeight = topAppBar.offsetHeight;
    const navigationDrawer = $(".navigation-drawer");
    const lightbox = $(".lightbox");
    const currentScrollPos = window.scrollY;

    // Check if navigation drawer and lightbox are not visible
    if (navigationDrawer.css("display") === "none" && lightbox.css("display") === "none") {
        // If scrolling down and not at the top of the page, hide the app bar; if scrolling up, show the app bar
        if (currentScrollPos > prevScrollPos && currentScrollPos > 1) {
            topAppBar.style.top = '-' + appBarHeight + 'px';
        } else if (currentScrollPos < prevScrollPos) {
            topAppBar.style.top = '0';
        }
    }
}

// Initialize previous scroll position
let prevScrollPos = window.scrollY;

// Event listener for scroll, resize, and orientation change
window.addEventListener('scroll', () => {
    hideNavComponent();
    hideTopAppBar();
    // Update previous scroll position
    prevScrollPos = window.scrollY;
});

window.addEventListener("resize", () => {
    // Update previous scroll position
    prevScrollPos = window.scrollY;
});

window.addEventListener("orientationchange", () => {
    // Update previous scroll position
    prevScrollPos = window.scrollY;
});