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

saveContainer.innerHTML = "Saved numbers: "

saveContainer.append(savedNumbers);
screen.append(saveContainer);
buttonContainer.append(minus, reset, plus);

let countEl = document.getElementById('counter');
let count = 0;

plus.addEventListener('click', function () {
    count++;
    countEl.textContent = count;
});

let saved = '';

reset.addEventListener('click', function () {
    saved += count + ', ';
    count = 0;
    countEl.textContent = count;
    savedNumbers.textContent = saved
});

minus.addEventListener('click', function () {
    count--;
    countEl.textContent = count;
});
