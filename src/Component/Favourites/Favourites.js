import React from "react";
import "./Favourites.css";
import {Api} from "../../Api/Api"
import BeerItem from "../BeerItem/BeerItem"
const api = new Api()
export default class Favourites extends React.Component {
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
    api.getBeersList({ids:this.props.itemIds.join('|')}).then((data) =>
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
    const{loading,beersList}=this.state
    const{itemIds}= this.props
    return loading ? (
      <p>is Loading</p>
    ) : (
      <div className="row">
        {beersList.map((beerData) => (
          <BeerItem
            key={beerData.id}
            beerData={beerData}
            isFavourite={itemIds.indexOf(beerData.id) !== -1}
            toggleFavourite={() => this.props.toggleFavourite(beerData.id)}
          />
        ))}
      </div>
    );
  
}
}