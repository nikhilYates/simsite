function openNav() {
    document.getElementById("navDiv").style.height = "100%";
    document.getElementById("wavyMenu").style.marginRight = "-50vw";
    document.getElementById("wavyMenu").style.display= "hidden";
}

function closeNav() {
    document.getElementById("navDiv").style.height = "0";
    document.getElementById("wavyMenu").style.marginRight = "0";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("wavyMenu").style.marginRight = "0";
    } else {
        document.getElementById("wavyMenu").style.marginRight = "-50vw";
        document.getElementById("wavyMenu").style.display = "hidden";
    }
    prevScrollpos = currentScrollPos;
}