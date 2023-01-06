function elementFromHtml(html) {
    if (!html.trim()) {
        return null;
    }
    try {
        let template = document.createElement("template");
        template.innerHTML = html.trim();
        return template.content.firstElementChild;
    } catch (error) {
        console.error(`Error creating element from HTML string: ${error}`);
        return null;
    }
}

const buttonContainer = document.querySelector('.button-container');
const screen = document.querySelector('.screen');
const saveContainer = elementFromHtml("<div class='save-container'></div>");
const savedNumbers = elementFromHtml("<span id='saved-numbers'></span>");
const minus = elementFromHtml("<button class='minus-button'></button>");
const reset = elementFromHtml("<button class='middle-button'></button>");
const plus = elementFromHtml("<button class='plus-button'></button>");

saveContainer.innerHTML = "Saved numbers: ";


function updateSaveContainer() {
    if (window.matchMedia("(max-width: 480px)").matches) {
        saveContainer.innerHTML = "Saved: ";
    } else {
        saveContainer.innerHTML = "Saved numbers: ";
    }
}

updateSaveContainer();
window.addEventListener("resize", updateSaveContainer);


saveContainer.append(savedNumbers);
screen.append(saveContainer);
buttonContainer.append(minus, reset, plus);

let countEl = document.getElementById('counter');
let count = 0;

const plusButton = document.querySelector(".plus-button");
const charmender = document.querySelector(".charmender");


plusButton.addEventListener('click', () => {
    charmender.classList.add("bounce");
    count++;
    countEl.textContent = count;
});

let saved = '';

reset.addEventListener('click', function () {
    charmender.classList.add("bounce");
    saved += count + ', ';
    count = 0;
    countEl.textContent = count;
    savedNumbers.textContent = saved;
});

minus.addEventListener('click', function () {
    charmender.classList.add("bounce");
    count--;
    countEl.textContent = count;
});

charmender.addEventListener("animationend", () => {
    charmender.classList.remove("bounce");
});


