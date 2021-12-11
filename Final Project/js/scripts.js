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
  listOfLists = [];
  listOfLists.push(listOfItems);

  //if localstorage does not have a space created for a the list of lists, then make room. Else, grab the space and update it
  if (localStorage.getItem("shoppingLists") === null) {
    localStorage.setItem("shoppingLists", JSON.stringify(listOfLists[0]));
  } else {
    let shoppingLists = JSON.parse(localStorage.getItem("shoppingLists"));
    shoppingLists.push(listOfLists[0]);
    localStorage.setItem("shoppingLists", JSON.stringify(shoppingLists));
  }

  listOfItems = [];
}

/**************************** createList function end ************************** */

/**************************** Step 3: Display a table of lists  ************************** */

function displayList() {
  let shoppingLists = JSON.parse(localStorage.getItem("shoppingLists"));

  console.log(shoppingLists);

  //let lists = document.getElementById("shoppingListsTable");

  //Personal Note: "shoppingLists.length" is the number of lists (each of which contain one or more items), that are stored in localstorage

  //iterate through each list in localstorage
  /*
  for (let l = 0; l < shoppingLists.length; l++) {
    //iterate through each item on a list
    alert("Number of Lists: " + shoppingLists.length);
    
    for (let i = 0; i < shoppingLists[l].length - 1; i++) {
      let rowCount = lists.rows.length;
      let row = lists.insertRow(rowCount);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);

      cell1.innerHTML = shoppingLists[l][i].product;
      cell2.innerHTML = shoppingLists[l][i].quantity;
      cell3.innerHTML = "$" + shoppingLists[l][i].cost;
      cell4.innerHTML = shoppingLists[l][i].timeOfCreation;
    }
  }
  */
}

/**************************** displayList function end ************************** */

function clearStorage() {
  document.getElementById("product").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("cost").value = "";
  document.getElementById("timeOfCreation").value = "";
  localStorage.clear();
  listOfLists = [];
}
