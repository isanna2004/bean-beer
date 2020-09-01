import React from "react";
import "./Beer.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";


class Beer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          items: data,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.items.length === 0
            ? "Loading beers..."
            : this.state.items.map((item) => (
                <div className="col-md-4" key={item.id}>
                  <div className="wrapper my-3">
                    <div className="row">
                      <div className="col-3">
                        <img className="beer-img" src={item.image_url} alt="beer bottle"></img>
                      </div>
                      <div className="col-7">
                        <h5>{item.name}</h5>{" "}
                        <p className="description">{item.description}</p>
                      </div>
                      <div className="col-1">
                          <button className="btn">
                        <StarBorderIcon style={{ color: "aquamarine" }} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    );
  }
}
export default Beer;
