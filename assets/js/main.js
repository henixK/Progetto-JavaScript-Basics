//function to create multiple html elements
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
});


