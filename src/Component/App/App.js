import React from "react";
import Header from "../Header/Header";
import { Switch } from "react-router-dom";
import "./App.css";
import BeerItem from "../BeerItem/BeerItem";
import Favourites from "../Favourites/Favourites";
import { Api } from "../../Api/Api";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import connect from "react-redux/lib/connect/connect";
import {setBeersList} from "../../store/beers/actions"
const api = new Api();

class App extends React.Component {
  /**
   * State
   */
  state = {
    loading: false,
    beersList: [],
    search: "",
    searchedBeersList: [],
    favourites: [],
  };

  /**
   * Hooks
   */

  componentDidMount() {
    //получаем данные с api
    this.setState({ loading: true })

    api.getBeersList().then(data =>{
      this.setState({
        loading: false,
      })
       this.props.setBeersList(data)
  })
   
  }
  /**
   * Methods
   */
  handleSearch = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    api
      .getBeersList({
        beer_name: this.state.search.toLowerCase().replace(" ", "_"),
      })
      .then((data) => {
        this.setState({
          searchedBeersList: data,
          loading: false,
        });
      });
  };
  toggleFavourite = (id) => {
    this.setState((state) => {
      const idx = state.favourites.indexOf(id);
      return {
        favourites:
          idx === -1
            ? [...state.favourites, id]
            : [
                ...state.favourites.slice(0, idx),
                ...state.favourites.slice(idx + 1),
              ],
      };
    });

  };

  /**
   * Render
   */

  render() {
    const {
      favourites,
      searchedBeersList,
      loading,
      search,
    } = this.state;
    const {beersList} = this.props
    const beers = searchedBeersList.length ? searchedBeersList : beersList;
    return (
      <div>
        <Header/>

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
                      this.setState((state) => ({
                        search: val,
                        searchedBeersList: !val.trim()
                          ? []
                          : state.searchedBeersList,
                      }));
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
                      toggleFavourite={this.toggleFavourite}
                    />
                  ))}
                </div>
              )}
            </Route>
            <Route path="/favourites">
              <Favourites
               
                itemIds={favourites}
                toggleFavourite={this.toggleFavourite}

                
              />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
export default connect(({beers,favourites})=>({
  ...beers,
  favourites:favourites
}),{
  setBeersList
})(App);
