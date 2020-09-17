import React from "react";
import "./Favourites.css";

class Favourites extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      favourites: [],
    };
  }
  componentDidMount=()=> {
    const { favourites} = this.props;

    [favourites].forEach((item) => {
    let id = item.toString()
    fetch("https://api.punkapi.com/v2/beers/{id}");
    });
  }

  render() {
    
  }
}
export default Favourites;
