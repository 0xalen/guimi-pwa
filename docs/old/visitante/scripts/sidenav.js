function openMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById('main').style.marginLeft = '250px';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = "white";
} 
