var container = document.getElementById("container");
container.style.backgroundColor = "gray";
container.style.display = 'inline-block';
container.style.marginLeft = "30%"

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
    console.log(this);
    this.style.backgroundColor = "red";
}