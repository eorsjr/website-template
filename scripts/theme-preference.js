let themes = ["green", "yellow", "orange", "pink", "purple", "blue", "silver"]
let index = 6;

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

let cookieValue = getCookie("theme");

if (cookieValue != "") {
    document.body.className = cookieValue;
    index = themes.indexOf(cookieValue);
}

function toggleTheme() {
    if (index === themes.length - 1) {
        index = 0;
    } else {
        index = index + 1;
    }
    let theme = themes[index];
    document.cookie = setCookie("theme", theme, 90);
    document.body.className = theme;
}