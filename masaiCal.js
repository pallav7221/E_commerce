var buttons = document.querySelector(".buttons");
var result = document.getElementById("inputBox");

// var buttonValue = document.querySelectorAll("button");
var buttonValue = buttons.querySelectorAll("button");

for (var i = 0; i < buttonValue.length; i++) {
    buttonValue[i].addEventListener("click", function () {
        if (this.innerHTML == "=") {
            result.value = eval(result.value);
        }
        else if (this.innerHTML == "c") {
            result.value = "";
        }
        else if (this.innerHTML == "x") {
            result.value += "*";
        }
        else {
            result.value += this.innerHTML;
        }


    })
}