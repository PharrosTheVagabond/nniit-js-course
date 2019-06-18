function onTextColorButtonClick(elem, color){
    elem.style.color = color;
}

const textElement = document.getElementById("text");

const redButtonElement = document.getElementById("redTextButton");
redButtonElement.addEventListener("click", function() {onTextColorButtonClick(textElement, "Red")});

const blueButtonElement = document.getElementById("blueTextButton");
blueButtonElement.addEventListener("click", function() {onTextColorButtonClick(textElement, "Blue")});