/**
 * This code is responsible for changing and storing style preferences based on user interaction.
 */

// Define available themes and fonts
const themes = ["silver", "green", "yellow", "orange", "pink", "baseline", "blue"];
const fonts = ["Noto Sans", "Anta", "Limelight", "Pattaya"];
let themeIndex = 0;
let fontIndex = 0;

// Store references to various elements that will have their styles changed
const elements = {
    "h1": document.getElementsByTagName("h1"),
    "h2": document.getElementsByTagName("h2"),
    "h3": document.getElementsByTagName("h3"),
    "h4": document.getElementsByTagName("h4"),
    "h5": document.getElementsByTagName("h5"),
    "h6": document.getElementsByTagName("h6")
};

/**
 * Sets a key-value pair in local storage.
 * @param {string} key - The key for the local storage item.
 * @param {string} value - The value for the local storage item.
 */
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

/**
 * Retrieves a value from local storage by key.
 * @param {string} key - The key for the local storage item.
 * @returns {string} - The retrieved value, or an empty string if the key doesn't exist.
 */
function getLocalStorage(key) {
    return localStorage.getItem(key) || "";
}

/**
 * Applies the specified font to all relevant elements on the page.
 * @param {string} font - The font family to apply.
 */
function applyFont(font) {
    for (const element in elements) {
        Array.from(elements[element]).forEach(item => item.style.fontFamily = font);
    }
}

/**
 * Sets the initial theme based on the value stored in local storage, or defaults to the first theme.
 */
function setInitialTheme() {
    const themeLocalStorageValue = getLocalStorage("theme");
    themeIndex = themeLocalStorageValue ? themes.indexOf(themeLocalStorageValue) : 0;
    document.body.className = themes[themeIndex];
}

/**
 * Sets the initial font based on the value stored in local storage, or defaults to the first font.
 */
function setInitialFont() {
    const fontLocalStorageValue = getLocalStorage("font");
    const selectedFont = fontLocalStorageValue ? fontLocalStorageValue : fonts[fontIndex];
    applyFont(selectedFont);
    fontIndex = fonts.indexOf(selectedFont);
}

/**
 * Sets the initial color scheme (dark or light) based on the value stored in local storage or system preference.
 */
function setInitialColorScheme() {
    const darkThemeLocalStorageValue = getLocalStorage("dark");
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkThemeLocalStorageValue === "true" || (darkThemeLocalStorageValue === "" && prefersDarkScheme)) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

/**
 * Switches to the next theme in the themes array and updates the local storage.
 */
function switchTheme() {
    themeIndex = (themeIndex + 1) % themes.length;
    const theme = themes[themeIndex];
    document.body.classList.remove(...themes);
    document.body.classList.add(theme);
    setLocalStorage("theme", theme);
}

/**
 * Switches to the next font in the fonts array and updates the local storage.
 */
function switchFont() {
    fontIndex = (fontIndex + 1) % fonts.length;
    const font = fonts[fontIndex];
    applyFont(font);
    setLocalStorage("font", font);
}

/**
 * Toggles the color scheme between dark and light mode and updates the local storage.
 */
function switchColorScheme() {
    document.body.classList.toggle('dark');
    setLocalStorage("dark", document.body.classList.contains('dark'));
    toggleSchemeButton();
}

/**
 * Handles changes in the system's color scheme preference and updates the color scheme accordingly.
 */
function handleColorSchemeChange() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark', prefersDarkScheme);
    setLocalStorage("dark", document.body.classList.contains('dark'));
}

/**
 * Toggles the text of the color scheme button based on the current color scheme.
 * If the current color scheme is dark, it updates the button's text and aria-label to indicate switching to light mode.
 * If the current color scheme is light, it updates the button's text and aria-label to indicate switching to dark mode.
 */
function toggleSchemeButton() {
    if (document.body.classList.contains('dark')) {
        document.getElementById("color-scheme-button").ariaLabel = "Switch to Light Mode";
        document.querySelector("#color-scheme-button .icon").innerHTML = "light_mode";
    } else {
        document.getElementById("color-scheme-button").ariaLabel = "Switch to Dark Mode";
        document.querySelector("#color-scheme-button .icon").innerHTML = "dark_mode";
    }
}

// Set initial styles based on stored preferences
setInitialTheme();
setInitialFont();
setInitialColorScheme();
toggleSchemeButton();

// Add event listeners for user interactions and system changes
document.getElementById("palette-button").addEventListener("click", () => {
    switchTheme();
    updateThemeColor();
});
document.getElementById("color-scheme-button").addEventListener("click", () => {
    switchColorScheme();
    updateThemeColor();
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", () => {
    handleColorSchemeChange();
    updateThemeColor();
});
document.getElementById("font-button").addEventListener("click", switchFont);