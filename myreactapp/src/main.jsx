import React from "react";
import ReactDom from "react-dom/client";

let h1 = document.createElement("h1");
h1.innerHTML = "I am a H1 Tag";

console.log(h1);
// console.log(React);

// let reactH1 = React.createElement("h1", null, "I am a h1 tag created by React");
// let p = React.createElement("p", null, "I am a para tag");

let article = React.createElement(
  "article",
  null,
  React.createElement("h1", null, "I am a h1 tag"),
  React.createElement("p", null, "I am a para tag"),
);

ReactDom.createRoot(document.getElementById("root")).render(article);
