// import React from "react";

// import { ColorModeScript } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
 

ReactDOM.render(
  <StrictMode>
    {/* <ColorModeScript /> */}
    <App />
  </StrictMode>,
  document.getElementById("root_" + id)
);
// ReactDOM.render(() => <div>Test Vite</div>, document.getElementById("root"));
// ReactDOM.render(
//   <StrictMode>
//     <h1>Tesy</h1>
//   </StrictMode>,
//   document.getElementById("root")
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();
