window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myimg").className = "animated";
    }
}