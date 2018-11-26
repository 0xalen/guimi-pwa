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
function ContentManager(mID, cType) {
    var contentList = new ContentList();
    var markerID = mID;
    var contentType = cType;
    var contentID;

    // Handle Content
    this.setContent = function() {
        var cList = requestContent();
        addContentToList(cList);
    }

    var requestContent = function() {
        // Request image content for element with ID = elementID
        // Process JSON file
        // (Until the API is implemented, these are test values)
        // This method uses markerID and contentType
        if (contentType == 0 ) {
            if (mID == 'A0001') {
                var cList = {
                            "cName":[ "CA0001_I-01" ],
                            "cURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0001_I-01.png"]
                }
            }
            if (mID == 'A0002') {
                var cList = {
                            "cName":[ "CA0002_I-01", "CA0002_I-02" ],
                            "cURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0002_I-01.png", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0002_I-02.png"]
                }
            }
            if (mID == 'A0003') {
                var cList = {
                            "cName":[ "CA0003_I-01", "CA0003_I-02", "CA0003_I-03" ],
                            "cURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0003_I-01.png", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0003_I-02.png", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/img/CA0003_I-03.png"]
                }
            }
        } else  if (contentType == 1 ) {
            if (mID == 'A0001') {
                var cList = {
                            "cName":[ "CA0001_T-01", "CA0001_T-02" ],
                            "cURL":[ "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/txt/CA0001_T-01.txt", "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/test/txt/CA0001_T-02.txt"]
                }
            }
        }
        console.log("markerID: " + mID);
        return cList;
    }

    var addContentToList = function(cList) {
        var i, c;
        for (i = 0; i < cList.cName.length; i++ ) {
            c = new Content(cList.cName[i], cList.cURL[i]);
            contentList.addContent(c);
        }
        console.log(( contentList.getLength() == 0) ? "Content list empty":"Content List ready");              //DEBUG
    }

    this.getContent = function() {
        return contentList.getList();
    }

    this.getMarkerID = function() {
        return markerID;
    }
    this.setMarkerID = function(mID) {
        markerID = mID;
    }

    this.prepareContent = function() {
        addEntity("entityID");
        if (cType === 0) {
            addImageElement("entityID");
        } else if (cType === 1) {
            addTextElement("entityID");
        } else if (cType === 2) {
            addVideoElement("entityID");
        } else if (cType === 3) {
            addAudioElement("entityID");
        }
    }

    this.displayContent = function(cName, cURL) {
        // reemplazar contentName y contentURL en el html correspondiente
        if (cType === 0) {
            setImage(cName, cURL);
        } else if (cType === 1) {
            setText(cName, cURL);
        } else if (cType === 2) {
            setVideo(cName, cURL);
        } else if (cType === 3) {
            setAudio(cName, cURL);
        }
    }

    this.hideContent = function() {
        /*var entityEl = document.getElementById("entityID");
        while (entityEl.childNodes[0]) {
            entityEl.removeChild(entityEl.childNodes[0]);
        }*/
        var entityEl = document.querySelector('#entityID');
        entityEl.parentNode.removeChild(entityID);
    }

    /***************************** ENTITY *************************************/
    var addEntity = function(entityID) {
        var markerEl = document.getElementById(markerID);

        // Create image Element
        var entityEl = document.createElement('a-entity');

        var idAtt = document.createAttribute('id');
        idAtt.value = entityID;
        entityEl.setAttributeNode(idAtt);

        // SCALE
        var scaleX = "1";
	    var scaleY = "2";
	    var scaleZ = "3";
	    var scaleAtt = document.createAttribute("scale");
	    scaleAtt.value = scaleX +  " " + scaleY + " " + scaleZ;
	    entityEl.setAttributeNode(scaleAtt);

        // POSITION
        var posX = "0";
        var posY = "1";
        var posZ = "0";

        var pos = document.createAttribute("position");
        pos.value = posX +  " " + posY + " " + posZ;
        entityEl.setAttributeNode(pos);
        // ROTATION
        var rotX = "-90";
        var rotY = "0";
        var rotZ = "0";

        var rotEl = document.createAttribute("rotation");
        rotEl.value = rotX +  " " + rotY + " " + rotZ;
        entityEl.setAttributeNode(rotEl);

        // Add entity to to marker
        markerEl.insertAdjacentElement('beforeend', entityEl);
    }
    /***************************** IMAGE **************************************/
    var setImage = function(cName, cURL) {
        var imgEl = document.getElementById(contentID);

        imgEl.setAttribute("src", cURL);

//        displayName(cName);
    }

     var addImageElement = function(parentEntityID) {
        /*
        <a-image width="1" height="1" src="#imageAsset"></a-image>
        */
        var parentEl = document.getElementById(parentEntityID);

	    var imageEl = document.createElement('a-image');

        contentID = "imageAsset" + markerID;
        var idAtt = document.createAttribute('id');
        idAtt.value = contentID;
        imageEl.setAttributeNode(idAtt);

        var widthVal = "1";
        var widthAtt = document.createAttribute("width");
        widthAtt.value = widthVal;
        imageEl.setAttributeNode(widthAtt);

        var heightVal = "1";
        var heightAtt = document.createAttribute("height");
        heightAtt.value = heightVal;
        imageEl.setAttributeNode(heightAtt);

        var srcAtt = document.createAttribute("src");
        srcAtt.value = "";
        imageEl.setAttributeNode(srcAtt);

        parentEl.insertAdjacentElement('beforeend', imageEl);
    }

    /***************************** TEXT ***************************************/
    var setText = function(cName, cURL) {
      var textEl = document.getElementById(contentID);

      //var textContent = textFileToVar(cURL);
      //console.log("Text content (before): " + textContent);     //TEMP DEBUG
      //textEl.setAttribute("value", textContent);

      textFileToVar(cURL, function(textContent){
            textEl.setAttribute("value", textContent);
            console.log("Text content: " + textContent);     //TEMP DEBUG
        });
      //      displayName(cName);
    }

    var textFileToVar = function(cURL, callback) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'text';
        console.log("Text content URI: " + cURL);                              // DEBUG
        xhr.onreadystatechange = function() {
            callback(xhr.responseText);
        }
        xhr.open('GET', cURL);
        xhr.send();
    }

    var addTextElement = function(parentEntityID) {
        // Query a-marker
        var parentEl = document.getElementById(parentEntityID);

        // Create text Element
        var textEl = document.createElement('a-text');

        contentID = "textAsset" + markerID;
        var idAtt = document.createAttribute('id');
        idAtt.value = contentID;
        textEl.setAttributeNode(idAtt);

        var geometryAtt = document.createAttribute("geometry");
        geometryAtt.value = "geometry";
        textEl.setAttributeNode(geometryAtt);

        var valueAtt = document.createAttribute("value");
        valueAtt.value = "";
        textEl.setAttributeNode(valueAtt);

        parentEl.insertAdjacentElement('beforeend', textEl);
    }

    var displayName = function(cName) {
        // Query a-marker
        var markerEl = document.getElementById(markerID);

        var valEl = document.createAttribute("value");
        valEl.value = cName;

        // Add image to to marker
        markerEl.insertAdjacentElement('beforeend', textEl);
    }
}
