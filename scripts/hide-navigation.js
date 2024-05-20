/* This code is responsible for hiding/revealing the navigation bar depending on scroll direction. */

let prevScrollPos = window.scrollY;

window.onscroll = function () {
    if (($(".menu").css("display") === "none" && window.innerHeight > window.innerWidth) || window.innerHeight < window.innerWidth) {
        let currentScrollPos = window.scrollY;

        if ((prevScrollPos > currentScrollPos || currentScrollPos < 1)) {
            document.querySelector(".navbar").style.bottom = "0";
            document.querySelector(".menu").style.bottom = "0";
        } else {
            document.querySelector(".navbar").style.bottom = "-100px";
            document.querySelector(".menu").style.bottom = "-100px";
        }

        prevScrollPos = currentScrollPos;
    }
}