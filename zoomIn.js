// Function to zoom in the text
function zoomIn() {
    var textElement = document.querySelector('.text-zoom');
    var currentFontSize = parseInt(window.getComputedStyle(textElement).fontSize);
    var newFontSize = currentFontSize * 1.1; // Increase font size by 10%
    textElement.style.fontSize = newFontSize + 'px';
}
