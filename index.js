
const display = document.querySelector("#calcDisplay");
const clearBtn = document.querySelector("#clearButton");
const equal = document.querySelector("#equalButton");
const buttons = document.querySelectorAll(".btn");
const back = document.querySelector("#backButton")

for(let i of buttons){
    i.addEventListener("click", () => {
        let numbers = i.getAttribute("value");
        display.value += numbers;
    });
}

clearBtn.addEventListener("click", () => {
    display.value = "";
});
back.addEventListener("click", () => {
    let exp = display.value;
    display.value = exp.substring(0, exp.length - 1);
});
equal.addEventListener("click", () => {
    if(display.value == ""){
        display.value = ""
    } else {
    display.value = eval(display.value);
    }
});

