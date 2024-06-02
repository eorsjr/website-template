document.addEventListener("DOMContentLoaded", function() {
    // Select all slideshow containers
    let slideshowContainers = document.querySelectorAll(".slideshow-container");

    // Initialize each slideshow
    slideshowContainers.forEach(container => {
        startSlideshow(container);
    });
});

/**
 * Starts a slideshow for the given container.
 * @param {HTMLElement} container - The container element of the slideshow.
 */
function startSlideshow(container) {
    let currentIndex = -1;
    let slideshowImages = container.getElementsByClassName("slideshow-image");

    /**
     * Displays the slideshow by cycling through all slideshow images within the specified container.
     * Hides all images initially, then displays the current image based on the index.
     * Automatically advances to the next image every 5 seconds if there are multiple images.
     */
    function showNextImage() {
        // Hide all slideshow images
        for (let i = 0; i < slideshowImages.length; i++) {
            slideshowImages[i].style.display = "none";
        }

        // Increment the index to show the next image
        currentIndex++;
        if (currentIndex === slideshowImages.length) {
            currentIndex = 0; // Loop back to the first image if at the end
        }

        // Display the current image
        slideshowImages[currentIndex].style.display = "block";

        // Set a timer to automatically advance to the next image if there are multiple images
        if (slideshowImages.length > 1) {
            setTimeout(showNextImage, 5000);
        }
    }

    // Start the slideshow
    showNextImage();
}