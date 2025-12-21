import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={"asdsad"}
      messages={["Terrible", "Bad", "OKay", "Good", "Amazing"]}
      defualtRaing={3}
    />
    <StarRating maxRating="asd" size={24} color="red" className="test" /> */}
  </React.StrictMode>
);
