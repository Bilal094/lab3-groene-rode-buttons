var container = document.getElementById("container");
container.style.backgroundColor = "gray";
container.style.display = 'inline-block';
container.style.marginLeft = "30%"

var counter = 0;

for (i = 1; i <= 30; i++) {
    var numberButton = document.createElement("button");
    numberButton.style.backgroundColor = "green"
    numberButton.innerText = i;
    numberButton.style.fontSize = "50px"
    numberButton.style.margin = "5px"
    numberButton.style.height = "100px"
    numberButton.style.width = "100px"

    if (i % 5 == 1) {
        var lineBreak = document.createElement("br");
        container.appendChild(lineBreak);
    }

    container.appendChild(numberButton);

    numberButton.addEventListener("click", changeColor);
}

function changeColor () {
    const colors = ["green","red", "black"];
    var colorIndex = colors.indexOf(this.style.backgroundColor);
    var index = colorIndex;
    this.style.backgroundColor = colors[colorIndex + 1];
    index++;

    if (index % (colors.length) === 0) {
        this.remove();
        index = 0;
    }
}