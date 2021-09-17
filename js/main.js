//var link = document.createElement("li");

const links = [
  {
    label: "Week1 notes",
    url: "seethesound.org",
  },
];

var ol = document.getElementById("exercise_list");

for (var i = 0; i < links.length; i++) {
  var link = linkList[i];
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(link));
  ol.appendChild(li);
}
