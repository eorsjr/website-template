function openLightbox() {
    document.getElementById("lightbox-overlay").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox-overlay").style.display = "none";
}

let currentSlideIndex;

function switchSlide(n) {
    currentSlideIndex += n;
    showSlides();
}

function showSlides() {
    let lightboxTargets = document.getElementsByClassName("lightbox-target");

    if (lightboxTargets.length === 1) {
        document.getElementById("previous-button").style.display = "none";
        document.getElementById("next-button").style.display = "none";
    }

    if (currentSlideIndex == lightboxTargets.length) {
        currentSlideIndex = 0;
    }

    if (currentSlideIndex < 0) {
        currentSlideIndex = lightboxTargets.length - 1;
    }

    let chosenImage = lightboxTargets[currentSlideIndex];
    let caption = document.getElementById("lightbox-caption");
    let lightboxImg = document.getElementById("lightbox-image");

    if (chosenImage.getAttribute("data-src")) {
        lightboxImg.src = chosenImage.getAttribute("data-src");
    } else {
        lightboxImg.src = chosenImage.src;
    }

    caption.innerHTML = chosenImage.alt;
}

let lightboxTargets = document.getElementsByClassName("lightbox-target");
for (let i = 0; i < lightboxTargets.length; i++) {
    lightboxTargets[i].addEventListener("click", function () {
        currentSlideIndex = i;
        showSlides();
    });
}