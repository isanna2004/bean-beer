import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
export default class BeerItem extends React.Component {
  render() {
    const { beerData, isFavourite,toggleFavourite } = this.props;
    const Star = isFavourite ? StarIcon : StarBorderIcon
    return (
      <div className="col-md-4 my-3" key={beerData.id}>
        <div className="wrapper">
          <div className="row">
            <Star onClick = {()=>toggleFavourite(beerData.id)}/>
            <div className="col-3">
              <img
                className="beer-img"
                src={beerData.image_url}
                alt="beer bottle"
              />
            </div>
            <div className="col-7">
              <h5>{beerData.name}</h5>{" "}
              <p className="description">{beerData.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
