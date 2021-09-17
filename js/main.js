const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
];

var ol = document.getElementById("exercise_list");

document.addEventListener("DOMContentLoaded", function () {
  // this function runs when the DOM is ready, i.e. when the document has been parsed
  for (var i = 0; i < links.length; i++) {
    var link = links[i].label;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(link));
    ol.appendChild(li);
  }
});
