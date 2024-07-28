import React from "react";
import ReactDOM from "react-dom/client";

// Create React element => obj  => Render => html element 


//const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

 
// jsx react element
const jsxheading = <h1 id="heading" className="heading">Heading JSX </h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => (
    <h1 className="title" tabIndex="5">Title component </h1>
)

// functional component

const Mycomponent = () => (
  <div id="container">
  <Title/>
      <h2 className="headingComponent">Component Heading</h2>
  </div>
)

root.render(<Mycomponent/>);