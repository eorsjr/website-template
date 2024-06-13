/**
 * This code is responsible for revealing sections with an animation.
 */

// Set initial opacity of sections to 0
document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
});

/**
 * Reveals sections with an animation when they enter the viewport.
 * Checks if each section is within a certain threshold of the viewport height.
 * If a section's top or bottom position is within the viewport,
 * it sets the opacity to 1 to reveal it; otherwise, it sets the opacity to 0 to hide it.
 */
function reveal() {
  let sections = document.querySelectorAll("section");
  let pane = document.querySelector(".pane");

  let paneHeight = pane.clientHeight;
  let paneTop = pane.getBoundingClientRect().top;
  let threshold = 150; // Threshold for revealing sections

  for (let section of sections) {
    let sectionRect = section.getBoundingClientRect();
    let sectionTop = sectionRect.top - paneTop;
    let sectionBottom = sectionRect.bottom - paneTop;

    if (sectionTop < paneHeight - threshold && sectionBottom > threshold) {
      section.style.opacity = 1; // Set opacity to 1 to reveal section
    } else {
      section.style.opacity = 0; // Set opacity to 0 to hide section
    }
  }
}

document.querySelector(".pane").addEventListener("scroll", reveal);
window.addEventListener("resize", reveal);
window.addEventListener("orientationchange", reveal);

// Initially reveal sections when the page loads
reveal();
