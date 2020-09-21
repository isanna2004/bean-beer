import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import "./Header.css";
import Favourites from "../Favourites/Favourites";
import App from "../App/App";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      favourites: [],
      result:[]
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      favourites: props.favourites,
    };
  }

  submitFavourites = () => {
    const { isShown, favourites } = this.state;
    fetch(` https://api.punkapi.com/v2/beers/?ids=${favourites.join("|")}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isShown: true,
          result: result,
        });
      });
  };
  removeFavourite = (id) => {
    const {result } = this.state;

    for (const key of result) {
      if (key.id === id) {
        result.splice(key, 1);
      }
      this.setState({
        result: result,
      });
    }
  };

  render() {
    const { result } = this.state;

    return (
      <div>
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
                    <Link to="/favourites" onClick={this.submitFavourites}>
                      {" "}
                      Favourites
                    </Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route exact path="/App" component={App} />
                <Route exact path="/" component={Favourites} />
              </Switch>
            </Router>
          </div>
        </div>

        <div
          className="container"
          style={{ display: this.state.isShown === true ? "block" : "none" }}
        >
          <div className="row">
            {result.map((item) => (
              <div className="col-md-4 my-3" key={item.name}>
                <div className="wrapper">
                  <div className="row">
                    <StarOutlinedIcon
                      onClick={() => this.removeFavourite(item.id)}
                      style={{
                        stroke: "aquamarine",
                        strokeWidth: "2",
                        fill: "red",
                      }}
                    />
                    <div className="col-3">
                      <img
                        className="beer-img"
                        src={item.image_url}
                        alt="beer bottle"
                      ></img>
                    </div>
                    <div className="col-7">
                      <h5>{item.name}</h5>{" "}
                      <p className="description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
