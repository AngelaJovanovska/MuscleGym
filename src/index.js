import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const favRaw = localStorage.getItem("fav");
const fav = typeof favRaw !== "string" ? [] : JSON.parse(favRaw);

root.render(
    <BrowserRouter>
        <App initFavorites={fav} />
    </BrowserRouter>
);
