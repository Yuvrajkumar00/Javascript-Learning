let userInput = document.querySelector("#input_box");
let addBtn = document.querySelector("#add_btn");
let taskContainer = document.querySelector("#todo_container");

let currentUpdId;

// Adding event listner on addBtn
addBtn.addEventListener("click", () => {
    if (currentUpdId) {
        updateTodos(currentUpdId);
    } else {
        saveToDoInLocalStorage();
    }
});


// Creating Save todo item in localstorage function
function saveToDoInLocalStorage() {
    const inputValue = userInput.value.trim();

    // Get todo item from localstorage
    let getToDoItemInLocalStorage = getTodos();

    if (inputValue !== "") {

    // setting properties 
    getToDoItemInLocalStorage.push({
        id: Date.now(),
        isCompleted: false,
        inputValue: inputValue
    });

    // Sava todo item in localstorage
    setTodos(getToDoItemInLocalStorage);

    // Reset user input value
    userInput.value = "";
    userInput.focus();

    // Calling Rendering function
    renderingTodo();

    }
    else {
        // Give message to user when empty adding
        alert("Please!! Write TODO first before adding.");
    }
    
}


// Rendering ToDO Item on Display
function renderingTodo() {

    taskContainer.innerHTML = "";

    const todos = getTodos();

    todos.forEach((eachItem) => {
        creatingTodoItems(eachItem);
    });

}


// Creating TODO items
function creatingTodoItems(eachItem) {

    // Creating li tag
    let li = document.createElement("li");
    li.setAttribute("class", "list_container");

    // Creating checkbox 
    let checkbox = document.createElement("div");
    checkbox.setAttribute("class", "checkbox");
    checkbox.addEventListener("click", () => {
        toggleComplete(eachItem.id);            
    })

    li.append(checkbox);

    // Creating para tag
    let para = document.createElement("p");
    para.setAttribute("class", "todo_task");
    para.innerText = `${eachItem.inputValue}`;

    if (eachItem.isCompleted) {
        checkbox.innerText = "✅";
        para.style.textDecoration = "line-through";
    }

    li.append(para);

    // Creating edit button
    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit_btn");
    editBtn.innerText = "Edit";
    li.append(editBtn);

    // add eventlistner on editBtn
    editBtn.addEventListener("click", () => {
        editTask(eachItem.id);
    });

    // Creating delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete_btn");
    deleteBtn.innerText = "Delete";
    li.append(deleteBtn);

    // add eventlistner on deleteBtn
    deleteBtn.addEventListener("click", () => {
        deleteTask(eachItem.id);
    });

    // Appending li tag inside ul
    taskContainer.append(li);
}


// Checking task is completed or not
function toggleComplete(id) {
    // Getting data from localstorage
    let todos = getTodos();

    // Update data
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
    });

    // Save data in localstorage
    setTodos(todos);

    // Rendering new updated data
    renderingTodo();
}


// Creating a delete task function
function deleteTask(id) {
    // getting data from localstorage
    let todos = getTodos();
    
    // remove todo items
    todos = todos.filter((todo) => todo.id !== id);

    // save data in localstorage
    setTodos(todos);

    // rendering new data
    renderingTodo();

}


// Creating a edit task function
function editTask(id) {
    // Getting data from localstorage
    let todos = getTodos();

    let todo = todos.find(todo => todo.id === id);

    if (todo) {
        userInput.value = todo.inputValue;
        addBtn.innerText = "Update";
        userInput.focus();
        currentUpdId = todo.id;
    }
} 


// Update userinput value in localstorage
function updateTodos(id) {
    const value = userInput.value.trim();

    if (!value) {
        // Give message to user when empty adding
        alert("Please!! Write TODO first before adding.");
    }
    else {
        // Getting data from localstorage
        let todos = getTodos();

        // Update data
        todos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, inputValue: value};
            }
            return todo;
        })

        // Setting data in localstorage
        setTodos(todos);

        // reset value
        currentUpdId = null;
        userInput.value = "";

        // set value
        addBtn.innerText = "Add";
        userInput.focus();

        // Rendering new data
        renderingTodo();
    }
}


// Getting items from localstorage
function getTodos() {
    return JSON.parse(localStorage.getItem("todoItems")) ?? [];
}

// Setting items in localstorage
function setTodos(todos) {
    localStorage.setItem("todoItems", JSON.stringify(todos));
}


// After refereshing each time it loaded all items
document.addEventListener("DOMContentLoaded", () => {
    renderingTodo();
}); 