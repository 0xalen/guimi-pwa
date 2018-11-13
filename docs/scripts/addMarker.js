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
    //document.getElementById("debugP").innerHTML = markerEl.id;              /* DEBUG*/

	//addImage(markerID);
	//addIndicator(markerID);
	addMarkerIndicator(markerID);
}

function addIndicator(markerID) {
	markerID.innerHTML =
	'<a-entity scale="0.1 0.2 0.2">\
		<a-cone position="0 6 2" rotation="90 0 0" material="opacity: 0.5; side: double;color:red">\
		</a-cone>\
    </a-entity>';
}

function addMarkerIndicator(markerID) {
    var markerEl = document.getElementById(markerID);
	document.getElementById("debugP").innerHTML = markerEl.id;              /* DEBUG*/
	
	var entityEl = document.createElement('a-entity'); 
	var scaleX = "0.1"; 
	var scaleY = "0.2"; 
	var scaleZ = "0.2";
	var scale = document.createAttribute("scale"); 
	scale.value = scaleX +  " " + scaleY + " " + scaleZ;
	entityEl.setAttributeNode(scale);
	
	var coneEl = document.createElement('a-cone'); 
	
    var posX = "0";
    var posY = "6";
    var posZ = "2";
    
    var pos = document.createAttribute("position");
    pos.value = posX +  " " + posY + " " + posZ;
    coneEl.setAttributeNode(pos);
    
    
    var rotX = "90";
    var rotY = "0"; 
    var rotZ = "0";
    
    var rot = document.createAttribute("rotation");
    rot.value = rotX +  " " + rotY + " " + rotZ;
    coneEl.setAttributeNode(rot);
    
    markerEl.insertAdjacentElement('beforeend', entityEl);
    
    var mat = document.createAttribute("material");
    mat.value = "opacity: 0.5; side:double; color:red";
    
    coneEl.setAttributeNode(mat );
    
    entityEl.insertAdjacentElement('beforeend', coneEl);
    
	//var debugT = 'entityEl.scale: ' + entityEl.scale + ' coneEl.position: ' + coneEl.position + ' coneEl.rotation: ' + coneEl.rotation;
    //document.getElementById("debugP").innerHTML = debugT;              /* DEBUG*/    
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
