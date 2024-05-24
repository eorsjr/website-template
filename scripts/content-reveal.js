/**
 * This code is responsible for revealing sections with an animation.
 */

/**
 * Reveals sections with an animation when they enter the viewport.
 * Checks if each section is within a certain threshold of the viewport height.
 * If a section's top position is less than the viewport height minus the threshold,
 * it adds the "active" class to reveal it; otherwise, it removes the "active" class.
 */
function reveal() {
  let reveals = document.querySelectorAll("section");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 50; // Threshold for revealing sections

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active"); // Add "active" class to reveal section
    } else {
      reveals[i].classList.remove("active"); // Remove "active" class to hide section
    }
  }
}

// Event listener to trigger the reveal function when scrolling
window.addEventListener("scroll", reveal);

// Initially reveal sections when the page loads
reveal();