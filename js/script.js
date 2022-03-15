var pics = document.getElementById("img");

var height,
    half;

window.addEventListener("resize", adjustHeightVars);
window.addEventListener("scroll", fadeBox);

function fadeBox () {
    var x = pics.offsetTop - half;
    var y = window.pageYOffset;
    if (y >= x) {
        $(".img_1").addClass("fadein");
    }
}

function adjustHeightVars() {
    height = window.innerHeight;
    half = height * 0.35;
}

adjustHeightVars();