const tasks = [];

function displayTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = tasks.map((t, i) => `<li>${i+1}. ${t}</li>`).join("");
}

function addTask(task) {
  tasks.push(task);
  displayTasks();
}
