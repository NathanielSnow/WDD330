const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
  {
    label: "Week2 notes",
    url: "week2/index.html",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  var ol = document.getElementById("exercise_list");

  // this function runs when the DOM is ready, i.e. when the document has been parsed
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(link));
    ol.appendChild(li);
  }
});
