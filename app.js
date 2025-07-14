
// bulb on and off functionality

// selection
let turnOn = document.querySelector(".turn_on");
let turnOff = document.querySelector(".turn_off");

let image = document.querySelector('img');

// functionality
turnOn.addEventListener("click", function () {
    image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
});

turnOff.addEventListener("click", function () {
    image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
});
