//your JS code here. If required.

const display = document.getElementById("display");

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const id = button.id;

    if (id === "C") {
      display.value = "";
    } 
    else if (id === "back") {
      display.value = display.value.slice(0, -1);
    } 
    else if (id === "equal") {
      try {
        const expression = display.value;

        if (!expression || !/^[0-9+\-*/().\s]+$/.test(expression)) {
          throw new Error("Invalid expression");
        }

        const result = Function(
          '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
          throw new Error("Invalid result");
        }

        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    } 
    else if (id === "plus") {
      display.value += "+";
    } 
    else if (id === "divi") {
      display.value += "/";
    } 
    else if (id === "*") {
      display.value += "*";
    } 
    else if (id === "-") {
      display.value += "-";
    } 
    else if (id === "op") {
      display.value += "(";
    } 
    else if (id === "cl") {
      display.value += ")";
    } 
    else {
      display.value += button.textContent;
    }
  });
});