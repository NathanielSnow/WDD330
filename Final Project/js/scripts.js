import {
  stopAddBtn,
  stopCreateBtn,
  stopDisplayBtn,
  stopSearchBtn,
} from "./preventDefault.js";

document
  .getElementById("displayListBtn")
  .addEventListener("click", displayList);

document.getElementById("addItemBtn").addEventListener("click", addItem);
document.getElementById("createListBtn").addEventListener("click", createList);

document
  .getElementById("clearDatabase")
  .addEventListener("click", clearStorage);

//let shoppingListItems = [];
let listOfItems = [];
let listOfLists = [];

/**************************** Step 1: Add as many items as you want to a list  ************************** */

function addItem() {
  //Grab item values from the intputs
  let product = document.getElementById("product").value;
  let quantity = document.getElementById("quantity").value;
  let cost = document.getElementById("cost").value;
  let timeOfCreation = document.getElementById("timeOfCreation").value;

  //store values inside an "item" object
  let item = {
    product: product,
    quantity: quantity,
    cost: cost,
    timeOfCreation: timeOfCreation,
  };

  listOfItems.push(item);
}

/**************************** addItem function end ************************** */

/**************************** Step 2: Create a list of all the items you put in a list  ************************** */

function createList() {
  //push the list of items into an array of lists
  listOfLists.push(listOfItems);

  //if localstorage does not have a space created for a the list of lists, then make room. Else, grab the space and update it
  if (localStorage.getItem("shoppingLists") === null) {
    localStorage.setItem("shoppingLists", JSON.stringify(listOfLists));
  } else {
    let shoppingLists = JSON.parse(localStorage.getItem("shoppingLists"));
    shoppingLists.push(listOfLists);
    localStorage.setItem("shoppingLists", JSON.stringify(shoppingLists));
  }

  //displayList();
}

/**************************** createList function end ************************** */

/**************************** Step 3: Display a table of lists  ************************** */

function displayList() {
  /*let product = document.getElementById("product").value;
  let quantity = document.getElementById("quantity").value;
  let cost = document.getElementById("cost").value;
  let timeOfCreation = document.getElementById("timeOfCreation").value;
  alert(product + "\n" + quantity + "\n" + cost + "\n" + timeOfCreation);*/

  let shoppingLists = JSON.parse(localStorage.getItem("shoppingLists"));

  //"shoppingLists.length" is the number of lists (each of which contain one or more items), that are stored in localstorage

  alert(shoppingLists.length);

  /*for (let x = 0; x < shoppingLists.length - 1; x++) {
    let lists = document.getElementById("shoppingListsTable");
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
  }*/
}

/**************************** displayList function end ************************** */

function clearStorage() {
  localStorage.clear();
}
