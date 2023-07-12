import React from "react";
import ReactDOM from "react-dom/client";

// React ELement =>render =>Object=>HTML element

// JSX not HTML in JS
/**
 * JSX Babel transpiles it to React.Element =>ReactElement Object=>HTML ELment
 * JSX transpilled before it reaches to JS engine by parcel Babel is JS compiler which converts
 */
// const heading = <h1 id="headings">React JSX syntax</h1>;

//React Components
/**
 * 2 types
 * a) Functional Components -New
 * b) Class Based Component -OLD
 */

// Function Based Components

const Title = () => <h1>This is Title Component</h1>;
//component Composition : Keeping Component inside another component Title is called inside Heading component
const HeadingComponent = () => {
  return (
    <>
      <Title />
      <h1>Hi Welcome!!</h1>
      <h3 id="headings">This is function Component</h3>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
