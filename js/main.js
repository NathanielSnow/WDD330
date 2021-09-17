const links = [
  {
    label: "Week1 notes",
    url: "Week 1/index.html",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  var ol = document.getElementById("exercise_list");

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var a = document.createElement("a");
    var li = document.createElement("li");
    a.textContent = link.label;
    a.setAttribute("href", link.url);
    li.appendChild(a);
    ol.appendChild(li);
  }
});
