import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../Home/Home";
import "./Header.css";
import Favourites from "../Favourites/Favourites";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Beans Love Beers </h1>
        <div className="header-nav">
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/favourites"> Favourites</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/favourites" component={Favourites} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
export default Header;
