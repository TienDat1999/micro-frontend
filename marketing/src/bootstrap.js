import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount a function
const mount = (elm) => {ReactDOM.render(<App />, elm)};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
