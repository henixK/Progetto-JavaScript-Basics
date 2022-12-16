function elementFromHtml(html) {
    let template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

let tamagotchi = elementFromHtml("<div class='tamagotchi'><div>");

let loop = elementFromHtml("<div class='loop'></div>");
let insideLoop = elementFromHtml("<div class='insideLoop'></div>");

let screen = elementFromHtml("<div class='screen'></div>");
let innerScreen = elementFromHtml("<div class='innerScreen'></div>");
let counter = elementFromHtml("<span id='counter'>0</span>");

let triangle1 = elementFromHtml("<div class='crack crackTop'></div>");
let triangle2 = elementFromHtml("<div class='crack crackTop-Left'></div>");
let triangle3 = elementFromHtml("<div class='crack crackTop-Right'></div>");
let triangle4 = elementFromHtml("<div class='crack crackLeft-Mid'></div>");
let triangle5 = elementFromHtml("<div class='crack crackLeft-Bot'></div>");
let triangle6 = elementFromHtml("<div class='crack crackBot-Mid'></div>");
let triangle7 = elementFromHtml("<div class='crack crackBot-Right'></div>");
let triangle8 = elementFromHtml("<div class='crack crackRight-Mid'></div>");


let line1 = elementFromHtml("<div class='crack crack-line1'></div>");
let line2 = elementFromHtml("<div class='crack crack-line2'></div>");
let tamagotchiShadow = elementFromHtml("<div class='shadow'></div>");
let button = elementFromHtml("<div class='button-container'></div>");
let plus = elementFromHtml("<button class='plus-button'></button>");
let reset = elementFromHtml("<button class='reset-button'></button>");
let minus = elementFromHtml("<button class='minus-button'></button>");

document.body.append(tamagotchi);
loop.appendChild(insideLoop);
screen.append(
    innerScreen,
    triangle1,
    triangle2,
    triangle3,
    triangle4,
    line1,
    triangle5,
    triangle6,  
    triangle7,
    triangle8,
    line2
);
innerScreen.append(counter);
button.append(plus, reset, minus);
tamagotchi.append(loop, screen, button, tamagotchiShadow);

let countEl = document.getElementById("counter");

// Declare num with the let keyword to avoid creating a global variable
let num = 0;

plus.addEventListener("click", aumenta);
reset.addEventListener("click", resetNum);
minus.addEventListener("click", diminuisci);

function aumenta() {
      // Check if the message "Reset or save the value?" is being displayed
    if (countEl.textContent !== "Reset or save the value?") {
    // Increment num by 1 if the message is not being displayed
    num += 1;
    countEl.textContent = num;
    } 
}

function resetNum() {
    countEl.textContent = "Reset or save the value?";

    // Remove event listeners from the plus-button and minus-button elements
    document.querySelector(".plus-button").removeEventListener("click", saveValue);
    document.querySelector(".minus-button").removeEventListener("click", resetValue);

    document.querySelector(".reset-button").addEventListener("click", resetValue);
    document.querySelector(".plus-button").addEventListener("click", saveValue);
    document.querySelector(".minus-button").addEventListener("click", resetValue);
}

function resetValue() {
    num = 0;
    countEl.textContent = num;
}

function saveValue() {
    // Check if the message "Reset or save the value?" is being displayed
    if (countEl.textContent !== "Reset or save the value?") {
        let savedNum = document.getElementById("savedEl");
        savedNum.textContent = num;
    }
    }

function diminuisci() {
  // Check if the message "Reset or save the value?" is being displayed
    if (countEl.textContent !== "Reset or save the value?") {
    // Decrement num by 1 if the message is not being
    num -=1;
    countEl.textContent = num;
}
}