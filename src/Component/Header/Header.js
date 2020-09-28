import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Header.css";

import App from "../App/App";
class Header extends React.Component {
  /*  fetch(` https://api.punkapi.com/v2/beers/?ids=${favourites.join("|")}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isShown: true,
          result: result,
        });
      }); */

  render() {
    return (
      <div className="header">
        <h1>Beans Love Beers </h1>
        <div className="header-nav">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favourites">Favourites</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;
