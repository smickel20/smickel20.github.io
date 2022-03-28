window.addEventListener("load",   function (){
    var pics = document.getElementById("imgs");
    // maakt een variable van imgs
    document.getElementById("myimg").style.visibility = "hidden";
    //laat de img niet zien als je er nog niet voorbij bent gescrolt
    window.addEventListener("scroll", fadeBox);
    //kijkt of je scrollt
    var startAnimation = pics.offsetTop - window.innerHeight
    // hier kijkt het waar het plaatje is en dan doet het min waar je zit op de page en dan weet je ongeveer waar de top van het plaatjes is

    function fadeBox () {
        var PicHeight = pics.offsetTop - startAnimation;
        // bekijkt de hoogte van de img
        var PageHeight = window.pageYOffset;
        // bekijkt de hoogte van de pagina
        if (PageHeight >= PicHeight) {
            document.getElementById("myimg").style.visibility = "visible";
            //laat de img zien
            pics.classList.add("fadein")
            // speelt de animatie af
        }
    }

})
