let shoppingListItems = [];

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
  .getElementById("searchDatabase")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
document
  .getElementById("createListBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

document
  .getElementById("displayListBtn")
  .addEventListener("click", displayList);

document.getElementById("addItemBtn").addEventListener("click", addItem);
document.getElementById("createListBtn").addEventListener("click", createList);

document
  .getElementById("searchDatabase")
  .addEventListener("click", clearStorage);

function displayList() {
  /*let product = document.getElementById("product").value;
  let quantity = document.getElementById("quantity").value;
  let cost = document.getElementById("cost").value;
  let timeOfCreation = document.getElementById("timeOfCreation").value;
  alert(product + "\n" + quantity + "\n" + cost + "\n" + timeOfCreation);*/

  let shoppingLists = JSON.parse(localStorage.getItem("shoppingLists"));

  alert(shoppingLists.length);

  for (let x = 0; x < shoppingListItems.length - 1; x++) {
    let lists = document.getElementById("listOfLists");
    let rowCount = lists.rows.length;
    let row = lists.insertRow(rowCount);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = shoppingListItems[x].product;
    cell2.innerHTML = shoppingListItems[x].quantity;
    cell3.innerHTML = "$" + shoppingListItems[x].cost;
    cell4.innerHTML = shoppingListItems[x].timeOfCreation;
  }
}

function addItem() {
  let product = document.getElementById("product").value;
  let quantity = document.getElementById("quantity").value;
  let cost = document.getElementById("cost").value;
  let timeOfCreation = document.getElementById("timeOfCreation").value;

  let shoppingItem = {
    product: product,
    quantity: quantity,
    cost: cost,
    timeOfCreation: timeOfCreation,
  };

  shoppingListItems.push(shoppingItem);
}

function createList() {
  if (localStorage.getItem("shoppingLists") === null) {
    localStorage.setItem("shoppingLists", JSON.stringify(shoppingListItems));
  } else {
    let shoppingLists = JSON.parse(localStorage.getItem("shoppingLists"));
    shoppingLists.push(shoppingListItems);
    localStorage.setItem("shoppingLists", JSON.stringify(shoppingLists));
  }

  shoppingListItems = [];

  /*let shoppingLists = [];

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
  }*/

  displayList();
}
function clearStorage() {
  localStorage.clear();
}
