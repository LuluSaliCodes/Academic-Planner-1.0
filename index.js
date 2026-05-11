let moduleEl = document.getElementById("module-el")
let numModules = 0
let arrModules = []

function addModuleToList() {
    let module = moduleEl.value
    let moduleList = document.getElementById("module-list")
    let newListItem = document.createElement("li")

    newListItem.appendChild(document.createTextNode(module))
    moduleList.appendChild(newListItem)
    numModules++
    arrModules.push(module)
    
    document.getElementById("module-el").value = ""
}

function createModuleNotes() {
    let i
    let displayEl = document.getElementById("display-el")
    for (i = 0; i < numModules; i++) {
        let newMod = document.createElement("a")
        displayEl.appendChild(newMod)
    }
}

