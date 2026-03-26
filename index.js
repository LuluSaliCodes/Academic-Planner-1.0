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

