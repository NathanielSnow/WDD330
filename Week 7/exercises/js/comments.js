const CommentsList = [
  {
    name: "Bechler Falls",
    date: "2001-06-27",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolores corrupti vitae alias error amet nostrum eius earum cumque totam inventore perferendis vel culpa pariatur, maiores dolorem laudantium, veritatis tempore.",
    type: "hikes",
  },
  {
    name: "Bechler Falls",
    date: "2001-06-28",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla autem consectetur voluptates quis odio, odit sint et pariatur praesentium reprehenderit id neque perspiciatis libero ea itaque nesciunt eveniet a corporis.",
    type: "hikes",
  },
  {
    name: "Teton Canyon",
    date: "2001-06-27",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni et in vel a, quas provident dicta nulla, veritatis ducimus, natus ut cumque cupiditate dolorem ad. Excepturi sit sed doloribus laudantium?",
    type: "hikes",
  },
];

var cl = [];

//const CommentsList = JSON.parse(localStorage.getItem('CommentsList'));

/*localStorage.removeItem('CommentsList');
    localStorage.setItem('CommentsList', JSON.stringify(CommentsList));
    JSON.parse(localStorage.getItem('CommentsList'));
    */

var type = ""; // dellete may be
export default class Comments {
  constructor(elementId, typeOfComments) {
    this.parentElement = document.getElementById(elementId);
    this.type = typeOfComments;
  }

  showCommentsList(typeOfFilter) {
    if (typeOfFilter == "all") {
      this.renderCommentList(this.getAllComments());
    } else {
      this.renderCommentList(this.filterCommentsByName(typeOfFilter));
    }
  }

  getAllComments() {
    let answer = cl.filter((comment) => comment.type === this.type);
    //console.log("answer get all comments: ", answer);
    return answer;
  }

  getToday() {
    const d = new Date();
    let today =
      toString(d.getMonth()) +
      "-" +
      toString(d.getDay) +
      "-" +
      toString(d.getFullYear);
    return today;
  }

  renderCommentList(listOfCommentsToRender) {
    //console.log("listOfCommentsToRender: ",listOfCommentsToRender);

    let listOfComments = document.createElement("ul");
    listOfCommentsToRender.forEach((comment) => {
      let individualComment = document.createElement("li");
      let commentName = document.createElement("p");
      commentName.innerHTML = comment.name;
      let commentDate = document.createElement("p");
      commentDate.innerHTML = comment.date;
      let commentContent = document.createElement("p");
      commentContent.innerHTML = comment.content;

      individualComment.appendChild(commentName); // add the first paragraph
      individualComment.appendChild(commentDate); // add the second paragraph
      individualComment.appendChild(commentContent); // add the third paragraph

      listOfComments.appendChild(individualComment); // add the line
    });
    //this.parentElement.innerHTML = "";
    this.parentElement.appendChild(listOfComments); // add to the list

    let addNewDiv = document.createElement("div");
    //addNewDiv.id = "addNewDiv";

    let newCommentInput = document.createElement("input");
    newCommentInput.type = "text";

    let addCommentInputButton = document.createElement("input");
    addCommentInputButton.type = "button";
    addCommentInputButton.value = "+";

    addCommentInputButton.addEventListener("click", () => {
      this.addComment("hike", this.getToday(), newCommentInput.value, "hike");
    });

    addNewDiv.appendChild(newCommentInput);
    addNewDiv.appendChild(addCommentInputButton);

    this.parentElement.appendChild(addNewDiv);
  }

  filterCommentsByName(typeOfFilter) {
    return cl.filter(
      (comment) => comment.type === this.type && comment.name === typeOfFilter
    );
  }

  /// WORKING HERE
  addComment(commentName, commentDate, commentContent, commentType) {
    var c = {
      name: commentName,
      date: commentDate,
      content: commentContent,
      type: commentType,
    };
    this.addLocalSotrage(c);
    this.getFromLocalStorge();
  }

  addLocalSotrage(comment) {
    localStorage.setItem("CommentsList", JSON.stringify(comment));
  }

  getFromLocalStorge() {
    cl = JSON.parse(localStorage.getItem("CommentsList"));
    console.log("getlocalstorage: ", cl);
  }
}
