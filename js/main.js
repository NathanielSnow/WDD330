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
  {
    label: "Week-05 Notes",
    url: "Week 5/index.html",
  },
  {
    label: "Week-06 TODO Assignment",
    url: "Week 6/index.html",
  },
  {
    label: "Week-07 Notes",
    url: "Week 7/index.html",
  },
  {
    label: "Week-08 Notes",
    url: "Week 8/index.html",
  },
  {
    label: "Week-09 Notes",
    url: "Week 9/index.html",
  },
  {
    label: "Week-10 Notes",
    url: "Week 10/index.html",
  },
  {
    label: "Week-11 Notes",
    url: "Week 11/index.html",
  },
  {
    label: "Week-12 Notes",
    url: "Week 12/index.html",
  },
  {
    label: "Week-13 Notes",
    url: "Week 13/index.html",
  },
  {
    label: "Week-14 Notes",
    url: "Week 14/index.html",
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
