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
function OptionsScreen(opt, mainApp) {
    var imageCount = opt[0];
    var textCount = opt[1];
    var videoCount = opt[2];
    var audioCount = opt[3];
    var app = mainApp;

    var imgIcon = "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/images/icons/icon_cont-imagen.png";
    var unImgIcon = "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/images/icons/icon_cont-imagen_unselected.png";
    var txtIcon = "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/images/icons/icon_cont-texto.png";
    var unTxtIcon = "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/images/icons/icon_cont-texto_unselected.png";
    var vidIcon = "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/images/icons/icon_cont-video.png";
    var unVidIcon = "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/images/icons/icon_cont-video_unselected.png";
    var audIcon = "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/images/icons/icon_cont-audio.png";
    var unAudIcon = "https://raw.githubusercontent.com/0xalen/guimi/master/visitante/images/icons/icon_cont-audio_unselected.png";

    this.displayOptionsScreen = function() {
        showOptions();
        openOptionsScreen();
        createEventListeners();
    }

    this.closeOptionsScreen = function() {
        closeOptionsScreen();
    }

    var closeOptionsScreen = function() {
        var oScreenDiv = document.getElementById("optionsScreenID");
        //console.log("Child to remove: " + oScreenDiv.childNodes[0]);        //DEBUG
        while (oScreenDiv.childNodes[0]) {
            oScreenDiv.removeChild(oScreenDiv.childNodes[0]);
        }
        hideOptions();
    }

    var hideOptions = function() {
    document.getElementById('optionsScreenID').style.display='none';
    }

    var showOptions = function() {
        document.getElementById('optionsScreenID').style.display='block';
    }

    var openOptionsScreen = function() {
        var optionDiv = document.getElementById("optionsScreenID");
        addSpanClose("optionsScreenID");
        addDiv("optionsScreenID", "row", "optionsRow");

        addDiv("optionsRow", "column", "cAudio");
        addCounterBlock("cAudio", audioCount);
        if (audioCount > 0) {
            addDivImage("cAudio", "audioID", audIcon, "Audio");
        } else {
            addDivImage("cAudio", "audioID", unAudIcon, "Audio");
        }

        addDiv("optionsRow", "column", "cVideo");
        addCounterBlock("cVideo", videoCount);
        if (videoCount > 0) {
            addDivImage("cVideo", "videoID", vidIcon, "Video");
        } else {
            addDivImage("cVideo", "videoID", unVidIcon, "Video");
        }

        addDiv("optionsRow", "column", "cText");
        addCounterBlock("cText", textCount);
        if (textCount > 0) {
            addDivImage("cText", "textID", txtIcon, "Texto");
        } else {
            addDivImage("cText", "textID", unTxtIcon, "Texto");
        }

        addDiv("optionsRow", "column", "cImage");
        addCounterBlock("cImage", imageCount);
        if (imageCount > 0) {
            addDivImage("cImage", "imageID", imgIcon, "Imagen");
        } else {
            addDivImage("cImage", "imageID", unImgIcon, "Imagen");
        }
    }
    var addDiv = function(parentDivID, divClass, newDivID) {
        var divEl = document.getElementById(parentDivID);

        var newDivEl = document.createElement('div');

        var idAtt = document.createAttribute('id');
        idAtt.value = newDivID;
        newDivEl.setAttributeNode(idAtt);

        var classAtt = document.createAttribute('class');
        classAtt.value = divClass;
        newDivEl.setAttributeNode(classAtt);

        divEl.insertAdjacentElement('beforeend', newDivEl);
    }
    var addDivImage = function(divID, imgID, imgSrc, imgAlt) {
        var divEl = document.getElementById(divID);

        var imageEl = document.createElement('img');

        var idAtt = document.createAttribute('id');
        idAtt.value = imgID;
        imageEl.setAttributeNode(idAtt);

        var srcAtt = document.createAttribute('src');
        srcAtt.value = imgSrc;
        imageEl.setAttributeNode(srcAtt);

        var altAtt = document.createAttribute('alt');
        altAtt.value = imgAlt;
        imageEl.setAttributeNode(altAtt);

        var styleAtt = document.createAttribute('style');
        styleAtt.value = "width:100%";
        imageEl.setAttributeNode(styleAtt);

        var onclickAtt = document.createAttribute('onclick');
        onclickAtt.value = "";
        imageEl.setAttributeNode(onclickAtt);

        divEl.insertAdjacentElement('beforeend', imageEl);
    }
    var addCounterBlock = function(parentDivID, count) {
        var divEl = document.getElementById(parentDivID);
        var h1El = document.createElement('h1');

        var counterEl = document.createTextNode(count);

        h1El.appendChild(counterEl);

        divEl.insertAdjacentElement('beforeend', h1El);
    }
    var addSpanClose = function(parentDivID) {
        var divEl = document.getElementById(parentDivID);

        var spanEl = document.createElement('span');

        var idAtt = document.createAttribute('id');
        idAtt.value = "closeOptionBtn";
        spanEl.setAttributeNode(idAtt);

        var classAtt = document.createAttribute('class');
        classAtt.value = "backbtn";
        spanEl.setAttributeNode(classAtt);

        var onclickAtt = document.createAttribute('onclick');
        onclickAtt.value = "";
        spanEl.setAttributeNode(onclickAtt);

        var closeBtnEl = document.createTextNode("↩");
        spanEl.appendChild(closeBtnEl);

        divEl.insertAdjacentElement('beforeend', spanEl);
    }

    var createEventListeners = function() {
        if (imageCount > 0) {
            document.getElementById("imageID").addEventListener("click", function() {
                console.log('Image content selected');
                closeOptionsScreen();
                app.processOption(0);
            });
        }
        if (textCount > 0) {
            document.getElementById("textID").addEventListener("click", function() {
                console.log('Text content selected');
                closeOptionsScreen();
                app.processOption(1);
            });
        }
        if (videoCount > 0) {
            document.getElementById("videoID").addEventListener("click", function() {
                console.log('Video content selected');
                closeOptionsScreen();
                app.processOption(2);
            });
        }

        if (audioCount > 0) {
            document.getElementById("audioID").addEventListener("click", function() {
                console.log('Audio content selected');
                closeOptionsScreen();
                app.processOption(3);
            });
        }

        document.getElementById("closeOptionBtn").addEventListener("click", function() {
            console.log('Close options screen');
            app.destroyOptions();
            closeOptionsScreen();
        });
    }
}
