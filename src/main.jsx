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
//import App from "./question4/App";

//QUESTION-5
//import App from "./question5/App";

//QUESTION-6(useReducer)
import App from "./question6(useReducer)/App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);