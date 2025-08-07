function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  const completeIcon = document.createElement("img");
  completeIcon.src = "assets/icon-check.png";
  completeIcon.alt = "Complete";
  completeBtn.appendChild(completeIcon);
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  const deleteIcon = document.createElement("img");
  deleteIcon.src = "assets/icon-delete.png";
  deleteIcon.alt = "Delete";
  deleteBtn.appendChild(deleteIcon);
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);

  taskInput.value = "";
}
