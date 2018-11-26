/**
 * GuIMI: Guía Interactiva del Museo de Informática (UNPA-UARG)
 * Copyright (C) 2018 Franco Alejandro Trinidad
 *                    María Luz Almada
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 **/
function VisitorManager(mainApp) {
    var mManager;
    var oManager;
    var oScreen;
    var cManager;
    var cScreen;
    var app = mainApp;

    this.checkMarkersLoaded = function() {
        if (typeof mManager == 'undefined') {
            return false;
        }
        return mManager.checkMarkersLoaded();
    }

    this.loadMarkers = function() {
        mManager = new MarkersManager()
        mManager.setMarkers();

        //console.log("mManager.getMarkers(): " + mManager.getMarkers());   //DEBUG
        if (typeof mManager.getMarkers() == 'undefined' ) {
            loadMarkers();
        }
    }

    this.identifyScene = function() {
        mManager.searchForMarkers();
    }

    this.processScene = function(markerID) {
        //console.log("typeof oManager == 'undefined': " + (typeof oManager === 'undefined'));
        mManager.hideUnselectedMarkers(markerID);
        if (typeof oManager === 'undefined'){
            oManager = new OptionsManager(markerID);
            oManager.setOptions();
        }
        //console.log("typeof oManager.getOptions() === null: " + (typeof oManager.getOptions() === 'null'));
        if (typeof oScreen === 'undefined') {
            oScreen = new OptionsScreen(oManager.getOptions(), app);
        }
        oScreen.displayOptionsScreen();
    }

    // If none specified, content Type defaults to image
    this.visualizeContent = function(markerID, contentType = 0) {
        if (typeof cManager === 'undefined') {
            cManager = new ContentManager(markerID, contentType);
            cManager.setContent();
        }
        if (typeof cScreen === 'undefined') {
            cManager.prepareContent();
            cScreen = new ContentScreen(cManager.getContent(), app, cManager);
        }
        cScreen.displayContentScreen();
    }

    this.destroyContentScreen = function() {
        console.log("DEBUG: Destroy content(3)");
        cScreen.closeContentScreen();
        cManager.hideContent();
        console.log("DEBUG: Destroy content(4)");
        cManager = undefined;
        cScreen = undefined;
    }
    this.destroyOptionsScreen = function() {
        oScreen.closeOptionsScreen();
        oManager = undefined;
        oScreen = undefined;
        mManager.displayAllMarkers();
    }

}
