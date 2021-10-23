const toDoList = [];

function addTask() {
  let taskInput = document.getElementById("taskInput").value;
  const todo = { id: +new Date(), content: taskInput, completed: false };
  toDoList.push(todo);

  /*Removes old list before diplaying the new one.*/
  let tasks = document.getElementById("taskList");
  tasks.innerHTML = "";
  displayList();
}

function displayList() {
  for (let x = 0; x < toDoList.length; x++) {
    let tasks = document.getElementById("taskList");

    let rowCount = tasks.rows.length;
    let row = tasks.insertRow(rowCount);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = '<input type="checkbox" onclick="updateTask()">';

    let cell2 = row.insertCell(1);
    cell2.innerHTML = "<p>" + toDoList[x].content + "</p>";

    let cell3 = row.insertCell(2);
    cell3.innerHTML = '<button onclick="deleteTask(this)">&#x2715</button>';
  }
  statusBar();
}

function statusBar() {
  let tasks = document.getElementById("taskList");

  let row2 = tasks.insertRow();
  let endCell = row2.insertCell();
  endCell.setAttribute("colspan", 3);
  endCell.innerHTML =
    '<p>0 Tasks left</p><button onclick="showAll()">All</button><button onclick="#">Active</button><button onclick="#">Completed</button>';

  if (toDoList.length === 0) {
    tasks.deleteRow(0);
  }
}

function showAll() {
  tasks.innerHTML = "";
  displayList();
}

function updateTask() {
  let tasks = document.getElementById("taskList");
  let rowCount = tasks.rows.length;

  for (let x = 0; x < rowCount; x++) {
    let row = tasks.rows[x];
    let chkbox = row.cells[0].childNodes[0];
    if (null != chkbox && true == chkbox.checked) {
      row.cells[1].innerHTML =
        '<p class="completedTask">' + toDoList[x].content + "</p>";
      toDoList[x].completed = true;
    } else {
      row.cells[1].innerHTML = "<p>" + toDoList[x].content + "</p>";
      toDoList[x].completed = false;
    }
  }
}

function deleteTask(deleteBtn) {
  let tasks = document.getElementById("taskList");
  let taskID = deleteBtn.parentNode.parentNode.rowIndex;
  toDoList.splice(taskID, 1);
  tasks.innerHTML = "";
  displayList();
}
