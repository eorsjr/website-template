/**
 * Updates the theme color meta tag based on a CSS custom property value.
 */
function updateThemeColor() {
    // Get the computed value of the CSS custom property for the theme color from the body element
    const themeColor = getComputedStyle(document.body).getPropertyValue('--md-sys-color-surface-container').trim();
    // Set the theme color meta tag with the retrieved color
    setThemeColorMetaTag(themeColor);
}

/**
 * Sets the content of the meta tag with name 'theme-color' to the specified color.
 * If the meta tag does not exist, it creates and appends one to the document head.
 *
 * @param {string} color - The color value to set for the theme color meta tag.
 */
function setThemeColorMetaTag(color) {
    // Query for an existing meta tag with the name 'theme-color'
    let themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    
    // If the meta tag does not exist, create and append it to the document head
    if (!themeColorMetaTag) {
        themeColorMetaTag = document.createElement('meta');
        themeColorMetaTag.setAttribute('name', 'theme-color');
        document.head.appendChild(themeColorMetaTag);
    }

    // Set the 'content' attribute of the meta tag to the specified color
    themeColorMetaTag.setAttribute('content', color);
}

// Add an event listener to update the theme color when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', updateThemeColor);