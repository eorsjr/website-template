let lightboxVisible = false;
let currentSlideIndex;

/**
 * Opens the lightbox by fading in the scrim and enabling the lightbox mode.
 * Also disables page scrolling.
 */
function openLightbox() {
    createScrim();
    const scrim = document.getElementById("scrim");
    scrim.style.zIndex = 3;
    const lightbox = document.querySelector(".lightbox");
    lightbox.style.display = "flex";
    fadeIn(lightbox, 300); // Fading in the lightbox
    lightboxVisible = true;
    toggleScrolling();
}

/**
 * Closes the lightbox by fading out the scrim and disabling the lightbox mode.
 * Also enables page scrolling.
 */
function closeLightbox() {
    removeScrim();
    const lightbox = document.querySelector(".lightbox");
    fadeOut(lightbox, 300, () => {
        lightbox.style.display = "none"; // Hide the lightbox after fading out
    });
    lightboxVisible = false;
    toggleScrolling();
}

/**
 * Function to animate the fade-in effect
 */
function fadeIn(element, duration, callback) {
    let startTime = null;
    function fade(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        let opacity = elapsedTime / duration;
        opacity = Math.min(opacity, 1);
        element.style.opacity = opacity;
        if (elapsedTime < duration) {
            requestAnimationFrame(fade);
        } else {
            if (callback) callback();
        }
    }
    requestAnimationFrame(fade);
}

/**
 * Function to animate the fade-out effect
 */
function fadeOut(element, duration, callback) {
    let startTime = null;
    function fade(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        let opacity = 1 - (elapsedTime / duration);
        opacity = Math.max(opacity, 0);
        element.style.opacity = opacity;
        if (elapsedTime < duration) {
            requestAnimationFrame(fade);
        } else {
            if (callback) callback();
        }
    }
    requestAnimationFrame(fade);
}

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
    const lightboxTargets = document.getElementsByClassName("lightbox-target");

    // Make sure lightboxTargets is defined and populated
    if (lightboxTargets.length === 0) {
        return;
    }

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

    const chosenImage = lightboxTargets[currentSlideIndex];
    const caption = document.getElementById("lightbox-caption");
    const lightboxImg = document.getElementById("lightbox-image");

    // Use data-src attribute if available, otherwise use src attribute
    if (chosenImage.getAttribute("data-src")) {
        lightboxImg.src = chosenImage.getAttribute("data-src");
    } else {
        lightboxImg.src = chosenImage.src;
    }

    // Update the caption with the alt attribute of the chosen image
    caption.innerHTML = chosenImage.alt;
}

/**
 * Adds click event listeners to all lightbox targets to open the lightbox and show the clicked slide.
 */
function addLightboxEventListeners() {
    const lightboxTargets = document.getElementsByClassName("lightbox-target");
    for (let i = 0; i < lightboxTargets.length; i++) {
        lightboxTargets[i].addEventListener("click", function () {
            currentSlideIndex = i;
            showSlides();
        });
    }
}

/**
 * Appends the lightbox HTML to the end of the body.
 */
function appendLightboxHTML() {
    const lightboxHTML = `
    <div class="lightbox">
        <button class="filled-icon-button" id="close-button" aria-label="Close Lightbox" onclick="closeLightbox()">
            <span class="material-symbols-outlined icon">close</span>
        </button>
        <button class="filled-icon-button" id="previous-button" aria-label="Previous" onclick="switchSlide(-1)">
            <span class="material-symbols-outlined icon">arrow_back</span>
        </button>
        <button class="filled-icon-button" id="next-button" aria-label="Next" onclick="switchSlide(+1)">
            <span class="material-symbols-outlined icon">arrow_forward</span>
        </button>
        <img id="lightbox-image">
        <div id="lightbox-caption"></div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
}

// Call the function to append the lightbox HTML when the document is ready
document.addEventListener("DOMContentLoaded", appendLightboxHTML);
addLightboxEventListeners();