/**
 * Creates and displays the scrim element.
 * Applies a blur effect for visual appeal and changes the background color.
 * 
 * @function createScrim
 */
function createScrim() {
    const scrim = document.createElement('div');
    scrim.id = 'scrim';
    document.body.appendChild(scrim);
    scrim.style.display = 'block';
    setTimeout(() => {
        scrim.style.backdropFilter = 'blur(20px)';
        scrim.style.webkitBackdropFilter = 'blur(20px)';
        scrim.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    }, 1);
}

/**
 * Removes the scrim element from the DOM.
 * 
 * @function removeScrim
 */
function removeScrim() {
    const scrim = document.getElementById('scrim');
    if (scrim) {
        scrim.style.backdropFilter = 'blur(0px)';
        scrim.style.webkitBackdropFilter = 'blur(0px)';
        scrim.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        setTimeout(() => {
            scrim.remove();
        }, 300);
    }
}