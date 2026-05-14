const form = document.getElementById("modInput");
const inputBox = document.getElementById("input-el");

const savedMods = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = inputBox.value.trim();

    // Ignore empty input
    if (value === "") {
        return;
    }

    // Save the input
    savedMods.push(value);
    console.log(savedMods);
    inputBox.value = "";
});