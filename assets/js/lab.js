
const addElement = document.querySelector("#addItem")
const inputElement = document.querySelector("#userName")
const display = document.querySelector("#display")


function addItem() {

    const valueInput = inputElement.value
    inputElement.value = ""
    localStorage.setItem("userName", JSON.stringify(valueInput))
    renderName();
}
function deleteItem() {
    localStorage.removeItem("userName")
    addElement.textContent = "Them"
    renderName();
}

function renderName() {
    const resultElement = document.querySelector("#display")
    const userName = JSON.parse(localStorage.getItem("userName"));
    resultElement.innerHTML = userName
    if (localStorage.getItem("userName") != undefined) {
        addElement.textContent = "Sua"
    }
}
renderName()