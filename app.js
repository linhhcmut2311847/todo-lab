const tasks = [];

function displayTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = tasks.map(t => `<li>${t}</li>`).join("");
}

