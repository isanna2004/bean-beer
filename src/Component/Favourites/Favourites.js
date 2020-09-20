import React from "react";
import "./Favourites.css";

class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      favourites: [],
    };
  }
  componentDidMount() {
    let favourites = this.props.favourites;
    this.setState({
      favourites: favourites,
    });
     fetch(
      "https://api.punkapi.com/v2/beers/?" +
        new URLSearchParams({ ids: this.state.favourites.join("|") })
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          data: res,
        })
      );
  }

  render() {
    const{data} = this.state;
   
    return (

      <div>
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div className="col-md-4 my-3" key={item.id}>
                <div className="wrapper">
                  <div className="row">
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
export default Favourites;
