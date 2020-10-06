import React from "react";
import Header from "../Header/Header";
import { Switch } from "react-router-dom";
import "./App.css";
import BeerItem from "../BeerItem/BeerItem";
import Favourites from "../Favourites/Favourites";
import { Api } from "../../Api/Api";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import { loadBeersList } from "../../store/beers/actions";
import { setSearchedBeersList } from "../../store/beers/actions";
import { loadSearchedBeersList } from "../../store/beers/actions";
import { toggleFavorite } from "../../store/favourites/actions";
const api = new Api();

class App extends React.Component {
  /**
   * State
   */
  state = {
    loading: false,

    search: "",
  };

  /**
   * Hooks
   */

  componentDidMount() {
    //получаем данные с api
    this.setState({ loading: true });
this.props.loadBeersList().then(()=> this.setState({
        loading: false,
      })
)
    
  }
  /**
   * Methods
   */
  handleSearch = (e) => {
    e.preventDefault();
  this.props.loadSearchedBeersList({
    beer_name:this.state.search
    .toLowerCase()
    .replace(' ','_')
  }).then(()=> this.setState({
        loading: false,
      }),
  )
  };


  /**
   * Render
   */

  render() {
    const {loading, search } = this.state;
    const { beersList, searchedBeersList, favourites } = this.props;
    const beers = searchedBeersList.length ? searchedBeersList : beersList;
    return (
      <div>
        <Header />

        <div className="container">
          {/**
           * Search form
           */}

          {/**
           * Beers List
           */}
          <Switch>
            <Route path="/" exact>
              <div className="search">
                <form onSubmit={this.handleSearch}>
                  <input
                    value={search}
                    className="search-input"
                    type="text"
                    placeholder="Search for beer..."
                    onChange={(e) => {
                      const val = e.target.value;
                      this.setState((props) => ({
                        search: val,
                        
                      }));
                      if (!val.trim()) this.props.setSearchedBeersList([])
                    }}
                  />
                  <input
                    type="submit"
                    value="Search"
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      padding: "10px 20px",
                    }}
                  />
                </form>
              </div>
              {loading ? (
                <p>is Loading</p>
              ) : (
                <div className="row">
                  {beers.map((beerData) => (
                    <BeerItem
                      key={beerData.id}
                      beerData={beerData}
                      isFavourite={favourites.indexOf(beerData.id) !== -1}
                      toggleFavourite={this.props.toggleFavorite}
                    />
                  ))}
                </div>
              )}
            </Route>
            <Route path="/favourites">
              <Favourites
                itemIds={favourites}
              
              />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
export default connect(
  ({ beers, favourites }) => ({
    ...beers,
    favourites: favourites,
  }),
  {

    setSearchedBeersList,
    loadSearchedBeersList,
    toggleFavorite,
    loadBeersList,
  }
)(App);
