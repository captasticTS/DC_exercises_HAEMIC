let toDoList = document.querySelector(".ToDoList");
let toDoInput = document.querySelector(".ToDoInput")
let chores = [];

function addChore(chore) {
    <
        if (toDoInput.value) {
        let choreText;
        if (chore) {
            choreText = chore;
        }
        else {
            choreText = toDoInput.value;
            toDoInput.value = "";
        }

        let listElement = document.createElement("li");

        let text = document.createElement("p");
        let deleteButton = document.createElement("button");

        text.innerHTML = choreText;

        deleteButton.onclick = () => toDoList.removeChild(listElement);
        deleteButton.classList.add("deleteButton");
        deleteButton.textContent = "X";

        listElement.appendChild(text);
        listElement.appendChild(deleteButton);
        listElement.classList.add("listElement");

        toDoList.appendChild(listElement);
    }
}

function deleteEverything() {
    let allEntries = toDoList.childNodes;

    while (allEntries.length > 0) {
        allEntries[0].remove();
    }
}