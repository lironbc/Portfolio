function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        } } }
window.onload = init;
var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIdx, colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor="#0a192f";
        node.style.color="#fff";
    });
    tabButtons[panelIdx].style.backgroundColor = colorCode;
    tabButtons[panelIdx].style.color = "white";
    tabPanels.forEach(function(node)
                       {
                           node.style.display = "none";
                       });
    tabPanels[panelIdx].style.display="block";
    tabPanels[panelIdx].style.backgroundColor="colorCode";
}
showPanel(0, '#009FE3');