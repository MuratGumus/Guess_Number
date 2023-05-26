const buton = document.querySelector(".btn");
const input = document.querySelector(".input");
const sonuc = document.querySelector(".sonuc");
const par = document.querySelector("p");
const audio = document.querySelector("audio");
const random = Math.floor(Math.random() * 100) + 1;
console.log(random);

let counter = 7;
buton.addEventListener("click", () => {
    console.log(counter);
    audio.play();

    if (counter > 0 && input.value > 0 && input.value < 100) {
        console.log(input.value);
        console.log(random);
        if (input.value < random) {
            sonuc.value = "Up";
            input.value = "";
        }
        if (input.value > random) {
            sonuc.value = "Down";
            input.value = "";
        }
        if (input.value == random) {
            sonuc.value = "Congratulations";
        }
        counter--;
    } else if (input.value < 0 || input.value > 100) {
        par.innerHTML = `Please enter a number between 0 100`;
    } else {
        par.innerHTML = `You have no rights to try`;
        sonuc.value = "Game Over ";
        return (input.value = input.value);
    }

    console.log(counter);
    par.innerHTML = `You have ${counter} right `;
    input.focus();
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        buton.click();
    }
});

window.addEventListener("load", (e) => {
    input.focus();
});




