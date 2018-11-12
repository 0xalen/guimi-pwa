
	var sceneEl = document.querySelector('a-scene');
	
	var markerEl = document.createElement('a-marker');
	markerEl.setAttribute("id", "amarkerID");
	markerEl.setAttribute("preset", "pattern");
	markerEl.setAttribute("type", "pattern");
	markerEl.setAttribute("url", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0001.patt");
	markerEl.setAttribute(registerevents, "");
	
	var imageEl = document.createElement('a-image'); 
	imageEl.setAttribute("position","0 1 0"); 
	imageEl.setAttribute(rotation", "-90 0 0");
	imageEl.setAttribute(width", "1");
	imageEl.setAttribute(height", "1");
	imageEl.setAttribute(src", "#transpImage");
			
	imageEl.appendChild(imageEl);
	sceneEl.appendChild(markerEl);

