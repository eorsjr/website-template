let currentIndex = -1;
let slideshowTargets = document.getElementsByClassName("slideshow-image");
slideshow();
function slideshow() {
    for (let i = 0; i < slideshowTargets.length; i++) {
        slideshowTargets[i].style.display = "none";
    }
    currentIndex++;
    if (currentIndex === slideshowTargets.length) {
        currentIndex = 0;
    }
    slideshowTargets[currentIndex].style.display = "block";
    if (slideshowTargets.length > 1) {
        setTimeout(slideshow, 5000);
    }
}