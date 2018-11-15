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
        addDiv("contentScreenID", "slideshow-container", "containerID");
        /***/
        addSpan("optionsRow");

        addDiv("optionsRow", "column", "cImage");

        addDivImage("cImage", "imageID", imgIcon, "Imagen");

    }

    <div id="contentScreenID" class="options" style="display:block">
        <div id="containerID" class="slideshow-container">
            <div class="mySlides fade">
              <div class="numbertext">1 / 3</div>
              <img src="images/icon_cont-texto.png" style="width:100%">
              <div class="text">Caption Text</div>
            </div>

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    </div>

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

    var addDivText = function(parentDivID, divClass, textDiv) {
        var divEl = document.getElementById(parentDivID);

        var newDivEl = document.createElement('div');

        var classAtt = document.createAttribute('class');
        classAtt.value = divClass;
        newDivEl.setAttributeNode(classAtt);

        var numberTextEl = document.createTextNode(textDiv);
        newDivEl.appendChild(numberTextEl);

        divEl.insertAdjacentElement('beforeend', newDivEl);
    }

    /* <img src="images/icon_cont-texto.png" style="width:100%">*/
    var addDivImage = function(parentDivID, imgID, imgSrc, imgAlt) {
        var divEl = document.getElementById(parentDivID);

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


