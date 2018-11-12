function addMarker() {
    document.getElementById("debugP").innerHTML= "Entered function";                /* DEBUG*/
    var sceneEl = document.querySelector('a-scene');
    document.getElementById("debugP").innerHTML= "Scene Selected";              /* DEBUG*/
    
    var markerEl = document.createElement('a-marker');
    markerEl.setAttribute("id", "amarkerID");
    markerEl.setAttribute("preset", "pattern");
    markerEl.setAttribute("type", "pattern");
    markerEl.setAttribute("url", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0001.patt");
    markerEl.setAttribute("registerevents", "");
    document.getElementById("debugP").innerHTML= "Marker created + attributes setted";              /* DEBUG*/
    
    var imageEl = document.createElement('a-image'); 
    imageEl.setAttribute("position","0 1 0"); 
    imageEl.setAttribute("rotation", "-90 0 0");
    imageEl.setAttribute("width", "1");
    imageEl.setAttribute("height", "1");
    imageEl.setAttribute("src", "#transpImage");
    document.getElementById("debugP").innerHTML= "Image created + attributes setted";               /* DEBUG*/
    
    sceneEl.appendChild(markerEl);
    document.getElementById("debugP").innerHTML= "Marker appended to scene";                /* DEBUG*/
            
    imageEl.appendChild(markerEl);
    document.getElementById("debugP").innerHTML= "Image appended to Marker";                /* DEBUG*/
    
}
