import React from "react";
import "./Favourites.css";
import { Api } from "../../Api/Api";
import BeerItem from "../BeerItem/BeerItem";
import { connect } from "react-redux";
import { toggleFavorite } from "../../store/favourites/actions";
const api = new Api();
class Favourites extends React.Component {
  /**
   * State
   */
  state = {
    loading: false,
    beersList: [],
  };

  /**
   * Hooks
   */

  componentDidMount() {
    //получаем данные с api
    this.setState({ loading: true });
    api.getBeersList({ ids: this.props.itemIds.join("|") }).then((data) =>
      this.setState({
        beersList: data,
        loading: false,
      })
    );
  }

  /**
   * Render
   */
  render() {
    const { loading, beersList } = this.state;
    const { itemIds } = this.props;

    return loading ? (
      <p>is Loading</p>
    ) : (
      <div className="row">
        {beersList
          .filter((beerData) => itemIds.indexOf(beerData.id) !== -1)
          .map((beerData) => (
            <BeerItem
              key={beerData.id}
              beerData={beerData}
              isFavourite={itemIds.indexOf(beerData.id) !== -1}
              toggleFavourite={this.props.toggleFavorite}
            />
          ))}
      </div>
    );
  }
}
export default connect(({ favourites }) => ({ favourites }), {
  toggleFavorite,
})(Favourites);
