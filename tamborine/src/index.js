import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Navigation from "./components/navigation.js";
import Items from "./components/items";
import AddItem from "./components/additem";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      {/* <Route path="/" component={App} />
      <Route path="/navigation" component={Navigation} /> */}

      <img className="plant-decoration" src="https://i.imgur.com/DwOotz3.png" />
      <img
        className="potted-plant-decoration"
        src="https://i.imgur.com/wcO6zU2.png"
      />
      <h1 id="header">tamborine.</h1>
      <h4 id="subheader">find out what works best for you</h4>
      <div class="container">
        <ul>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/myitems">my items</Link>
          </li>
          <li>
            <Link to="/additem">add item</Link>
          </li>
          <Route exact path="/profile" component={profile} />
          <Route path="/myitems" component={myItems} />
          <Route path="/additem" component={addItem} />
          <Route path="/" component={App} />
        </ul>
      </div>
    </div>
  </Router>
);

function profile() {
  return (
    <div>
      <h4>profile.</h4>
    </div>
  );
}

function myItems() {
  return (
    <div>
      <h4>my items.</h4>
      <Items> </Items>
    </div>
  );
}

function addItem() {
  return (
    <div>
      <h4>add item.</h4>
      <AddItem />
    </div>
  );
}

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
