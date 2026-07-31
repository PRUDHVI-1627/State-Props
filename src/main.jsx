import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//QUESTION-1
//import App from "./question1/App";

//QUESTION-2
//import App from "./question2/App";

//QUESTION-3
//import App from "./question3/App";

//QUESTION-4
import App from "./question4/App";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);