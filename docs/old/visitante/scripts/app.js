// Copyright 2016 Google Inc.
//            2018 Franco Alejandro Trinidad
//				  María Luz Almada
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function() {
    'use strict';

    var app = {
        isLoading: true,
//        spinner: document.querySelector('.loader'),
        container: document.querySelector('.main'),
        addDialog: document.querySelector('.dialog-container'),
		markersLoaded: false,
		visitorManager: null,
		markerCounter: 0,
		selectedMarker: undefined,
		viewingOptions: false,
		viewingContent: false,
    };
  
    /**********************************************************
    *
    *   Events
    *
    ***********************************************************/
    /*
    AFRAME.registerComponent('registerevents', {
        init: function() {
            var marker = this.el;
            marker.setAttribute('emitevents', 'true');
            marker.addEventListener('markerFound', function() {
                var markerID = marker.id;
                console.log('markerFound', markerId);
                selectedMarkers++;
                setTimeout(function() {
                        processMarker(markerId)
                        }, 2000);
            });
            marker.addEventListener('markerLost', function() {
                var markerId = marker.id;
                console.log('markerLost', markerId);
                // Cuando se pierde un marcador
                selectedMarkers++;
                setTimeout(function() {
                        processMarker(markerId)
                        }, 2000);
            });
        }
    });
    */
    /*
    var m = document.querySelector("a-marker");
    m.addEventListener("markerFound", (e)=>{
        console.log("found")
    })

    m.addEventListener("markerLost", (e)=>{
        console.log("lost")
    }) */
    /* TEMP EVENTS */
    document.getElementById("debugBtn1").addEventListener("click", function() {
            console.log('Process Marker (A0001)');
            app.markerCounter++;
            app.processMarker('A0001');
            console.log('Marker counter: ' + app.markerCounter);
    });
    document.getElementById("debugBtn2").addEventListener("click", function() {
            console.log('Process Marker (A0002)');
            app.markerCounter++;
            app.processMarker('A0002');
            console.log('Marker counter: ' + app.markerCounter);    //DEBUG
    });
    document.getElementById("debugBtn3").addEventListener("click", function() {
            console.log('Process Marker (A0003)');
            app.markerCounter++;
            app.processMarker('A0003');
            console.log('Marker counter: ' + app.markerCounter);    //DEBUG
    });

    /**********************************************************
    *
    *   UI
    *
    ***********************************************************/


    /**********************************************************
    *
    *   Model
    *
    ***********************************************************/

    /**********************************************************
    *
    *   Control
    *
    ***********************************************************/

    /*  METHODS */
    // Loader
  /*   var checkLoader = function() {
        if (app.isLoading) {
          app.spinner.setAttribute('hidden', true);
          app.container.removeAttribute('hidden');
          app.isLoading = false;
        }
    }*/
    app.destroyContent = function() {
        app.viewingContent = false;
        app.visitor.destroyContentScreen();
        app.visitor.processScene(app.selectedMarker, app);
    }
    app.destroyOptions = function() {
        app.markerCounter = 0;
        console.log('Marker counter: ' + app.markerCounter);        //DEBUG
        app.viewingOptions = false;
        app.selectedMarker = undefined;
        app.visitor.destroyOptionsScreen();
    }
    /**********************************************************
    *
    * MAIN
    *
    **********************************************************/
    // Page loader
    //checkLoader();

	/**************** AUGMENTED REALITY *********************/
	app.visitor = new VisitorManager(app);
    // Load Markers
	app.visitor.loadMarkers();

    app.visitor.identifyScene();

   app.processMarker = function(mID) {
        if (app.markerCounter === 1) {
            app.selectedMarker = mID;
            app.viewingOptions = true;
            app.visitor.processScene(app.selectedMarker, app);
        } else {
            console.log("app.viewingOptions === true: " + (app.viewingOptions === true));
            console.log("app.viewingContent === true: " + (app.viewingContent === true));
            app.markerCounter = 0;
            console.log("DEBUG: Destroy content(1)");
            if (app.viewingContent === true) {
                console.log("DEBUG: Destroy content(2)");
                app.viewingContent = false;
                app.visitor.destroyContentScreen();
            }
            if (app.viewingOptions === true) {
                app.viewingOptions = false;
                app.visitor.destroyOptionsScreen();
            }
        }
    }

    app.processOption = function(cType) {
        app.viewingContent = true;
        console.log("Visualize content: " + cType);
        app.visitor.visualizeContent(app.selectedMarker, cType);
    }


	// Service worker
	if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker registered'); });
  }

})();
