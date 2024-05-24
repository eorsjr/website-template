/* This code is reponsible for changing and storing style preferences based on user interaction. */

const themes = ["silver", "green", "yellow", "orange", "pink", "purple", "blue"];
const fonts = ["Noto Sans", "Anta", "Limelight", "Pattaya"];
let themeIndex = 0;
let fontIndex = 0;
let h1s = document.getElementsByTagName("h1");
let h2s = document.getElementsByTagName("h2");
let h3s = document.getElementsByTagName("h3");
let h4s = document.getElementsByTagName("h4");
let h5s = document.getElementsByTagName("h5");
let h6s = document.getElementsByTagName("h6");
let buttons = document.querySelectorAll("section button");
let navLinks = document.querySelectorAll("nav .links a");

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

let themeCookieValue = getCookie("theme");
let fontCookieValue = getCookie("font");

if (themeCookieValue != "") {
    document.body.className = themeCookieValue;
    themeIndex = themes.indexOf(themeCookieValue);
} else {
    document.body.className = themes[themeIndex];
}

if (fontCookieValue != "" && fonts.includes(fontCookieValue)) {

    for (const item of h1s) {
        item.style.fontFamily = fontCookieValue;
    }
    for (const item of h2s) {
        item.style.fontFamily = fontCookieValue;
    }
    for (const item of h3s) {
        item.style.fontFamily = fontCookieValue;
    }
    for (const item of h4s) {
        item.style.fontFamily = fontCookieValue;
    }
    for (const item of h5s) {
        item.style.fontFamily = fontCookieValue;
    }
    for (const item of h6s) {
        item.style.fontFamily = fontCookieValue;
    }
    for (const item of buttons) {
        item.style.fontFamily = fontCookieValue;
    }
    for (const item of navLinks) {
        item.style.fontFamily = fontCookieValue;
    }

    fontIndex = fonts.indexOf(fontCookieValue);
} else {
    let font = fonts[fontIndex];

    for (const item of h1s) {
        item.style.fontFamily = font;
    }
    for (const item of h2s) {
        item.style.fontFamily = font;
    }
    for (const item of h3s) {
        item.style.fontFamily = font;
    }
    for (const item of h4s) {
        item.style.fontFamily = font;
    }
    for (const item of h5s) {
        item.style.fontFamily = font;
    }
    for (const item of h6s) {
        item.style.fontFamily = font;
    }
    for (const item of buttons) {
        item.style.fontFamily = font;
    }
    for (const item of navLinks) {
        item.style.fontFamily = font;
    }
}

function switchTheme() {
    themeIndex += 1;

    if (themeIndex >= themes.length) {
        themeIndex = 0;
    }

    let theme = themes[themeIndex];
    document.cookie = setCookie("theme", theme, 365);
    document.body.className = theme;
}

function switchFont() {
    fontIndex += 1;

    if (fontIndex >= fonts.length) {
        fontIndex = 0;
    }

    let font = fonts[fontIndex];
    document.cookie = setCookie("font", font, 365);

    for (const item of h1s) {
        item.style.fontFamily = font;
    }
    for (const item of h2s) {
        item.style.fontFamily = font;
    }
    for (const item of h3s) {
        item.style.fontFamily = font;
    }
    for (const item of h4s) {
        item.style.fontFamily = font;
    }
    for (const item of h5s) {
        item.style.fontFamily = font;
    }
    for (const item of h6s) {
        item.style.fontFamily = font;
    }
    for (const item of buttons) {
        item.style.fontFamily = font;
    }
    for (const item of navLinks) {
        item.style.fontFamily = font;
    }
}