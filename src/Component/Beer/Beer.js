import React from "react";
import "./Beer.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";

class Beer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      image_url: "",
    };
    this.getBeer();
  }
  getBeer = () => {
    fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);

        data.forEach((element) =>
          this.setState({
            name: element.name,
            description: element.description,
            image_url: element.image_url,
          })
        );
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-2">
            <div className="wrapper">
              <h5 className="name text-center">{this.state.name}</h5>
              <img
                className="beer-img  mr-3 float-left"
                src={this.state.image_url}
              ></img>
              <p className="description">{this.state.description}</p>
              <button className="btn">
                <StarBorderIcon />
              </button>
            </div>{" "}
          </div>
          <div className="col-md-4 my-2">
            <div className="wrapper">
              <h5 className="name text-center">{this.state.name}</h5>
              <img
                className="beer-img  mr-3 float-left"
                src={this.state.image_url}
              ></img>
              <p className="description">{this.state.description}</p>
              <button className="btn">
                <StarBorderIcon />
              </button>
            </div>{" "}
          </div>
          <div className="col-md-4 my-2">
            <div className="wrapper">
              <h5 className="name text-center">{this.state.name}</h5>
              <img
                className="beer-img  mr-3 float-left"
                src={this.state.image_url}
              ></img>
              <p className="description">{this.state.description}</p>
              <button className="btn">
                <StarBorderIcon />
              </button>
            </div>{" "}
          </div>
          <div className="col-md-4 my-2">
            <div className="wrapper">
              <h5 className="name text-center">{this.state.name}</h5>
              <img
                className="beer-img  mr-3 float-left"
                src={this.state.image_url}
              ></img>
              <p className="description">{this.state.description}</p>
              <button className="btn">
                <StarBorderIcon />
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default Beer;
