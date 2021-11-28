document
  .getElementById("addItemBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

document
  .getElementById("displayListBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

document
  .getElementById("displayListBtn")
  .addEventListener("click", displayList);

document.getElementById("addItemBtn").addEventListener("click", createList);

function displayList() {
  /*let product = document.getElementById("product").value;
  let quantity = document.getElementById("quantity").value;
  let cost = document.getElementById("cost").value;
  let timeOfCreation = document.getElementById("timeOfCreation").value;
  alert(product + "\n" + quantity + "\n" + cost + "\n" + timeOfCreation);*/

  let shoppingListItems = JSON.parse(localStorage.getItem("shoppingLists"));

  for (let x = 0; x < shoppingListItems.length; x++) {
    let displayListItems =
      shoppingListItems[x].product +
      "\n" +
      shoppingListItems[x].quantity +
      "\n" +
      shoppingListItems[x].cost +
      "\n" +
      shoppingListItems[x].timeOfCreation;

    alert(displayListItems);
    /*
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
    }*/
  }
}

function createList() {
  let product = document.getElementById("product").value;
  let quantity = document.getElementById("quantity").value;
  let cost = document.getElementById("cost").value;
  let timeOfCreation = document.getElementById("timeOfCreation").value;
  let shoppingLists = [];

  let shoppingList = {
    product: product,
    quantity: quantity,
    cost: cost,
    timeOfCreation: timeOfCreation,
  };

  if (localStorage.getItem("shoppingLists") === null) {
    shoppingLists.push(shoppingList);
    localStorage.setItem("shoppingLists", JSON.stringify(shoppingLists));
  } else {
    let shoppingListItems = JSON.parse(localStorage.getItem("shoppingLists"));
    shoppingListItems.push(shoppingList);
    localStorage.setItem("shoppingLists", JSON.stringify(shoppingListItems));
  }

  displayList();
}
