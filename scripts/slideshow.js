/**
 * This code is responsible for the slideshow feature.
 */

let currentIndex = -1;
let slideshowTargets = document.getElementsByClassName("slideshow-image");

// Initialize and start the slideshow
slideshow();

/**
 * Displays the slideshow by cycling through all slideshow images.
 * Hides all images initially, then displays the current image based on the index.
 * Automatically advances to the next image every 5 seconds if there are multiple images.
 */
function slideshow() {
    // Hide all slideshow images
    for (let i = 0; i < slideshowTargets.length; i++) {
        slideshowTargets[i].style.display = "none";
    }

    // Increment the index to show the next image
    currentIndex++;
    if (currentIndex === slideshowTargets.length) {
        currentIndex = 0; // Loop back to the first image if at the end
    }

    // Display the current image
    slideshowTargets[currentIndex].style.display = "block";

    // Set a timer to automatically advance to the next image if there are multiple images
    if (slideshowTargets.length > 1) {
        setTimeout(slideshow, 5000);
    }
}