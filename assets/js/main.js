//function to create multiple html elements
function createNewElement(tag, className, parent) {
    const element = document.createElement(tag);
    element.classList.add(className);
    parent.appendChild(element);
    return element;
}

const pokeball = document.querySelector(".pokeball")

//Creating save section
const screen = document.querySelector(".screen");
const saveContainer = createNewElement("div", "save-container", screen);
const savedNumbers = createNewElement("span", "saved-numbers", saveContainer);
savedNumbers.textContent = "Saved numbers: ";

// Creating div wrapper for buttons 
const buttonWrapper = createNewElement("div", "button-wrapper", pokeball);

//Creating main buttons
const buttonContainer = createNewElement("div", "button-container", buttonWrapper)
createNewElement("button", "decrement-button", buttonContainer);
createNewElement("button", "resetSave-button", buttonContainer);
createNewElement("button", "increment-button", buttonContainer);

//Creating side buttons
const buttonSideContainer = createNewElement("div", "button-side-container", buttonWrapper);
createNewElement("button", "modal", buttonSideContainer).textContent= "?";
createNewElement("button", "delete-button", buttonSideContainer).textContent= "del";

//Creating the Popup instructions
const modalWindow = createNewElement("div", "modal-window", screen);
const closeButton = createNewElement("button", "close-button", modalWindow);
closeButton.textContent = "x";
const instructions = createNewElement("p", null, modalWindow);
instructions.textContent = "Instructions: This is a simple counting application. Use the button on the right to increment the counter, the one on the left to decrement it, and the one in the center to save the current count and reset the counter. The saved numbers will be displayed in the 'Saved numbers' section. Use the 'delete' button to remove all saved numbers.";

let countEl = document.getElementById("counter");
let count = 0;
let saved = '';
const charmender = document.querySelector(".charmender");

//Event Delegation for buttons
buttonWrapper.addEventListener("click", event => {
    const targetClass = event.target.classList;
    if (targetClass.contains("decrement-button")) {
        count--;
    } else if (targetClass.contains("resetSave-button")) {
        saved += count + ', ';
        count = 0;
    } else if (targetClass.contains("increment-button")) {
        count++;
    } else if (targetClass.contains("modal")) {
        modalWindow.classList.toggle("show-modal");
    } else if (targetClass.contains("delete-button")) {
        saved = '';
    }
    charmender.classList.add("bounce");
    countEl.textContent = count;
    savedNumbers.textContent = "Saved numbers: " + saved;
});

closeButton.addEventListener("click", function () {
    modalWindow.classList.toggle("show-modal");
});

charmender.addEventListener("animationend", () => {
    charmender.classList.remove("bounce");
});

// Function to update the save container based on the screen size
function updateSaveContainer() {
    if (window.matchMedia("(max-width: 480px)").matches) {
        saveContainer.innerHTML = "Saved: ";
    } else {
        saveContainer.innerHTML = "Saved numbers: ";
    }
}

updateSaveContainer();
window.addEventListener("resize", updateSaveContainer);





















/* 


// Funzione per creare un nuovo elemento HTML e aggiungerlo a un nodo genitore
function createNewElement(tag, className, parent) {
    const element = document.createElement(tag);
    element.classList.add(className);
    parent.appendChild(element);
    return element;
}


// Creazione sezione salvataggio
const screen = document.querySelector(".screen");
const saveContainer = createNewElement("div", "save-container", screen);
createNewElement("span", "saved-numbers", saveContainer);

// Creazione pulsanti principali
const buttonContainer = document.querySelector(".button-container");
createNewElement("button", "minus-button", buttonContainer);
createNewElement("button", "resetSave-button", buttonContainer);
createNewElement("button", "plus-button", buttonContainer);

// Creazione pulsanti laterali
const buttonSideContainer = createNewElement("div", "button-side-container", buttonsContainer);
createNewElement("button", "modal", buttonSideContainer);
createNewElement("button", "delete-button", buttonSideContainer);

// Creazione wrapper bottoni
const buttonMain = createNewElement("div", null, pokeball)

// Creazione delle istruzioni Popup
const modalWindow = createNewElement("div", "modal-window", screen);
const closeButton = createNewElement("button", "close-button", modalWindow);
const instructions = createNewElement("p", null, modalWindow);
instructions.textContent = "Istruzioni:\\Questo è un'applicazione di conteggio semplice.\\Usa il pulsante a destra per incrementare il contatore, quello a sinistra per decrementarlo e quello al centro per salvare il conteggio attuale e azzerare il contatore.\\I numeri salvati saranno visualizzati nella sezione 'Saved numbers'.\\Usa il pulsante 'delete' per eliminare tutti i numeri salvati.";


let countEl = document.getElementById("counter");
let count = 0;
let saved = '';
const charmender = document.querySelector(".charmender");

// Aggiunta listener agli eventi con Event Delegation
screen.addEventListener("click", event => {
    const targetClass = event.target.classList;
    if (targetClass.contains("minus-button")) {
        count--;
    } else if (targetClass.contains("resetSave-button")) {
        saved += count + ', ';
        count = 0;
    } else if (targetClass.contains("plus-button")) {
        count++;
    } else if (targetClass.contains("modal")) {
        modalWindow.classList.toggle("show-modal");
    } else if (targetClass.contains("delete-button")) {
        saved = '';
    }
    charmender.classList.add("bounce");
    countEl.textContent = count;
    saveContainer.querySelector(".saved-numbers").textContent = saved;
});

closeButton.addEventListener("click", function () {
    modalWindow.classList.toggle("show-modal");
});

charmender.addEventListener("animationend", () => {
    charmender.classList.remove("bounce");
});

// Funzione per aggiornare la sezione salvataggio in base alla dimensione dello schermo
function updateSaveContainer() {
    if (window.matchMedia("(max-width: 480px)").matches) {
        saveContainer.innerHTML = "Salvati: ";
    } else {
        saveContainer.innerHTML = "Numeri salvati: ";
    }
}

updateSaveContainer();
window.addEventListener("resize", updateSaveContainer); */

/* //function to create multiple html elements
function createHtmlElements(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild
}

//Creating save section
const screen = document.querySelector(".screen");
const saveContainer = createHtmlElements("<div class='save-container '>Saved numbers: </div>");
const savedNumbers = createHtmlElements("<span id='saved-numbers'></span>");

//Creating main buttons
const buttonContainer = document.querySelector(".button-container");
const decrement = createHtmlElements("<button class='minus-button'></button>");
const resetSaveDelete = createHtmlElements("<button class='resetSave-button'></button>");
const increment = createHtmlElements("<button class='plus-button'></button>");

//Creating side buttons
const buttonSideContainer = createHtmlElements("<div class='button-side-container parent'></div>");
const deleteButton = createHtmlElements("<button class='delete-button'>Del</button>");
const modalPopup = createHtmlElements("<button class='modal'>?</button>");

//Creating the Popup instructions
const modalWindow = createHtmlElements("<div class='modal-window'></div>");
const instructions = createHtmlElements("<p>Instructions:<br> This is a simple counter app.<br> Use the button on the right to increment the counter, the button on the left to decrement the counter, and the middle button to save the current count and reset the counter to zero.<br> The saved numbers will be displayed in the saved numbers.<br> Use the delete button to delete all saved numbers.</p>");
const closeButton = createHtmlElements("<button class='close-button'>&times;</button>");

// Function to update the save container based on the screen size
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
screen.append(saveContainer, buttonSideContainer);
buttonSideContainer.append(modalPopup, deleteButton);
buttonContainer.append(decrement, resetSaveDelete, increment);
modalWindow.append(closeButton, instructions);
screen.append(modalWindow);


let countEl = document.getElementById("counter");
let count = 0;
let saved = '';
const charmender = document.querySelector(".charmender");
const incrementButton = document.querySelector(".plus-button");
const parentElements = document.querySelectorAll(".parent");


parentElements.forEach(parent => {
    parent.addEventListener("click", event => {
        const targetClass = event.target.classList;
        if (targetClass.contains("minus-button")) {
            count--;
        } else if (targetClass.contains("resetSave-button")) {
            saved += count + ', ';
            count = 0;
        } else if (targetClass.contains("plus-button")) {
            count++;
        } else if (targetClass.contains("modal")) {
            modalWindow.classList.toggle("show-modal");
        } else if (targetClass.contains("delete-button")) {
            saved = '';
        }
        charmender.classList.add("bounce");
        countEl.textContent = count;
        savedNumbers.textContent = saved;
    });
});

closeButton.addEventListener("click", function () {
    modalWindow.classList.toggle("show-modal");
});

charmender.addEventListener("animationend", () => {
    charmender.classList.remove("bounce");
}); */
