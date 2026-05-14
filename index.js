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

    localStorage.setItem(
        "myMods",
        JSON.stringify(savedMods)
    );

    inputBox.value = "";
});

const outputMods = document.getElementById("mod-list");
const storedMods = localStorage.getItem("myMods");
const arrMods = JSON.parse(storedMods) || [];

for (const item of arrMods) {
    const m = document.createElement("li");
    m.textContent = item;
    outputMods.appendChild(m);
}