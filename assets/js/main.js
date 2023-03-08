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

