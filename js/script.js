function zoomin() {
            var GFG = document.getElementById("geeks");
            var currWidth = GFG.clientWidth;
            GFG.style.width = (currWidth + 100) + "px";
        }
          
        function zoomout() {
            var GFG = document.getElementById("geeks");
            var currWidth = GFG.clientWidth;
            GFG.style.width = (currWidth - 100) + "px";
        }
