function findEvents() {
    var m = document.querySelector('a-marker');
    console.log("m type: " + typeof m.tagName);        //DEBUG
    m.addEventListener("markerFound", function(){
        var markerId = marker.id;
        console.log("id type: " +  typeof markerId);        //DEBUG
        console.log("markerId: " + markerId);        //DEBUG
        console.log('markerFound', markerId);
        // Marker found
        document.getElementById("debugP").innerHTML = "MARKER FOUND!";
        alert("Marker found: " + markerId);
    });
    m.addEventListener("markerLost", function() {
        var markerId = marker.id;
        console.log("id type: " +  typeof markerId);        //DEBUG
        console.log("markerId: " + markerId);        //DEBUG
        console.log('markerLost', markerId);
        // Marker lost
        document.getElementById("debugP").innerHTML = "MARKER LOST!";
        alert("Marker found: " + markerId);
    });
}
