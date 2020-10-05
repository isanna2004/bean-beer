import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
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
