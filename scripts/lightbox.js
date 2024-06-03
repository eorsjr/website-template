/**
 * This code is responsible for the lightbox feature.
 */

let lightboxVisible = false;

/**
 * Opens the lightbox by fading in the overlay and enabling the lightbox mode.
 * Also disables page scrolling.
 */
function openLightbox() {
    $("#lightbox-overlay").fadeIn();
    lightboxVisible = true;
    toggleScrolling();
}

/**
 * Closes the lightbox by fading out the overlay and disabling the lightbox mode.
 * Also enables page scrolling.
 */
function closeLightbox() {
    $("#lightbox-overlay").fadeOut();
    lightboxVisible = false;
    toggleScrolling();
}

let currentSlideIndex;

/**
 * Switches the slide in the lightbox by the specified increment.
 * @param {number} n - The number to increment or decrement the current slide index.
 */
function switchSlide(n) {
    currentSlideIndex += n;
    showSlides();
}

/**
 * Displays the current slide in the lightbox.
 * Adjusts the slide index if it goes out of bounds and updates the image and caption.
 */
function showSlides() {
    let lightboxTargets = document.getElementsByClassName("lightbox-target");

    // Hide navigation buttons if there is only one image
    if (lightboxTargets.length === 1) {
        document.getElementById("previous-button").style.display = "none";
        document.getElementById("next-button").style.display = "none";
    }

    // Loop back to the first slide if at the end
    if (currentSlideIndex == lightboxTargets.length) {
        currentSlideIndex = 0;
    }

    // Loop to the last slide if at the beginning
    if (currentSlideIndex < 0) {
        currentSlideIndex = lightboxTargets.length - 1;
    }

    let chosenImage = lightboxTargets[currentSlideIndex];
    let caption = document.getElementById("lightbox-caption");
    let lightboxImg = document.getElementById("lightbox-image");

    // Use data-src attribute if available, otherwise use src attribute
    if (chosenImage.getAttribute("data-src")) {
        lightboxImg.src = chosenImage.getAttribute("data-src");
    } else {
        lightboxImg.src = chosenImage.src;
    }

    // Update the caption with the alt attribute of the chosen image
    caption.innerHTML = chosenImage.alt;
}

let lightboxTargets = document.getElementsByClassName("lightbox-target");

// Add click event listeners to all lightbox targets to open the lightbox and show the clicked slide
for (let i = 0; i < lightboxTargets.length; i++) {
    lightboxTargets[i].addEventListener("click", function () {
        currentSlideIndex = i;
        showSlides();
    });
}

/**
 * Appends the lightbox HTML to the end of the body.
 */
function appendLightboxHTML() {
    const lightboxHTML = `
    <div id="lightbox-overlay" class="lightbox-overlay">
        <md-filled-icon-button id="close-button" class="close-button" aria-label="Close Lightbox" onclick="closeLightbox()">
            <md-icon>close</md-icon>
        </md-filled-icon-button>
        <div class="lightbox-content">
            <md-filled-icon-button id="previous-button" class="previous-button" aria-label="Previous" onclick="switchSlide(-1)">
                <md-icon>arrow_back</md-icon>
            </md-filled-icon-button>
            <md-filled-icon-button id="next-button" class="next-button" aria-label="Next" onclick="switchSlide(+1)">
                <md-icon>arrow_forward</md-icon>
            </md-filled-icon-button>
            <img id="lightbox-image" class="lightbox-image">
            <div id="lightbox-caption" class="lightbox-caption"></div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
}

// Call the function to append the lightbox HTML when the document is ready
document.addEventListener("DOMContentLoaded", appendLightboxHTML);