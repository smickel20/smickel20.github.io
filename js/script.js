window.addEventListener("load",   function (){
    var pics = document.getElementById("imgs");
    console.log(pics)
    var height,
        half;

    window.addEventListener("resize", adjustHeightVars);
    window.addEventListener("scroll", fadeBox);

    function fadeBox () {
        var y = pics.offsetTop - 1100;
        var x = window.pageYOffset;
        if (x >= y) {
            pics.classList.add("fadein")
        }
    }

    function adjustHeightVars() {
        height = window.innerHeight;
    }

    adjustHeightVars();
})
