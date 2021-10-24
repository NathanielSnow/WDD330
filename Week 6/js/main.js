/*Adds a 'todo' task to localstroage, makes space if none exists*/
function addTask() {
  let taskInput = document.getElementById("taskInput").value;
  let toDoList = [];
  const todo = { id: +new Date(), content: taskInput, completed: false };

  if (localStorage.getItem("toDo") === null) {
    toDoList.push(todo);
    localStorage.setItem("toDo", JSON.stringify(toDoList));
  } else {
    let toDoItems = JSON.parse(localStorage.getItem("toDo"));
    toDoItems.push(todo);
    localStorage.setItem("toDo", JSON.stringify(toDoItems));
  }

  let tasks = document.getElementById("taskList");
  tasks.innerHTML = "";
  displayList();
}

/*Display's list of todos*/
function displayList() {
  let toDoItems = JSON.parse(localStorage.getItem("toDo"));

  for (let x = 0; x < toDoItems.length; x++) {
    let tasks = document.getElementById("taskList");

    let rowCount = tasks.rows.length;
    let row = tasks.insertRow(rowCount);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    if (toDoItems[x].completed) {
      cell1.innerHTML =
        '<input type="checkbox" class="chkBox" onclick="updateTask()" checked>';
      cell2.innerHTML =
        '<p class="completedTask">' + toDoItems[x].content + "</p>";
    } else {
      cell1.innerHTML = '<input type="checkbox" onclick="updateTask()">';
      cell2.innerHTML = "<p>" + toDoItems[x].content + "</p>";
    }

    let cell3 = row.insertCell(2);
    cell3.innerHTML = '<button onclick="deleteTask(this)">&#x2715</button>';
  }

  statusBar();
  let btnAll = document.getElementById("showAll");
  selectBtn(btnAll.id);
}

/*Finds the current display button and puts a border around it*/
function selectBtn(btn) {
  let btnAll = document.getElementById("showAll");
  let btnActive = document.getElementById("showActive");
  let btnComplete = document.getElementById("showComplete");

  if (btn === "showAll") {
    btnAll.setAttribute("class", "btnSelect");
    if (btnActive.hasAttribute("class")) {
      btnActive.removeAttribute("class");
    } else if (btnComplete.hasAttribute("class")) {
      btnComplete.removeAttribute("class");
    }
  } else if (btn === "showActive") {
    btnActive.setAttribute("class", "btnSelect");
    if (btnAll.hasAttribute("class")) {
      btnAll.removeAttribute("class");
    } else if (btnComplete.hasAttribute("class")) {
      btnComplete.removeAttribute("class");
    }
  } else if (btn === "showComplete") {
    btnComplete.setAttribute("class", "btnSelect");
    if (btnActive.hasAttribute("class")) {
      btnActive.removeAttribute("class");
    } else if (btnAll.hasAttribute("class")) {
      btnAll.removeAttribute("class");
    }
  }
}

/*Displays active tasks; activated by the "Active" button*/
function showActive() {
  let toDoItems = JSON.parse(localStorage.getItem("toDo"));

  let tasks = document.getElementById("taskList");
  tasks.innerHTML = "";
  for (let x = 0; x < toDoItems.length; x++) {
    let tasks = document.getElementById("taskList");

    let rowCount = tasks.rows.length;
    let row = tasks.insertRow(rowCount);

    if (!toDoItems[x].completed) {
      let cell1 = row.insertCell(0);
      cell1.innerHTML = '<input type="checkbox" onclick="updateTask()">';

      let cell2 = row.insertCell(1);
      cell2.innerHTML = "<p>" + toDoItems[x].content + "</p>";

      let cell3 = row.insertCell(2);
      cell3.innerHTML = '<button onclick="deleteTask(this)">&#x2715</button>';
    }
  }
  statusBar();
  let btnActive = document.getElementById("showActive");
  selectBtn(btnActive.id);
}

/*Displays complete tasks; activated by the "Complete" button*/
function showComplete() {
  let toDoItems = JSON.parse(localStorage.getItem("toDo"));
  let tasks = document.getElementById("taskList");

  tasks.innerHTML = "";
  for (let x = 0; x < toDoItems.length; x++) {
    let tasks = document.getElementById("taskList");

    let rowCount = tasks.rows.length;
    let row = tasks.insertRow(rowCount);

    if (toDoItems[x].completed) {
      let cell1 = row.insertCell(0);
      cell1.innerHTML =
        '<input type="checkbox" onclick="updateTask()" checked>';

      let cell2 = row.insertCell(1);
      cell2.innerHTML =
        '<p class="completedTask">' + toDoItems[x].content + "</p>";

      let cell3 = row.insertCell(2);
      cell3.innerHTML = '<button onclick="deleteTask(this)">&#x2715</button>';
    }
  }
  statusBar();
  let btnComplete = document.getElementById("showComplete");
  selectBtn(btnComplete.id);
}

/*Puts a 'staus' bar at the end of the task list that diplays the # of tasks lift and the display buttons*/
function statusBar() {
  let toDoItems = JSON.parse(localStorage.getItem("toDo"));

  let tasks = document.getElementById("taskList");
  let numOfTasks = tasksLeft();

  let row2 = tasks.insertRow();
  let endCell = row2.insertCell();
  endCell.setAttribute("colspan", 3);
  endCell.innerHTML =
    numOfTasks +
    ' Tasks left <button id="showAll" onclick="showAll()">All</button><button id="showActive" onclick="showActive()">Active</button><button id="showComplete" onclick="showComplete()">Completed</button>';

  if (toDoItems.length === 0) {
    tasks.deleteRow(0);
  }
}

/*Displays all tasks; activated by the "All" button*/
function showAll() {
  let tasks = document.getElementById("taskList");

  tasks.innerHTML = "";
  displayList();
}

/*Tracks and returns how many tasks are left*/
function tasksLeft() {
  let toDoItems = JSON.parse(localStorage.getItem("toDo"));

  let activeTasks = 0;
  for (let x = 0; x < toDoItems.length; x++) {
    if (!toDoItems[x].completed) {
      activeTasks++;
    }
  }
  return activeTasks;
}

/*Scratches or unscratches out completed tasks; updates the status bar*/
function updateTask() {
  let toDoItems = JSON.parse(localStorage.getItem("toDo"));
  let tasks = document.getElementById("taskList");

  let rowCount = tasks.rows.length;
  let lastRow = tasks.rows[tasks.rows.length - 1];

  for (let x = 0; x < rowCount; x++) {
    let row = tasks.rows[x];
    let chkbox = row.cells[0].childNodes[0];

    if (null != chkbox && true == chkbox.checked) {
      row.cells[1].innerHTML =
        '<p class="completedTask">' + toDoItems[x].content + "</p>";
      toDoItems[x].completed = true;
      localStorage.setItem("toDo", JSON.stringify(toDoItems));
    } else {
      row.cells[1].innerHTML = "<p>" + toDoItems[x].content + "</p>";
      toDoItems[x].completed = false;
      localStorage.setItem("toDo", JSON.stringify(toDoItems));
    }

    lastRow.innerHTML =
      '<td colspan="3">' +
      tasksLeft() +
      ' Tasks left <button id="showAll" onclick="showAll()">All</button><button id="showActive" onclick="showActive()">Active</button><button id="showComplete" onclick="showComplete()">Completed</button></td>';
  }
}

/*Deletes task from localstorage*/
function deleteTask(deleteBtn) {
  let tasks = document.getElementById("taskList");
  let taskID = deleteBtn.parentNode.parentNode.rowIndex;

  let toDoItems = JSON.parse(localStorage.getItem("toDo"));
  toDoItems.splice(taskID, 1);
  localStorage.setItem("toDo", JSON.stringify(toDoItems));

  tasks.innerHTML = "";
  displayList();
}
