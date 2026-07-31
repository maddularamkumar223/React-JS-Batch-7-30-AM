import React from "react";
import ReactDom from "react-dom/client";

// let h1 = React.createElement("h1",null,"I am a h1 tag")
// ReactDom.createRoot(document.getElementById("root")).render(
//   <div>
//     <h1>I am a h1 tag</h1>
//     <p>I am a para tag</p>
//   </div>,
// );
// ReactDom.createRoot(document.getElementById("root")).render(
//   <React.Fragment>
//     <h1>I am a h1 tag</h1>
//     <p>I am a para tag</p>
//   </React.Fragment>,
//   <>
//     <h1>I am a h1 tag</h1>
//     <p>I am a para tag</p>
//   </>,
// );

let data = 2 + 2;
let userName = "SIRI";
let names = ["Ram", "Ravi", "Kumari", "Ratan", "Pavan"];
let details = {
  name: "ram",
  place: "HYD",
};

let demo = () => "I am a demo function";

ReactDom.createRoot(document.getElementById("root")).render(
  <>
    {/* <h1>Hiii..{userName}</h1>
    <h1>{data}</h1>

    <h1>{demo()}</h1>
    <article>
      {names.map((name) => {
        return (
          <h1>
            <i>Hello! {name}</i>
          </h1>
        );
      })}
    </article>

    <section>
      <p>
        My name is {details.name} and I am from {details.place}
      </p>
    </section> */}

    <label htmlFor="" className = "label">UserName</label>
  </>,
);
