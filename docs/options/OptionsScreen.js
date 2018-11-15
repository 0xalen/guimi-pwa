function OptionsScreen(opt) {
    var imageCount = opt[0];
    var textCount = opt[1];
    var videoCount = opt[2];
    var audioCount = opt[3];

    var imgIcon = "images/icon_cont-imagen.png";
    var unImgIcon = "images/icon_cont-imagen_unselected.png";
    var txtIcon = "images/icon_cont-texto.png";
    var unTxtIcon = "images/icon_cont-texto_unselected.png";
    var vidIcon = "images/icon_cont-video.png";
    var unVidIcon = "images/icon_cont-video_unselected.png";
    var audIcon = "images/icon_cont-audio.png";
    var unAudIcon = "images/icon_cont-audio_unselected.png";

    this.displayOptionsScreen = function() {
        showOptions();
        openOptionsScreen();
    }

    var closeOptionsScreen = function() {
        var oScreenDiv = document.getElementById("optionsScreenID");
        console.log("Child to remove: " + oScreenDiv.childNodes[0]);        //DEBUG
        oScreenDiv.removeChild(oScreenDiv.childNodes[0]);
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

        addDiv("optionsScreenID", "row", "optionsRow");
        addSpan("optionsRow");

        addDiv("optionsRow", "column", "cImage");
        addCounterBlock("cImage", imageCount);
        if (imageCount > 0) {
            addDivImage("cImage", "imageID", imgIcon, "Imagen");
        } else {
            addDivImage("cImage", "imageID", unImgIcon, "Imagen");
        }

        addDiv("optionsRow", "column", "cText");
        addCounterBlock("cText", textCount);
        if (textCount > 0) {
            addDivImage("cText", "textID", txtIcon, "Texto");
        } else {
            addDivImage("cText", "textID", unTxtIcon, "Texto");
        }

        addDiv("optionsRow", "column", "cVideo");
        addCounterBlock("cVideo", videoCount);
        if (videoCount > 0) {
            addDivImage("cVideo", "videoID", vidIcon, "Video");
        } else {
            addDivImage("cVideo", "videoID", unVidIcon, "Video");
        }

        addDiv("optionsRow", "column", "cAudio");
        addCounterBlock("cAudio", audioCount);
        if (audioCount > 0) {
            addDivImage("cAudio", "audioID", audIcon, "Audio");
        } else {
            addDivImage("cAudio", "audioID", unAudIcon, "Audio");
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

       // var textDivEl = document.createElement('div');

        //var classAtt = document.createAttribute('class');
        //classAtt.value = "counter";
        //textDivEl.setAttributeNode(classAtt);

        var h1El = document.createElement('h1');

        var counterEl = document.createTextNode(count);

        h1El.appendChild(counterEl);

        //divEl.insertAdjacentElement('beforeend', textDivEl);

        //textDivEl.insertAdjacentElement('beforeend', h1El);
        divEl.insertAdjacentElement('beforeend', h1El);
    }
    var addSpan = function(parentDivID) {
        var divEl = document.getElementById(parentDivID);

        var spanEl = document.createElement('span');

        var idAtt = document.createAttribute('id');
        idAtt.value = "closeOptionsBtn";
        spanEl.setAttributeNode(idAtt);

        var classAtt = document.createAttribute('class');
        classAtt.value = "btn-close";
        spanEl.setAttributeNode(classAtt);

        var onclickAtt = document.createAttribute('onclick');
        onclickAtt.value = "";
        spanEl.setAttributeNode(onclickAtt);

        divEl.insertAdjacentElement('beforeend', spanEl);
    }

    this.createEventListeners = function() {
        if (imageCount > 0) {
            document.getElementById("imageID").addEventListener("click", function() {
                console.log('Image content selected');
                closeOptionsScreen();      //TEMP FOR DEBUG
            });
        }
        if (textCount > 0) {
            document.getElementById("textID").addEventListener("click", function() {
                console.log('Text content selected');
                closeOptionsScreen();      //TEMP FOR DEBUG
            });
        }
        if (videoCount > 0) {
            document.getElementById("videoID").addEventListener("click", function() {
                console.log('Video content selected');
                closeOptionsScreen();      //TEMP FOR DEBUG
            });
        }

        if (audioCount > 0) {
            document.getElementById("audioID").addEventListener("click", function() {
                console.log('Audio content selected');
                closeOptionsScreen();      //TEMP FOR DEBUG
            });
        }

        document.getElementById("closeOptionsBtn").addEventListener("click", function() {
            console.log('Close menu');
            closeOptionsScreen();      //TEMP FOR DEBUG
        });
    }
}
