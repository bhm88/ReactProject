import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//let city = "madrid";

// let city = {
//   name: "madrid",
//   country: "Spain",
// };
//createelement takes 3 arguments,1st is h1 tag/div,2nd is argument to 1st element like
//properties and third one is children
//React.createElement("h1", { style: { color: "green" } }, "Hello !"),
//React.createElement(
//   "div",
//   { style: { color: "red" } },
//   React.createElement("h1", null, "hi again inside parent")
// ),
//lists where jsx comes into picture,babel allow us to use jsx syntax and converts it into browser compatible
//code ,internally its like creating React.createElement("li",null,"ammi")
//jsx is extension to xml and simillar to html
// <h1>hello from {city} !</h1>,
// <ul>
//   <li>ammi</li>
//   <li>gummi</li>
// </ul>,

// <h1 id="heading" className="cool-text">
//   {city.name} is in {city.country}
// </h1>,

//components are collections of react elements that we used to build UI
function Hello() {
  return (
    <div>
      <h1>welcome to react</h1>
      <p1>lets build something cool.</p1>
    </div>
  );
}
ReactDOM.render(<Hello></Hello>, document.getElementById("root"));
