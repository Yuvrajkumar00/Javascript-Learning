let userInput = document.querySelector("#input_box");
let addBtn = document.querySelector("#add_btn");
let taskContainer = document.querySelector("#todo_container");
let filterBtn = document.querySelector("#filter_button");
let filterCompCheckbox = document.querySelector("#filterCompleted");
let filterPendCheckbox = document.querySelector("#filterPending");
let sortBtn = document.querySelector("#sort_button");


// Get data from localstorage globally
let todos = JSON.parse(localStorage.getItem("tasks")) ?? [];

// Current edit element id
let currentEditElementId;

let currentFilter = "all"; // "all" | "completed" | "pending"
console.log(currentFilter);


// Adding event listner on add button
addBtn.addEventListener("click", () => {
  if (!currentEditElementId) {
    if (userInput.value) {
      addTodo(userInput.value);
      saveToLocalStorage();
      renderTodo();

      userInput.value = "";
      userInput.focus();
    } else {
      alert("Please!! Write a Todo before empty adding.");
    }
  } else {
    updateTask();
  }
});


// Create a function which is add todo in todos array first
function addTodo(value) {
  // Create data
  let data = {
    id: Date.now(),
    userValue: value,
    isCompleted: false,
  };

  // Push data in todos arr
  todos.push(data);
}

// Create a function which is save data in localstorage
function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(todos));
}

// Creating render function which is help in displaying any changes in UI or DATA
function renderTodo() {
  taskContainer.innerHTML = "";

  if (currentFilter === "completed") {
    let todo = todos.filter((todo) => todo.isCompleted);

    todo.forEach(item => {
      creatingTodoElement(item);
    })
  } 
  else if (currentFilter === "pending") {
    let todo = todos.filter((todo) => !todo.isCompleted);

    todo.forEach(item => {
      creatingTodoElement(item);
    })
  } 
  else if (currentFilter === "all") {
    todos.forEach((todo) => {
      creatingTodoElement(todo);
    });
  }
}


// Creating creatingTodo function which is help in creating todo task
function creatingTodoElement(eachtask) {
  // Create li tag
  let li = document.createElement("li");
  li.classList.add("list_container");

  // Create checkbox
  let checkbox = document.createElement("div");
  checkbox.classList.add("checkbox");
  if (eachtask.isCompleted) {
    checkbox.innerText = "✅";
  }
  li.append(checkbox);
  // Adding event listner
  checkbox.addEventListener("click", () => {
    toggleCheckbox(eachtask.id);
  });

  // Create para tag
  let para = document.createElement("p");
  para.classList.add("todo_task");
  para.innerText = `${eachtask.userValue}`;
  if (eachtask.isCompleted) {
    para.style.textDecoration = "line-through";
  }
  li.append(para);

  // Create Edit button
  let editBtn = document.createElement("button");
  editBtn.classList.add("edit_btn");
  editBtn.innerText = "Edit";
  li.append(editBtn);
  // Adding event listner
  editBtn.addEventListener("click", () => {
    editTask(eachtask.id);
  });

  // Create Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete_btn");
  deleteBtn.innerText = "Delete";
  li.append(deleteBtn);
  // Adding event listner
  deleteBtn.addEventListener("click", () => {
    deleteTask(eachtask.id);
  });

  // Appending li inside taskcontainer
  taskContainer.append(li);
}

// Creating a toggle function for checkbox for checking task is completed or not
function toggleCheckbox(id) {
  // Changing toggle mode
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, isCompleted: !todo.isCompleted };
    }
    return todo;
  });

  // Save data in localstorage
  saveToLocalStorage();

  // After saving data calling renderTodo function for displaying current UI
  renderTodo();
}

// Creating a edit function which is edit each element
function editTask(id) {
  let todo = todos.find((todo) => todo.id === id);
  userInput.value = todo.userValue;
  addBtn.innerText = "Update";
  currentEditElementId = id;

  // Set on userinput autofocus
  userInput.focus();
}


// Creating a update function which is update each element
function updateTask() {
  todos = todos.map((todo) => {
    if (todo.id === currentEditElementId) {
      return { ...todo, userValue: userInput.value };
    }
    return todo;
  })

  // Save data in localstorage
  saveToLocalStorage();

  // After saving data calling renderTodo function for displaying current UI
  renderTodo();

  // Reset userinput
  userInput.value = "";
  currentEditElementId = null;

  // Set on userinput autofocus
  userInput.focus();

  // Update add button innertext
  addBtn.innerText = "Add";
}


// Creating a delete function which is delete each element
function deleteTask(id) {
  todos = todos.filter((todo) => todo.id !== id);

  // Save data in localstorage
  saveToLocalStorage();

  // After saving data calling renderTodo function for displaying current UI
  renderTodo();
}


// Adding event listner on filter button
filterBtn.addEventListener("click", () => {
  let filterOptions = document.querySelector(".filter_options");
  filterOptions.classList.toggle("filter_visibility");
});

// Adding event listner on completed checkbox
filterCompCheckbox.addEventListener("change", (e) => {
  updateFilter(e);
})


// Adding event listner on pending checkbox
filterPendCheckbox.addEventListener("change", (e) => {
  updateFilter(e);
})


// Creating a updateFilter function which is help in filter todo based on checkbox
function updateFilter(e) {
  if (e.target === filterCompCheckbox) {
    filterPendCheckbox.checked = false;
    currentFilter = filterCompCheckbox.checked ? "completed" : "all";
  } 

  if(e.target === filterPendCheckbox) {
    filterCompCheckbox.checked = false;
    currentFilter = filterPendCheckbox.checked ? "pending" : "all";
  } 

  renderTodo();
}


// Adding event listner on sort button
sortBtn.addEventListener("click", () => {
  let sortOptions = document.querySelector(".sort_options");
  sortOptions.classList.toggle("sort_visibility");
})

// Adding event listner on window because whenever window is refreshing then data should be always visible
window.addEventListener("DOMContentLoaded", () => {
  renderTodo();
});
