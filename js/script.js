window.addEventListener("load",   function (){
    var pics = document.getElementById("imgs");
    console.log(pics)
    var height,
        half;

    window.addEventListener("resize", adjustHeightVars);
    window.addEventListener("scroll", fadeBox);

    function fadeBox () {
        console.log("fadebox")
        var y = pics.offsetTop - 1100;
        var x = window.pageYOffset;
        console.log(x + "-" + y)
        if (x >= y) {
            pics.classList.add("fadein")
        }
    }

    function adjustHeightVars() {
        console.log("scrolling")
        height = window.innerHeight;
    }

    adjustHeightVars();
})
