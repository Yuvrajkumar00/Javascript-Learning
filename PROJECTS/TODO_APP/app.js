// Creating State
const state = JSON.parse(localStorage.getItem("items")) ?? {
    todos: [],
    filter: "all", // completed, pending
    sort: "normal", // ascening, descending
}


// Selecting Elements
const userInput = document.querySelector("#input-box");
const addBtn = document.querySelector("#add-btn");
const taskContainer = document.querySelector("#task-list");
const totalTask = document.querySelector("#total-task");
const completedTask = document.querySelector("#completed-task");
const pendingTask = document.querySelector("#pending-task");
const filterBtn = document.querySelector("#filter-btn");
const filterOptions = document.querySelector("#filter-options");
const filterCompletedItems = document.querySelector("#filter-completed-item");
const filterPendingItems = document.querySelector("#filter-pending-item");
const sortBtn = document.querySelector("#sort-btn");
const sortOptions = document.querySelector("#sort-options");
const sortInDescending = document.querySelector("#sort-descending-order");
const sortInAscending = document.querySelector("#sort-ascending-order");


let currentEditElement;

// Add Event Listner on Add Button
addBtn.addEventListener("click", () => {
    if (addBtn.textContent === "Add") {
        addTodo(userInput.value);
    }
    else if (addBtn.textContent === "Update") {
        updateTask(userInput.value);
    }
});

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (addBtn.textContent === "Add") {
            event.preventDefault();
            addTodo(userInput.value);
        }
        else if (addBtn.textContent === "Update") {
            event.preventDefault();
            updateTask(userInput.value);
        }
    }

})


// Creating Add Todo Function
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

    // created a copy of todos
    let items = [...state.todos];

    // ----- FILTER -----
    if (state.filter === "completed") {
        items = items.filter(todo => todo.completed);
    }
    else if (state.filter === "pending") {
        items = items.filter(todo => !todo.completed);
    }

    // Update filter UI
    filterCompletedItems.checked = state.filter === "completed";
    filterPendingItems.checked = state.filter === "pending";

    // ----- SORT -----
    if (state.sort === "ascending") {
        items.sort((a,b) => a.text.localeCompare(b.text));
    }
    else if (state.sort === "descending") {
        items.sort((a,b) => b.text.localeCompare(a.text));
    }
    
    // Update sort UI
    sortInAscending.checked = state.sort === "ascending";
    sortInDescending.checked = state.sort === "descending";
    
    // Render all items
    items.forEach(todo => {
        const todoElement = createTodoElement(todo);
        taskContainer.append(todoElement);
    })

    // Render controls (counts)
    renderControls();
}


// Creating Todo Function
function createTodoElement(todo) {
    // create li tag
    const li = document.createElement("li");
    li.classList.add("task-item");

    // store todo id
    li.dataset.id = todo.id;

    // create checkbox
    const checkbox = document.createElement("input");
    checkbox.classList.add("task-checkbox");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    li.append(checkbox);

    checkbox.addEventListener("change", () => {
        toggleCheckbox(todo.id);
    });

    // create para tag
    const para = document.createElement("p");
    para.classList.add("task-text");
    para.textContent = todo.text;
    li.append(para);

    if (todo.completed) {
        para.classList.add("line-through");
    }

    // create edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn", "btn");
    editBtn.textContent = `Edit`;
    li.append(editBtn);

    editBtn.addEventListener("click", () => {
        editTask(todo.id);
    })

    // create edit button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn", "btn");
    deleteBtn.textContent = `Delete`;
    li.append(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        deleteTask(todo.id);
    })

    // Return li element
    return li;
}


// Creating Toggle Checkbox Function
function toggleCheckbox(id) {
    state.todos = state.todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    })

    saveState();
    render();
}


// Creating Delete Task Function
function deleteTask(id) {
    state.todos = state.todos.filter(todo => todo.id !== id);

    saveState();
    render();
}


// Creating Edit Task Function
function editTask(id) {
    const editedElement = state.todos.find(todo => todo.id === id);

    if (!editedElement) return;

    userInput.value = editedElement.text;
    userInput.focus();
    currentEditElement = id;

    addBtn.textContent = "Update";
}


// Creating Update Task Function
function updateTask(value) {
    const cleanValue = value.trim();

    if (!cleanValue) {
        alert("Please write a todo before update");
        userInput.focus();
        return;
    }

    state.todos = state.todos.map(todo => {
        if (todo.id === currentEditElement) {
            return { ...todo, text: cleanValue };
        }
        return todo;
    })

    addBtn.textContent = "Add";
    userInput.value = "";
    currentEditElement = null;
    userInput.focus();

    saveState();
    render();
}


// Creating Render Controls Function
function renderControls() {
    countTotalTask();
    countCompletedTask();
    countPendingTask();
}


// Creating Total Task Function
function countTotalTask() {
    totalTask.textContent = state.todos.length;
}


// Creating Completed Task Function
function countCompletedTask() {
    completedTask.textContent = state.todos.filter(todo => todo.completed).length;
}


// Creating Pending Task Function
function countPendingTask() {
    pendingTask.textContent = state.todos.filter(todo => !todo.completed).length;
}


// Add Event Listner on Filter Button
filterBtn.addEventListener("click", () => {
    filterOptions.classList.toggle("hide-filter-options");
})


// Add Event Listner on Completed Item Checkbox
filterCompletedItems.addEventListener("change", () => {
    if(filterCompletedItems.checked) {
        state.filter = "completed";
    }
    else {
        state.filter = "all";
    }

    saveState();
    render();
});


// Add Event Listner on Pending Item Checkbox
filterPendingItems.addEventListener("change", () => {
    if(filterPendingItems.checked) {
        state.filter = "pending";
    }
    else {
        state.filter = "all";
    }

    saveState();
    render();
})


// Add Event Listner on Sort Button
sortBtn.addEventListener("click", () => {
    sortOptions.classList.toggle("hide-sort-options")
})


// Add Event Listner on Ascending Order Checkbox
sortInAscending.addEventListener("change", () => {
    if (sortInAscending.checked) {
        state.sort = "ascending";
    }
    else {
        state.sort = "normal";
    }

    saveState();
    render();
})


// Add Event Listner on Descending Order Checkbox
sortInDescending.addEventListener("change", () => {
    if (sortInDescending.checked) {
        state.sort = "descending";
    }
    else {
        state.sort = "normal";
    }

    saveState();
    render();
})

// Add Even Listner On Window
window.addEventListener("DOMContentLoaded", render);