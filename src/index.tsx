import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import UserAddPage from "./pages/UserAdd";
import HomePage from "./pages/Home";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={HomePage} />
      <Route path="/user/add" component={UserAddPage} />
    </div>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
