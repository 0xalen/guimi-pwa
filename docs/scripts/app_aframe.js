(function() {
    'use strict';

    var app = {
        isLoading: true,
        spinner: document.querySelector('.loader'),
        container: document.querySelector('.main'),
        addDialog: document.querySelector('.dialog-container'),
		markersLoaded: false,
		markersDetected: false,
		chosenElementID: "",
		contentTypeChosen: -1,
		viewingContent: false,

    };

    /**********************************************************
    *   Events
    ***********************************************************/

    AFRAME.registerComponent('registerevents', {
		init: function () {
			var marker = this.el;
			marker.addEventListener('markerFound', function() {
				var markerId = marker.id;
				console.log('markerFound', markerId);
		         // Cuando se encuentra un marcador
                //openOptionsMenu(markerID);
                document.getElementById("markerEventTest").innerHTML = "Marker found!!!";
	        });
			marker.addEventListener('markerLost', function() {
				var markerId = marker.id;
				console.log('markerLost', markerId);
				// Cuando se pierde un marcador
                //closeOptionsMenu();
                document.getElementById("markerEventTest").innerHTML = "Marker Lost";
			});
		}
	});

    /**********************************************************
    *   Control
    ***********************************************************/

    /*  METHODS */

    // Check state
    var importMarkers = function(v) {
        if (!v.checkLoaded()) {
            v.loadMarkers();
            app.markersLoaded = v.checkLoaded();
    	}
    }

  	var lookForMarkers = function(v) {
		// TO DO change with A-FRAME to create Scenes
		v.searchForMarkers()
  	}

    /**********************************************************
    * MAIN
    **********************************************************/
    checkLoader();
    var visitor = new VisitorManager();

	// Load markers
	if (!app.markersLoaded) {
		importMarkers(visitor);
	}

	lookForMarkers(visitor);


})();
