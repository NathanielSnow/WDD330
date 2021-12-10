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

let stopSearchBtn = document
  .getElementById("searchDatabase")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
let stopCreateBtn = document
  .getElementById("createListBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

export { stopAddBtn, stopCreateBtn, stopDisplayBtn, stopSearchBtn };
