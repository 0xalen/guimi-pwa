/*		var m = document.querySelector("a-marker");
        m.addEventListener("markerFound", function(){
            var markerId = marker.id;
            console.log('markerFound', markerId);
            // Marker found
            document.getElementById("debugP").innerHTML= "Marker Found!";
            alert("Marker found: " + markerId);
        });
        m.addEventListener("markerLost", function{
            var markerId = marker.id;
            console.log('markerLost', markerId);
            // Marker lost
            document.getElementById("debugP").innerHTML= "Lost";
            alert("Marker found: " + markerId);
        });
*/
function addMarker(markerID, pattURL) {
    var sceneEl = document.querySelector("a-scene");
    
    var markerEl = document.createElement('a-marker');
    markerEl.setAttribute("id", markerID);
    markerEl.setAttribute("preset", "pattern");
    markerEl.setAttribute("type", "pattern");
    markerEl.setAttribute("url", pattURL);
    markerEl.setAttribute("registerevents", "");

    //sceneEl.appendChild(markerEl);
    sceneEl.insertAdjacentElement('beforeend', markerEl);
    document.getElementById("debugP").innerHTML = markerEl.id;              /* DEBUG*/


	addImage(markerID);
}

function addImage(markerID) {
	var markerEl = document.getElementById(markerID);
	document.getElementById("debugP").innerHTML = markerEl.id;              /* DEBUG*/
	    
	var imageEl = document.createElement('a-image'); 
    imageEl.setAttribute("position","0 1 0"); 
    imageEl.setAttribute("rotation", "-90 0 0");
    imageEl.setAttribute("width", "1");
    imageEl.setAttribute("height", "1");
    imageEl.setAttribute("src", "#transpImage");
    
    markerEl.insertAdjacentElement('beforeend', imageEl);
}

/* document.getElementById("debugP").innerHTML= "Image appended to Marker";                /* DEBUG*/  

function debugMarker() {
	var div = document.getElementById("divDebug");
	var para = document.createElement("p");
	para.setAttribute("id", "testP");
	para.setAttribute("registerevents", "");
	div.appendChild(para);
}
