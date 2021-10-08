const links = [
  {
    label: "Week-01 Notes",
    url: "Week 1/index.html",
  },
  {
    label: "Week-02 Notes",
    url: "Week 2/index.html",
  },
  {
    label: "Week-03 Notes",
    url: "Week 3/index.html",
  },
  {
    label: "Week-04 Notes",
    url: "Week 4/index.html",
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
