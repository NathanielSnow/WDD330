import {
  stopAddBtn,
  stopCreateBtn,
  stopDisplayBtn,
  stopClearDatabase,
} from "./preventDefault.js";

import { getUserLocation } from "./location.js";

const date = new Date();

const today = date.toLocaleString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

//let shoppingListItems = [];
let listOfItems = [];
let listOfLists = [];

/**************************** User Instructions ************************** */
function userInstructions() {
  alert(
    "Hello! Welcome to List Creator!!\n\n To create a list, start by inputing information" +
      "about an item on your list, such as it's name, how much it costs, and how much if it you plan to buy.\n" +
      "Then press 'Add Item' to place that item in your list. Repeat for however many items you want on your list.\n" +
      "When you are done adding items, press the 'Create List' item to add the list to localstorage.\n You can then press the 'Display Lists button to see all the lists you have made!\n Have fun making lists!"
  );
}

document.getElementById("info").addEventListener("click", userInstructions);

document.addEventListener("DOMContentLoaded", function () {
  userInstructions();
});
/**************************** User Instructions end ************************** */

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
  document.getElementById("savedItems").value +=
    item.product + "\n" + item.quantity + "\n" + item.cost + "\n\n";
}

document.getElementById("addItemBtn").addEventListener("click", addItem);

/**************************** addItem function end ************************** */

/**************************** Step 2: Create a list of all the items you put in a list  ************************** */

function createList() {
  let confirmation = confirm("Are you sure you want to create a list?");
  if (confirmation) {
    //push the list of items into an array of lists
    listOfLists = [];
    listOfLists.push(listOfItems);
    let backUpArray = [];

    //if localstorage does not have a space created for a the list of lists, then make room. Else, grab the space and update it
    if (localStorage.getItem("shoppingLists") === null) {
      backUpArray.push(listOfLists[0]);
      localStorage.setItem("shoppingLists", JSON.stringify(backUpArray));
    } else {
      let shoppingLists = JSON.parse(localStorage.getItem("shoppingLists"));
      shoppingLists.push(listOfLists[0]);
      localStorage.setItem("shoppingLists", JSON.stringify(shoppingLists));
    }
    document.getElementById("savedItems").value = "";
    listOfItems = [];
  }
}

document.getElementById("createListBtn").addEventListener("click", createList);
clearInputs();

/**************************** createList function end ************************** */

/*Deletes task from localstorage*/
function deleteItem(evt) {
  let listOfLists = document.getElementById("shoppingListsTable");
  let taskID = evt.currentTarget.parentNode.rowIndex;
  alert(taskID);

  /*let listOfLists = document.getElementById("shoppingListsTable");
  let taskID = deleteBtn.parentNode.rowIndex;

  let toDoItems = JSON.parse(localStorage.getItem("toDo"));
  toDoItems.splice(taskID, 1);
  localStorage.setItem("toDo", JSON.stringify(toDoItems));

  listOfLists.innerHTML = "";
  displayList();*/
  //document.getElementById("deleteBtn").addEventListener("click", deleteItem);
}

/**************************** Step 3: Display a table of lists  ************************** */

function displayList() {
  let shoppingLists = JSON.parse(localStorage.getItem("shoppingLists"));
  let lists = document.getElementById("shoppingListsTable");

  if (shoppingLists === null) {
    lists.innerHTML = "There are no lists in localstorage at this time.";
  } else {
    lists.innerHTML = "";
    let costOfItems = 0;

    //iterate through each list in localstorage
    for (let l = 0; l < shoppingLists.length; l++) {
      //iterate through each item on a list
      let rowCount = lists.rows.length;
      let titleRow = lists.insertRow(rowCount);
      let titlerCell = titleRow.insertCell(0);
      titlerCell.colSpan = "5";
      titlerCell.innerHTML = `Created on ${today} `;

      let headerRow = lists.insertRow(rowCount + 1);
      let headerCell1 = headerRow.insertCell(0);
      let headerCell2 = headerRow.insertCell(1);
      let headerCell3 = headerRow.insertCell(2);
      let headerCell4 = headerRow.insertCell(3);
      headerCell1.innerHTML = "Product";
      headerCell2.innerHTML = "Quantity";
      headerCell3.innerHTML = "Price";
      headerCell4.innerHTML = "Total";

      for (let i = 0; i < shoppingLists[l].length; i++) {
        let row = lists.insertRow(rowCount + 2);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = shoppingLists[l][i].product;
        cell2.innerHTML = shoppingLists[l][i].quantity;
        cell3.innerHTML = "$" + shoppingLists[l][i].cost;
        cell4.innerHTML =
          "$" + shoppingLists[l][i].quantity * shoppingLists[l][i].cost;
        costOfItems += shoppingLists[l][i].quantity * shoppingLists[l][i].cost;
      }

      let rowReCount = lists.rows.length;
      let totalCostRow = lists.insertRow(rowReCount);
      let totalCostCell = totalCostRow.insertCell(0);
      totalCostCell.colSpan = "4";
      totalCostCell.innerHTML = `Total Cost of Items: $${costOfItems.toFixed(
        2
      )}`;

      let extraSpaceRow = lists.insertRow(rowReCount + 1);
      let extraSpacetCell = extraSpaceRow.insertCell(0);
      extraSpacetCell.colSpan = "4";
      extraSpacetCell.innerHTML = "<p></p>";
      costOfItems = 0;
    }
  }
}

document
  .getElementById("displayListBtn")
  .addEventListener("click", displayList);
clearInputs();

/**************************** displayList function end ************************** */

/**************************** Clear localstorage of all lists  ************************** */

function clearInputs() {
  document.getElementById("product").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("cost").value = "";
  document.getElementById("timeOfCreation").value = "";
  document.getElementById("savedItems").value = "";
  let lists = document.getElementById("shoppingListsTable");
  lists.innerHTML = "";
}

function clearStorage() {
  if (confirm("Are you sure you want to erase ALL your lists?")) {
    clearInputs();
    localStorage.clear();
    listOfLists = [];
    alert("Your lists were erased!");
  } else {
    alert("Your lists were not erased!");
  }
}

document
  .getElementById("clearDatabase")
  .addEventListener("click", clearStorage);

/**************************** Clear localstorage of all lists end ************************** */

getUserLocation();
