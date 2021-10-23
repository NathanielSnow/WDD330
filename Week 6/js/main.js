const toDoList = [];

/*function createList() {
  let taskList = document.createElement("table");
  taskList.setAttribute("id", "taskList");

  
  let listDiv = document.getElementById("listDiv");
  listDiv.appendChild(taskList);
}*/

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

    /*let element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name = "chkStatus";
    cell1.appendChild(element1);*/

    let cell2 = row.insertCell(1);
    cell2.innerHTML = toDoList[x].content;

    let cell3 = row.insertCell(2);
    cell3.innerHTML = '<button onclick="deleteTask()">&#x2715</button>';
  }
}

function greeting() {
  alert("hello nate!!");
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

function deleteTask() {
  let tasks = document.getElementById("taskList");
  let rowCount = tasks.rows.length;
}
