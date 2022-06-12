let count = 0;
let saveElement = document.getElementById("save-element");
let countElement = document.getElementById("count-element");

function increment() {
    count += 1;
    countElement.textContent = `${count} 🐌`;
}

function save() {
    let countString = `${count} 🐌 - `;
    saveElement.textContent += countString;
    countElement.textContent = 0;
    count = 0;
}

