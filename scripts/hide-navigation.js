let prevScrollPos = window.scrollY;

window.onscroll = function () {
    if (document.getElementsByClassName("responsive").length === 0) {
        let currentScrollPos = window.scrollY;
        if ((prevScrollPos > currentScrollPos || currentScrollPos < 1)) {
            document.querySelector("nav").style.bottom = "0";
            document.querySelector(".links").style.overflowX = "scroll";
        } else {
            document.querySelector("nav").style.bottom = "-100px";
            document.querySelector(".links").style.overflowX = "hidden";
        }
        prevScrollPos = currentScrollPos;
    }
}