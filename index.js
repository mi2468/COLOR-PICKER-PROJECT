let colorInput = document.querySelector("#color");
let hexInput = document.querySelector("#hex");
let btn = document.querySelector("#btn");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let textarea = document.querySelector("textarea");
let range = document.getElementById('theRange');

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
    document.querySelector("textarea").style.color = color;
})

btn.addEventListener('click', () => {
    if(textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "";
    } else {
        textarea.style.fontWeight = "bold";
    }
})

btn1.addEventListener('click', () => {
    if(textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "";
    } else {
        textarea.style.fontStyle = "italic";
    }
})

btn2.addEventListener('click', () => {
    if(textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "";
    } else {
        textarea.style.textDecoration = "underline";
    }
})

range.addEventListener('input', function() {
    document.getElementById('txt').setAttribute('style', 'font-size: ' + this.value + 'px;');
});


