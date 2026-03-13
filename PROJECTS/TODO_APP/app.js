// Creating State
const state = JSON.parse(localStorage.getItem("items")) ?? {
    todos: [],
    filter: "all", // completed, pending
    sort: "asc", // des
}


// Selecting Elements
const userInput = document.querySelector("#input-box");
const addBtn = document.querySelector("#add-btn");
const taskContainer = document.querySelector("#task-list");


// Add Event Listner on Add Button
addBtn.addEventListener("click", () => {
    addTodo(userInput.value);
});

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTodo(userInput.value);
    }
    
})


// Creating Set Todo Function
function addTodo(value) {
    const cleanValue = value.trim();

    if (!cleanValue) {
        alert("Please write a todo first");
        userInput.focus();
        return;
    }

    state.todos.push(
        {
            id: Date.now(),
            text: cleanValue,
            completed: false,
        }
    )

    userInput.value = "";
    userInput.focus();

    saveState();
    render();
}


// Creating Save Todo Function
function saveState() {
    localStorage.setItem("items", JSON.stringify(state));
}


// Creating Render Function
function render() {
    taskContainer.innerHTML = "";

    state.todos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        taskContainer.append(todoElement);
    })
}


// Creating Todo Function
function createTodoElement(todo) {
    // create li tag
    const li = document.createElement("li");
    li.classList.add("task-item");

    // store todo id
    li.datasetid = todo.id;

    // create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.checked = todo.completed;
    li.append(checkbox);

    // create para tag
    const para = document.createElement("p");
    para.classList.add("task-text");
    para.textContent = todo.text;
    li.append(para);

    // create edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn", "btn");
    editBtn.textContent = `Edit`;
    li.append(editBtn);

    // create edit button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn", "btn");
    deleteBtn.textContent = `Delete`;
    li.append(deleteBtn);

    // Return li element
    return li;
}


// Add Even Listner On Window
window.addEventListener("DOMContentLoaded", render);