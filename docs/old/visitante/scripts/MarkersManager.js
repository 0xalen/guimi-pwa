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
function MarkersManager() {
    var markerList = new MarkerList();

    this.checkMarkersLoaded = function() {
        return (markerList.getLength() === 0) ? false : true;
    }

    this.setMarkers = function() {
        var mList = requestMarkers();
        console.log(( mList == undefined) ? "Marker list empty":"Marker list ready.");
        addMarkersToList(mList);
    }

    var requestMarkers = function() {
        // Request markers from API
        // Process JSON
        // var mList = JSON.parse(sentData);
        var mList = {
                    "mID":[ "A0001", "A0002", "A0003", "A0004", "A0005" ],
                    "mElementName":[ "Apple Mouse", "IBM", "RAM", "Arcade", "HD" ],
                    "mPattURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0001.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0002.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0003.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0004.patt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/pattern/PA0005.patt"]
        }
        console.log((mList == undefined) ? "Marker data missing":"Marker list data received");
        return mList;
    }

    var addMarkersToList = function(mList) {
        var i, m;
        //var debugText = "mList.mID[0] : "+ mList.mID[0] + "<br> mList.mElementName[0]: " + mList.mElementName[0] + "<br>mList.mPattURL[0]: " + mList.mPattURL[0] ;// DEBUG
        //var debugText = "mID: " + mList.mID.length;
        for (i = 0; i < mList.mID.length; i++) {
            m = new Marker(mList.mID[i], mList.mElementName[i], mList.mPattURL[i]);
            markerList.addMarker(m);
        }
        //console.log("markerList: " + typeof markerList.getList());              //DEBUG
        //var debugText = "markerList.getList()[0].getMarkerID() : "+ markerList.getList()[0].getMarkerID() + "<br> markerList.getList()[0].getElementName(): " + markerList.getList()[0].getElementName() + "<br> markerList.getList()[0].getPatternURL(): " + markerList.getList()[0].getPatternURL() ;// DEBUG
        //document.getElementById("debugP").innerHTML = debugText;              // DEBUG
    }

    this.getMarkers = function() {
        console.log(( markerList.getLength() == 0) ? "Marker list empty":"Marker list ready");
        return markerList.getList();
    }

    this.searchForMarkers = function() {
        var i;
        var mList = markerList.getList();
        for (i = 0; i < mList.length; i++) {
            createElement(mList[i].getMarkerID(), mList[i].getPatternURL());
        }
    }

// addA(markerID, "markerBtn", eName);
    var createElement = function(markerID, pattURL) {
        var sceneEl = document.querySelector("a-scene");

        var markerEl = document.createElement('a-marker');
        markerEl.setAttribute("id", markerID);
        markerEl.setAttribute("preset", "pattern");
        markerEl.setAttribute("type", "pattern");
        markerEl.setAttribute("url", pattURL);
        markerEl.setAttribute("registerevents", "");

        sceneEl.insertAdjacentElement('beforeend', markerEl);

	    addMarkerIndicator(markerID);
    }
   /** TO-DO: DOCUMENT NEW METHOD: ADD MARKER INDICATOR **/
    var addMarkerIndicator = function(markerID) {
        var markerEl = document.getElementById(markerID);
	    //document.getElementById("debugP").innerHTML = markerEl.id;              /* DEBUG*/

	    var entityEl = document.createElement('a-entity');
	    var scaleX = "0.1";
	    var scaleY = "0.2";
	    var scaleZ = "0.2";
	    var scaleAtt = document.createAttribute("scale");
	    scaleAtt.value = scaleX +  " " + scaleY + " " + scaleZ;
	    entityEl.setAttributeNode(scaleAtt);

	    var visibility = document.createAttribute("visible");
	    visibility.value = true;
	    entityEl.setAttributeNode(visibility);

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
        var rotEl = document.createAttribute("rotation");
        rotEl.value = rotX +  " " + rotY + " " + rotZ;
        coneEl.setAttributeNode(rotEl);

        markerEl.insertAdjacentElement('beforeend', entityEl);

        var mat = document.createAttribute("material");
        mat.value = "opacity: 0.5; side:double; color:red";

        coneEl.setAttributeNode(mat );

        entityEl.insertAdjacentElement('beforeend', coneEl);
    }

    var addA = function(parentDivID, aClass, aText) {
        var divEl = document.getElementById(parentDivID);

        var aEl = document.createElement('a');

        var idAtt = document.createAttribute('id');
        idAtt.value = aClass;
        aEl.setAttributeNode(idAtt);

        var classAtt = document.createAttribute('class');
        classAtt.value = aClass;
        aEl.setAttributeNode(classAtt);

        var onclickAtt = document.createAttribute('onclick');
        onclickAtt.value = "";
        aEl.setAttributeNode(onclickAtt);

        var aTextEl = document.createTextNode(aText);
        aEl.appendChild(aTextEl);

        divEl.insertAdjacentElement('beforeend', aEl);
    }

    this.prepareEventListeners = function() {
        var ml = markerList.getList();
        var id;
        var markerEl;

        var i;
        for (i = 0; i < ml.length; i++){
            id = ml[i].getMarkerID();
            markerEl = document.getElementById(id);
        	/* markerEl.visible */
        }
    }

    /** TO-DO: DOCUMENT NEW METHOD: HIDE MARKERS **/
    this.hideUnselectedMarkers = function(selectedMarker) {
        var ml = this.getMarkers();
        var id;
        var markerEl;

        var i;
        for (i = 0; i < ml.length; i++){
            id = ml[i].getMarkerID();
        	if (id === selectedMarker) {
            	continue;
            }
            markerEl = document.getElementById(id);
            markerEl.setAttribute('visible', false);
        }
    }
    /** TO-DO: DOCUMENT NEW METHOD: DISPLAY MARKERS **/
    this.displayAllMarkers = function() {
        var ml = markerList.getList();
        var id;
        var markerEl;

        var i;
        for (i = 0; i < ml.length; i++){
            id = ml[i].getMarkerID();
            markerEl = document.getElementById(id);
        	if (markerEl.visible == false) {
                markerEl.setAttribute('visible', true);
            }
        }
    }

}
