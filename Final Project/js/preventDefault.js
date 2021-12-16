let stopAddBtn = document
  .getElementById("addItemBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

let stopDisplayBtn = document
  .getElementById("displayListBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

let stopCreateBtn = document
  .getElementById("createListBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

let stopClearDatabase = document
  .getElementById("clearDatabase")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

export { stopAddBtn, stopCreateBtn, stopDisplayBtn, stopClearDatabase };
