let scroll = document.getElementById("scroll")
scroll.onscroll = imgResize

function imgResize(){
    document.querySelector("scroll").style.transform = "scale(1.0)"
}
