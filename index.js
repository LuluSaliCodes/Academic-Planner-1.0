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

const db_container = document.getElementById("block-container");

if (db_container) {
    const temp = localStorage.getItem("myMods");
    const mods = JSON.parse(temp) || [];

    for (const el of mods) {
        const modCard = document.createElement("div");

        modCard.classList.add("dashboard-card");
        modCard.id = 'block-${el}';

        //Heading Top Section
        const heading = document.createElement("h3");
        heading.textContent = el;
        modCard.appendChild(heading);

        //List Middle Section
        const listSection = document.createElement("div");
        listSection.classList.add("list-section");
        modCard.appendChild(listSection);

        //Input and Button Section - Bottom
        const addTasks = document.createElement("form");
        addTasks.classList.add("task-form");
        addTasks.id = 'task';

        const input = document.createElement("input");
        addTasks.appendChild(input);

        task.addEventListener("submit", (event) => {
            event.preventDefault();
            const value = inputBox.value.trim();

            if (value === "") {
                return;
            }
        });

        modCard.appendChild(addTasks)
        db_container.appendChild(modCard);
    }
}