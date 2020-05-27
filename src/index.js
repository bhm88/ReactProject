import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//let city = "madrid";

let city = {
  name: "madrid",
  country: "Spain",
};

ReactDOM.render(
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

  <h1 id="heading" className="cool-text">
    {city.name} is in {city.country}
  </h1>,
  document.getElementById("root")
);
