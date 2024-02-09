let boxes = document.getElementsByClassName("box");
let button = document.getElementById("btn");

let getBgColor = () => {
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
};

button.addEventListener("click", () => {
    Array.from(boxes).forEach((val, idx) => {
        val.style.backgroundColor = getBgColor();
    });
});