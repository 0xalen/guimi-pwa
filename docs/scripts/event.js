function findEvents() {
    var m = document.querySelector('a-marker');
    console.log("m type: " + m.tagName);
    m.addEventListener("markerFound", function(){
        var markerId = marker.id;
        console.log('markerFound', markerId);
        // Marker found
        document.getElementById("debugP").innerHTML = "MARKER FOUND!";
        alert("Marker found: " + markerId);
    });
    m.addEventListener("markerLost", function() {
		var markerId = marker.id;
		console.log('markerLost', markerId);
        // Marker lost
		document.getElementById("debugP").innerHTML = "MARKER LOST!";
		alert("Marker found: " + markerId);
	});
}
