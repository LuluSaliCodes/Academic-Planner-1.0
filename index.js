const form = document.getElementById("modInput");
const inputBox = document.getElementById("input-el");
const savedMods = [];

if (form) {
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
}

const outputMods = document.getElementById("mod-list");

if (outputMods) { 
    const storedMods = localStorage.getItem("myMods");
    const arrMods = JSON.parse(storedMods) || [];

    for (const item of arrMods) {
        const m = document.createElement("p");
        m.textContent = item;
        outputMods.appendChild(m);
    }
}

const modBlocks = document.getElementById("block-container");

if (modBlocks) {
    const temp = localStorage.getItem("myMods");
    const mods = JSON.parse(temp) || [];

    for (const el of mods) {
        const mod_el = document.createElement("div");

        mod_el.classList.add("dashboard-block");
        mod_el.id = 'block-${el}';
        mod_el.textContent = el;
        modBlocks.appendChild(mod_el);
    }
}