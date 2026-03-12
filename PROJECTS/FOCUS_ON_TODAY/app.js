// Intialize STATE 
const state = JSON.parse(localStorage.getItem("tasks")) ?? {
    tasks: [
        { id: 1, text: "", completed: false },
        { id: 2, text: "", completed: false },
        { id: 3, text: "", completed: false },
    ]
}

// Select all elements
const userInput = document.querySelectorAll(".content");
const checkboxes = document.querySelectorAll(".checkbox");
const progressLabel = document.querySelector("#progress-title");
const progressBarValue = document.querySelector("#progress-width");
const progressText = document.querySelector(".progresstext");
const progressCount = document.querySelector("#progresscount");
const errorMessage = document.querySelector("#empty-submit-error-message");

// Create core function
function render() {
    renderTask();
    renderToggle();
    renderText();
    renderProgressBar();
    renderLableMessage();
    preventOverWrite();
}

// Render Task function
function renderTask() {
    state.tasks.forEach((task, index) => {
        userInput[index].value = task.text;
    });
}

// Render Toggle function
function renderToggle() {
    state.tasks.forEach((task, index) => {
        if (task.completed) {
            checkboxes[index].classList.add("toggle");
            checkboxes[index].textContent = "✓";
        }
        else {
            checkboxes[index].classList.remove("toggle");
            checkboxes[index].textContent = "";
        }
    })
}

// Render Text function
function renderText() {
    state.tasks.forEach((task, index) => {
        if (task.completed) {
            userInput[index].classList.add("taskcomplete");
        }
        else {
            userInput[index].classList.remove("taskcomplete");
        }
    })
}

// Prevent Override function
function preventOverWrite() {
    state.tasks.forEach((task, index) => {
        if (task.completed) {
            userInput[index].readOnly = true;
        }
        else {
            userInput[index].readOnly = false;
        }
    })
}

// Render ProgressBar function
function renderProgressBar() {
    const totalTasks = state.tasks.length;
    const completedTasks = state.tasks.filter(task => task.completed).length;

    progressBarValue.style.width = `${completedTasks / totalTasks * 100}%`;
    progressCount.textContent = `${completedTasks}`

    if (completedTasks > 0) {
        progressText.classList.remove("progresstext");
    }
    else {
        progressText.classList.add("progresstext");
    }
}

// Render Error Message function
function renderErrorMessage() {
    const isTaskCompleted = state.tasks.every(task => task.text);

    if (isTaskCompleted) {
        errorMessage.classList.add("hidden");
    }
    else {
        errorMessage.classList.remove("hidden");
    }
}

// Render Lable Message function
function renderLableMessage() {
    const completedTasks = state.tasks.filter(task => task.completed).length;

    if (completedTasks === 1) {
        progressLabel.textContent = `Well begun is half done!`;
    }
    else if (completedTasks === 2) {
        progressLabel.textContent = `Just a step away, keep going!`;
    }
    else if (completedTasks === 3) {
        progressLabel.textContent = `Whoa! You just completed all the goals, time for chill :D`;
    }
    else {
        progressLabel.textContent = `Raise the bar by completing your goals`;
    }
}

// Save state in localstorage
function saveState() {
    localStorage.setItem("tasks", JSON.stringify(state));
}

// Add event listner on input
userInput.forEach((input, index) => {
    input.addEventListener("input", () => {
        state.tasks[index].text = input.value;

        saveState();

        const isTaskCompleted = state.tasks.every(task => task.text);

        if (isTaskCompleted) {
            errorMessage.classList.add("hidden");
        }
    })
})

// Add event listner on checkbox
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
        const isTaskCompleted = state.tasks.every(task => task.text);

        if (isTaskCompleted) {
            state.tasks[index].completed = !state.tasks[index].completed;
        }
        else {
            renderErrorMessage();
        }

        saveState();
        render();
    })
})

// Add event listner on window refreshing
window.addEventListener("DOMContentLoaded", () => {
    init();
})

function init() {
    render();
}