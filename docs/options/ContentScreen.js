function ContentScreen() {

    this.displayContentScreen = function() {
        showGallery();
        openContentScreen();
    }

    var closeContentScreen = function() {
        var cScreenDiv = document.getElementById("contentScreenID");
        console.log("Child to remove: " + cScreenDiv.childNodes[0]);        //DEBUG
        cScreenDiv.removeChild(cScreenDiv.childNodes[0]);
        hideGallery();
    }

    var hideGallery = function() {
    document.getElementById('contentScreenID').style.display='none';
    }

    var showGallery = function() {
        document.getElementById('contentScreenID').style.display='block';
    }













    var openContentScreen = function() {
        var contentDiv = document.getElementById("contentScreenID");

        addDiv("optionsScreenID", "row", "optionsRow");
        addSpan("optionsRow");

        addDiv("optionsRow", "column", "cImage");

        addDivImage("cImage", "imageID", imgIcon, "Imagen");

        addDiv("optionsRow", "column", "cText");

        addDivImage("cText", "textID", txtIcon, "Texto");

        addDiv("optionsRow", "column", "cVideo");

        addDivImage("cVideo", "videoID", vidIcon, "Video");


        addDiv("optionsRow", "column", "cAudio");

        addDivImage("cAudio", "audioID", audIcon, "Audio");


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

    this.createEventListener = function() {
        document.getElementById("imageID").addEventListener("click", function() {
            console.log('Image content selected');
            closeOptionsScreen();      //TEMP FOR DEBUG
        });



        document.getElementById("closeOptionsBtn").addEventListener("click", function() {
            console.log('Close menu');
            closeOptionsScreen();      //TEMP FOR DEBUG
        });
    }
}
