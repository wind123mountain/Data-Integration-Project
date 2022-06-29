import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Switch,
} from "react-router-dom";

import HomePage from "./component/HomePage.js";
import Home from "./pages/Home";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="HomePage">
                <HomePage />
              </div>
            }
          />
          <Route path=":id" element={<Child />} />
        </Routes>
      </Router>
    );
  }
}
export default App;

function Child() {
  let { id } = useParams();
  console.log(id);
  return id && <Home id={id} />;
}
