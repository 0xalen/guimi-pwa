function ContentScreen(cList, mainApp, cManager) {
    var contentList = cList;
    var slideIndex = 1;
    var app = mainApp;
    var cm = cManager;

    this.displayContentScreen = function() {
        showGallery();
        openContentScreen();
        createEventListeners();
        showSlides(slideIndex);
    }

    this.closeContentScreen = function() {
        //console.log("Close content screen");              //DEBUG
        closeContentScreen();
    }

    var closeContentScreen = function() {
        console.log("Close content screen (private)");
        var cScreenDiv = document.getElementById("contentScreenID");
        //console.log("Child to remove: " + cScreenDiv.childNodes[0]);        //DEBUG
        while (cScreenDiv.childNodes[0]) {
            cScreenDiv.removeChild(cScreenDiv.childNodes[0]);
        }
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
        addSpanClose("contentScreenID");
        addDiv("contentScreenID", "slideshow-container w3-mobile w3-row", "containerID", " ");
        var cCounter = 0;
        var contentDivID = "contentDiv" + cCounter;
        var imageID = "imageID" + cCounter;
        console.log("cCounter: " + cCounter);
        console.log("cList: " + contentList.length);
        var counterText = cCounter + 1 + " / " + contentList.length;
        for (cCounter = 0; cCounter < contentList.length; cCounter++) {
            contentID = "content" + cCounter;
            addDiv("containerID", "contentSlides fade", contentID, " ");

            counterText = cCounter + 1 + " / " + contentList.length;
            addDivText(contentID, "numbertext", counterText);

            imageID = "imageID" + cCounter;
            addDivImage(contentID, imageID, contentList[cCounter].getContentURL(),
                        contentList[cCounter].getContentName());

            addDivText(contentID, "text", contentList[cCounter].getContentName());
        }
        addA("containerID", "prev", '❮');
        addA("containerID", "next", '❯');

        addDiv("containerID", " ", "dotID", "text-align:center");
        cCounter = 0;
        var dotID = "dotID" + cCounter;
        for (cCounter = 0; cCounter < contentList.length; cCounter++) {
            dotID = "dotID" + cCounter;
            addSpan("dotID", dotID);
        }
    }

    var addDiv = function(parentDivID, divClass, newDivID, divStyle) {
        var divEl = document.getElementById(parentDivID);

        var newDivEl = document.createElement('div');

        var idAtt = document.createAttribute('id');
        idAtt.value = newDivID;
        newDivEl.setAttributeNode(idAtt);

        var classAtt = document.createAttribute('class');
        classAtt.value = divClass;
        newDivEl.setAttributeNode(classAtt);

        var styleAtt = document.createAttribute('style');
        styleAtt.value = divStyle;
        newDivEl.setAttributeNode(styleAtt);

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

    var addSpan = function(parentDivID, spanID) {
        var divEl = document.getElementById(parentDivID);

        var spanEl = document.createElement('span');

        var idAtt = document.createAttribute('id');
        idAtt.value = spanID;
        spanEl.setAttributeNode(idAtt);

        var classAtt = document.createAttribute('class');
        classAtt.value = "dot";
        spanEl.setAttributeNode(classAtt);

        var onclickAtt = document.createAttribute('onclick');
        onclickAtt.value = "";
        spanEl.setAttributeNode(onclickAtt);

        divEl.insertAdjacentElement('beforeend', spanEl);
    }

    var addSpanClose = function(parentDivID) {
        var divEl = document.getElementById(parentDivID);

        var spanEl = document.createElement('span');

        var idAtt = document.createAttribute('id');
        idAtt.value = "closeContentBtn";
        spanEl.setAttributeNode(idAtt);

        var classAtt = document.createAttribute('class');
        classAtt.value = "closebtn";
        spanEl.setAttributeNode(classAtt);

        var onclickAtt = document.createAttribute('onclick');
        onclickAtt.value = "";
        spanEl.setAttributeNode(onclickAtt);

        var closeBtnEl = document.createTextNode('×');
        spanEl.appendChild(closeBtnEl);

        divEl.insertAdjacentElement('beforeend', spanEl);
    }

    var createEventListeners = function() {
        document.getElementById("prev").addEventListener("click", function() {
            console.log('Previous content');
            plusSlides(-1);      //TEMP FOR DEBUG
        });
        document.getElementById("next").addEventListener("click", function() {
            console.log('Next content');
            plusSlides(1);      //TEMP FOR DEBUG
        });

        var cCounter = 0;
        var dotID = "dotID" + cCounter;
        for (cCounter = 0; cCounter < contentList.length; cCounter++) {

            document.getElementById(dotID).addEventListener("click", function() {
                console.log(dotID + ' content selected');
                currentSlide(cCounter);
            });
        }

        document.getElementById("closeContentBtn").addEventListener("click", function() {
            console.log('Close content screen');
            app.destroyContent();
            closeContentScreen();      //TEMP FOR DEBUG
        });
    }
    /* SLIDER METHODS*/
    var plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    var currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    var showSlides = function(n) {
        var i;
        var slides = document.getElementsByClassName("contentSlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";

        console.log("slideIndex: " + slideIndex);
        if (typeof contentList[slideIndex - 1] !== 'undefined'){
            cm.displayContent(contentList[slideIndex - 1].getContentName(), contentList[slideIndex - 1].getContentURL());
        }
    }

}


