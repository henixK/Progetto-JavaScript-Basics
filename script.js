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
let jumpHeight = 0;
let jumpDuration = 0;
let jumpCount = 0;

const charmender = document.querySelector('.charmender');

plus.addEventListener('click', function () {
    count++;
    countEl.textContent = count;
    jumpCount++;
    jumpHeight += 10;
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


//function jump() {
    // change the top position of the .charmender element
    //document.querySelector('.charmender').style.top = '20%';
  
    // use the transition property to animate the top position
    // over a duration of 500ms
    //document.querySelector('.charmender').style.transition = 'top 500ms';
  //}

  //document.querySelector('button').addEventListener('click', jump);

  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.charmender').classList.add('jump');
    });
});
